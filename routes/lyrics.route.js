const express = require("express");
const Genius = require("genius-lyrics");

const { cors } = require("../middlewares/cors.middleware");

const router = express.Router();

router.use(cors);

router.get("/", async (req, res) => {
  try {
    const { query, format } = req.query;

    if (!query) {
      throw new Error("No query provided");
    }

    const Client = new Genius.Client();
    const searches = await Client.songs.search(query);

    if (searches.length === 0) {
      throw new Error("No results found");
    }

    const firstSong = searches[0];
    const lyrics = await firstSong.lyrics();

    // if format is raw, return raw lyrics
    if (format === "raw") {
      return res.send(lyrics);
    }

    res.json({ lyrics });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
