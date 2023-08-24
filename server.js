const express = require("express");
const logger = require("morgan");

require("dotenv").config();
const app = express();

app.use(logger("dev"));
// get access to the body
app.use(express.json())
app.use("/posts", require("./routes/post.route"));

app.use((error, req, res, next) => {
  const message = error.message;
  const status = error.status || 500;
  const data = error.data;

  return res.status(status).json({ message, data });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("listening on port " + port);
});
