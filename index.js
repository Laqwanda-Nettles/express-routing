import express from "express";
import mainRoute from "./routes/index.js";
import usersRoute from "./routes/users.js";

const app = express();

//middleware for json
app.use(express.json());

app.use("/", mainRoute);
app.use("/users", usersRoute);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

//middleware for handling 'Not found' error
const handle404 = (req, res) => {
  res.status(404).json({
    error: 404,
    message: "Not found.",
  });
};

app.use(handle404);

app.listen(3000, () => {
  console.log("Started Server on Port 3000!");
});
