const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

require("./db");

const userRouter = require("./routers/routes/users");
const rolesRouter = require("./routers/routes/roles");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use(rolesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER ON ${PORT}`);
});
