const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();

require("./db");

const userRouter = require("./routers/routes/users");
const rolesRouter = require("./routers/routes/roles");
const coursesRouter = require("./routers/routes/courses");
const commentsRouter = require("./routers/routes/comments");
const replysRouter = require("./routers/routes/replys");
const chatsRouter = require("./routers/routes/chats");

const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/user", userRouter);
app.use(rolesRouter);
app.use("/course", coursesRouter);
app.use("/comments", commentsRouter);
app.use("/replys", replysRouter);
app.use("/chats", chatsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`SERVER ON ${PORT}`);
});
