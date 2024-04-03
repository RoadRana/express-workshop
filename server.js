const express = require("express");
const app = express();
app.use(express.static("public"));
const formidable = require("express-formidable");
app.use(formidable()); 
const fs = require("fs").promises;


app.post("/create-post", (req, res) => {
    console.log(req.fields);
    console.log(req.body)
  });

app.listen(3000, () => {
    console.log("Server is listening on port 3000. Ready to accept requests!");
  });
  
 
  fs.readFile(__dirname + "/data/posts2.json")
  .then(file => {
    console.log(file);

    console.log(file.toString());
  const parsedFile = JSON.parse(file);

  })
  