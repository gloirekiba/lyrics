const express = require("express");
const Genius = require("genius-lyrics");

const { cors } = require("../middlewares/cors.middleware");

const router = express.Router();

router.use(cors);

router.get("/", async (req, res) => {
  const { query } = req.query;
  const Client = new Genius.Client();
  const searches = await Client.songs.search(query);

  if (searches.length === 0) {
    return res.status(404).json({ error: "No results found" });
  }

  const firstSong = searches[0];
  console.log(searches.length);
  const lyrics = await firstSong.lyrics();

  res.json({ lyrics });
});

module.exports = router;
