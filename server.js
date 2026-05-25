const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());

const API_KEY = "2d87a44c9806a78801cce8bde43e8d28";

app.get("/live-matches", async (req, res) => {
  try {
    const response = await axios.get("https://v3.football.api-sports.io/fixtures?live=all", {
      headers: { "x-apisports-key": API_KEY }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Erreur API Football" });
  }
});

app.listen(3000, () => {
  console.log("Serveur backend lancé sur http://localhost:3000");
});
