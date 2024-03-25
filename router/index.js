const express = require("express");
const router = express.Router();
const myModel = require("../models/index");

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
