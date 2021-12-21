const express = require("express");

const rolesRouter = express.Router();

rolesRouter.post("/createRole", (req, res) => {
  res.send("success");
});

module.exports = rolesRouter;
