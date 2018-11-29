const express = require("express");
const todoController = require("./controllers/todo");

const app = express();
const port = 3000;

//setup template engine
app.set("view engine", "ejs");

//static file
app.use("/assets", express.static("./assets"));

//controllers
todoController(app);

//listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
