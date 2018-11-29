const bodyParser = require("body-parser");

const data = [
  { item: "Get Milk" },
  { item: "walk dog" },
  { item: "kick some coding ass" }
];

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("todo", { todos: data });
  });

  app.post("/", (req, res) => {
    //stuff
  });

  app.delete("/", (req, res) => {
    //stuff
  });
};
