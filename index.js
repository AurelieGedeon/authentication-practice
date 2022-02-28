const express = require("express");
const cors = require("cors");
const { createUser } = require("./src/users");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(cors());

app.post("/users", createUser);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}...`);
});
