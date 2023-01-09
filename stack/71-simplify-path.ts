import assert from "assert";

export function simplifyPath(path: string): string {
  const stack: string[] = [];
  const arr = path.split("/");

  arr.forEach((dir) => {
    if (!dir) {
      return;
    }

    if (dir === ".") {
      return;
    }

    if (dir === "..") {
      stack.pop();
      return;
    }
    stack.push(dir);
  });

  return "/" + stack.join("/");
}

assert.equal(simplifyPath("/home/"), "/home");
assert.equal(simplifyPath("/../"), "/");
assert.equal(simplifyPath("/home//foo/"), "/home/foo");
assert.equal(simplifyPath(""), "/");
assert.equal(
  simplifyPath("/../home/./user/Desktop/../Downloads/"),
  "/home/user/Downloads"
);
