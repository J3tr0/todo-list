const bodyParser = require("body-parser");

const data = [
  { item: "Get Milk" },
  { item: "walk dog" },
  { item: "kick some coding ass" }
];

const urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = app => {
  app.get("/", (req, res) => {
    res.render("todo", { todos: data });
  });

  app.post("/", urlencodedParser, (req, res) => {
    data.push(req.body);
    res.json(data);
  });

  app.delete("/", (req, res) => {
    //stuff
  });
};
