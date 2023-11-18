const fs = require("fs");
// const book = {
//   title: "React Enterprise",
//   author: "Thomas Shelby",
// };

// // NOTE: JSON.strigify converts JS object into JSON string
// const bookJson = JSON.stringify(book);

// // NOTE: JSON.parse converts JSON string into JS Object

// const parsedData = JSON.parse(bookJson);
// console.log(bookJson);
// console.log(parsedData);

// fs.writeFileSync("1-json.json", bookJson);

const dataJSON = fs.readFileSync("./1-json.json", "utf-8");

const data = JSON.parse(dataJSON);
data.age = 20;
data.name = "Adedayo";

console.log(data);

fs.writeFileSync("./1-json.json", JSON.stringify(data));
