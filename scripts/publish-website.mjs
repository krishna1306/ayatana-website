import { execFileSync } from "node:child_process";
import { cpSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const run = (command, args, options = {}) => execFileSync(command, args, { encoding: "utf8", stdio: "inherit", ...options });
const output = (command, args, options = {}) => execFileSync(command, args, { encoding: "utf8", ...options }).trim();
const repoRoot = output("git", ["rev-parse", "--show-toplevel"]);
const branch = output("git", ["branch", "--show-current"]);
const status = output("git", ["status", "--porcelain"]);
const messageArgument = process.argv.find((argument) => argument.startsWith("--message="));
const message = messageArgument?.slice("--message=".length) || process.env.npm_config_message || "Publish website";

if (branch !== "main") throw new Error("Run this command from the main branch.");
if (status) throw new Error("Commit or stash all source changes before publishing.");

run("npm", ["run", "build"], { cwd: repoRoot });

const worktreePath = mkdtempSync(join(tmpdir(), "ayatana-website-"));
let worktreeAdded = false;

try {
  run("git", ["worktree", "add", "--detach", worktreePath, "website"], { cwd: repoRoot });
  worktreeAdded = true;
  run("git", ["rm", "-rf", "."], { cwd: worktreePath });
  cpSync(join(repoRoot, "dist"), worktreePath, { recursive: true, force: true });
  run("git", ["add", "--all"], { cwd: worktreePath });

  let hasChanges = true;
  try {
    run("git", ["diff", "--cached", "--quiet"], { cwd: worktreePath });
    hasChanges = false;
  } catch {}

  if (!hasChanges) {
    console.log("Website branch is already current.");
  } else {
    run("git", ["commit", "-m", message], { cwd: worktreePath });
    const commit = output("git", ["rev-parse", "HEAD"], { cwd: worktreePath });
    run("git", ["branch", "-f", "website", commit], { cwd: repoRoot });
    console.log(`Created website commit ${commit}. Push it with: git push origin website`);
  }
} finally {
  if (worktreeAdded) run("git", ["worktree", "remove", "--force", worktreePath], { cwd: repoRoot });
  else rmSync(worktreePath, { recursive: true, force: true });
}
