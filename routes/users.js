import { Router } from "express";
import data from "../data.json" assert { type: "json" };

const usersRoute = new Router();

usersRoute.get("/hello", (req, res) => {
  res.send("Hello Users!");
});

usersRoute.get("/", (req, res) => {
  res.json(data);
});

usersRoute.get("/:id", (req, res) => {
  const id = parseInt(req.params.id, 10);
  const user = data.find((user) => user.id === id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  console.log(user);
  res.json(`User ID: ${user.id}, User name: ${user.name}`);
});

//bonus
const users = [...data];

usersRoute.post("/", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);

  res.status(201).send(newUser);
  console.log("New User: ", newUser);
  console.log("Users data: ", users);
});
export default usersRoute;
