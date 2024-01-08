

const express = require("express");
const { createPoetry, getPoetry, getPoetryById } = require("../controllers/poetryController");
const router = express.Router();


router.route("/").post(createPoetry);
router.route("/").get(getPoetry);
router.route("/:id").get(getPoetryById);  

module.exports = router;
