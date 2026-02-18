const express = require("express");
const cors = require("cors");

const roleRoutes = require("./routes/roleRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// GitHub Codespaces and cloud environments often use PORT from environment variables
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
