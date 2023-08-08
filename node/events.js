const fs=require("fs");
const file=fs.createReadStream("./data.txt");
file.on("open", ()=> {
console.log("data.txt file is open");
});
const data=" HELLO WORLD";
fs.writeFileSync("./data.txt",data);
fs.appendFileSync("./data.txt",data);