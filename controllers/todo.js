const bodyParser = require("body-parser");

let data = [
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

  app.delete("/:item", (req, res) => {
    data = data.filter(todo => {
      return todo.item.replace(/ /g, "-") !== req.params.item;
    });
    res.json(data);
  });
};
