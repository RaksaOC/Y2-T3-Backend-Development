import fs from 'fs';

const filePath = "./hello.txt";
// Write to a file (synchronously)
const write = async () => fs.writeFileSync(filePath, "Hello, Node js beginner 2!");
//I Read the file (synchronously)
const read = async () => fs.readFileSync(filePath, "utf8");
await write();
const content = await read();
console.log("File content:", content);