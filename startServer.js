const app = require("./server");
const { execSync } = require("child_process");
const PORT = process.env.PORT || 3001;

if (process.env.NODE_ENV === "test") {
  try {
    console.log("Running tests...");
    execSync("npm start", { stdio: "inherit" });
    console.log("Test passed.");
  } catch (error) {
    console.error("Tets faild.");
    process.exit(1);
  }
}
