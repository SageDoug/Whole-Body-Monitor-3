const express = require("express");
const router = express.Router();
const healthData = require("../data/healthData");

const permissions = {
  coach: [
    "calories",
    "activeMinutes",
    "heartRate",
    "sleepStages",
    "energyScore",
    "fallDetection"
  ],
  trainer: [
    "calories",
    "activeMinutes",
    "heartRate",
    "stress",
    "bodyComposition",
    "energyScore"
  ],
  doctor: "ALL",
  athlete: "ALL"
};

router.get("/dashboard/:role", (req, res) => {
  const role = req.params.role.toLowerCase();
  const athleteData = healthData.athlete;

  if (!permissions[role]) {
    return res.status(403).json({ error: "Invalid role" });
  }

  if (permissions[role] === "ALL") {
    return res.json(athleteData);
  }

  const filteredData = {};
  permissions[role].forEach((key) => {
    filteredData[key] = athleteData[key];
  });

  res.json(filteredData);
});

module.exports = router;
