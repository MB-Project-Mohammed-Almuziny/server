const express = require("express");

const { createRole, getRoles } = require("./../controllers/roles");
const authentication = require("./../middlewares/authentication");

const rolesRouter = express.Router();

rolesRouter.post("/createRole", authentication, createRole);
rolesRouter.get("/getRoles", authentication, getRoles);

module.exports = rolesRouter;
