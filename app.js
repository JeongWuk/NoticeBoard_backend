const express = require("express");
const app = express();
const cors = require("cors");

const router = require("./router/index");

app.use(cors());
app.use(router);

const port = 4000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
