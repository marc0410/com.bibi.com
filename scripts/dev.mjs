import { spawn } from "node:child_process";

// Accept the preview host's flags as well as the usual Next.js flags.
const args = process.argv.slice(2).flatMap((argument) => {
  if (argument === "--strictPort") return [];
  return [argument === "--host" ? "--hostname" : argument];
});
const child = spawn(
  process.execPath,
  ["node_modules/next/dist/bin/next", "dev", ...args],
  {
    stdio: "inherit",
  },
);
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}
child.on("exit", (code) => process.exit(code ?? 1));
