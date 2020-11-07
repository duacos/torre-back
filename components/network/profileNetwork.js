const express = require("express");
const { show } = require("../views/profileView");

const router = express.Router();

router.get("/:username", show());

module.exports = router;
