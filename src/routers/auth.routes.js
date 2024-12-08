const router = require("express").Router()
const { save, show } = require("../controllers/auth.controller")

router.post("/save",save)
router.get("/show",show)

module.exports = router