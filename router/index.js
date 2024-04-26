const express = require("express");
const router = express.Router();
const myBoardModel = require("../models/board");
const myUserModel = require("../models/user");

router.use(express.json());

router.get("/board/list", async (req, res) => {
  try {
    const result = await myBoardModel.getBoardData();

    res
      .status(200)
      .json({ message: "Data selected successfully", data: result });
  } catch (error) {
    console.error("Error selecting data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/board/:id", async (req, res) => {
  try {
    const result = await myBoardModel.getBoardItemData(req.params.id);

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
    const result = await myBoardModel.createBoardData(requestData);

    res
      .status(200)
      .json({ message: "Data created successfully", data: result });
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/user/create", async (req, res) => {
  try {
    const requestData = req.body;
    const result = await myUserModel.createUserData(requestData);

    res
      .status(200)
      .json({ message: "Data created successfully", data: result });
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/user/check", async (req, res) => {
  try {
    const requestData = req.body;
    const result = await myUserModel.checkUserData(requestData);

    res
      .status(200)
      .json({ message: "Data created successfully", data: result });
  } catch (error) {
    console.error("Error creating data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = router;
