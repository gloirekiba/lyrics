if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const path = require("path");
const express = require("express");
const morgan = require("morgan");

const lyricsRoute = require("./routes/lyrics.route");

const app = express();

app.use(express.static(path.resolve(__dirname, "client", "build")));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/lyrics", lyricsRoute);

app.all("*", (req, res) => {
  res.status(404).json({ error: "Not found" });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
