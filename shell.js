const { exec } = require("child_process");
const { stdout, stderr } = require("process");
const readline = require("readline");

let cm1 = "cd";
let cm2 = "chdir";
let cm3 = "dir";
let cm4 = "exit";

exec(`${cm1} && ${cm2} && ${cm3} && ${cm4}`, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.log(`stderr: ${error.message}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
});
