const express = require("express");
const { createPoet, getPoet, getPoetById } = require("../controllers/poetDataController");
const router = express.Router();


router.route("/").post(createPoet);
router.route("/").get(getPoet);
router.route("/:id").get(getPoetById);

  

module.exports = router;
