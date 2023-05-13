const bodyParser = require("body-parser");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3050;
const { Client } = require("pg");
const db = new Client({ connectionString: process.env.DATABASE });
db.connect();
const cors = require("cors");

//Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

//Route

app.get("/api/about/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "SELECT hostId, id, description FROM listings WHERE hostId = $1;",
    [id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send("Error retrieving amenities from database");
      }
      res.send(result.rows);
    }
  );
});

//start the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}...`);
});
