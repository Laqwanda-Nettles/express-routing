import { Router } from "express";

const mainRoute = new Router();

mainRoute.get("/", (req, res) => {
  res.send("Hello from the main router!");
});

mainRoute.get("/about", (req, res) => {
  res.send("About Us.");
});
export default mainRoute;
