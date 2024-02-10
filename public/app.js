const PORT = process.env.PORT || 3000;
const path = require("path");
const express = require("express");
const app = express();

// Express settings
app.set("view engine", "ejs");

// Static resource rooting.
app.use("/public", express.static(path.join(__dirname, "/public")));

// Dynamic resource rooting.
app.use("/", require("./routes/index.js"));

// Execute web application.
app.listen(PORT, () => {
  console.log(`Application listening at :${PORT}`);
});
