const { time } = require("console");
const express = require("express");
const app = express();
app.use(express.static("public"));
const formidable = require("express-formidable");
app.use(formidable()); 
const fs = require("fs").promises;

 timeNow =  Date.now()
 timeNowString = timeNow.toString()

 my_json = {
    "1467390356291": "This is my very first blog post!",
    "1467390355656": "This is my second blog post!",
    [timeNowString]: "This is current post!"
}
console.log(my_json);
console.log(JSON.stringify(my_json));
fs.writeFile("./posts2.json",  JSON.stringify(my_json)) 
  .then(() => {
    console.log("this is the current moment");
  })