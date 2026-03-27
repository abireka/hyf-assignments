const filesystem = require("fs/promises");
const express = require("express");
const knexLibrary = require("knex");

const app = express();
app.use(express.json());

const knex = knexLibrary({
  client: "sqlite3",
  connection: {
    filename: "./database.db",
  },
  useNullAsDefault: true,
});

app.get("/", (request, response) => {
  response.send("Hello from my server");
});

app.get("/read", async (req, res) => {
  const fileContent = await filesystem.readFile("test.txt", "utf-8");
  res.send(fileContent);
});

app.post("/write", async function (req, res) {
  const name = req.body.name;
  const password = req.body.password;

  await knex("users").insert({ name, password });
  res.send("user created");
});

app.get("/user-count", async (req, res) => {
  const result = await knex("users").count("id as count");
  res.send({ count: result[0].count });
});

app.get("/time", (req, res) => {
  res.send(new Date().toString());
});

app.get("/health", (req, res) => {
  res.send("ok");
});

app.listen(3000, function () {
  console.log("server is ready");
});
