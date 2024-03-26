const express = require("express");
const router = express.Router();
const myModel = require("../models/index");

router.use(express.json());

router.get("/", async (req, res) => {
  try {
    const result = await myModel.selectBoardData();

    res
      .status(200)
      .json({ message: "Data selected successfully", data: result });
  } catch (error) {
    console.error("Error selecting data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/board/create", async (req, res) => {
  try {
    const requestData = req.body;
    const result = await myModel.createBoardData(requestData);

    res
      .status(200)
      .json({ message: "Data created successfully", data: result });
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
