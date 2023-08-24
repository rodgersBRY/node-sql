const express = require("express");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "https://localhost:8080",
};

// routers
const routes = require("./routes/post.routes")

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

app.use("/api/posts", routes)

const port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log("listening on port " + port);
});
