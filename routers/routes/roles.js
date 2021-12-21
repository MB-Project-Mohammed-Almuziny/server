const express = require("express");

const { createRole } = require("./../controllers/roles");

const rolesRouter = express.Router();

rolesRouter.post("/createRole", createRole);
rolesRouter.get("/getRole", (req, res) => {
  res.send("success");
});

module.exports = rolesRouter;
