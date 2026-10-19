const express = require("express");
const { notesRead,notesCreate,notesDelete,notesUpdate } = require("../controllers/notecontrollers");

const router = express.Router();

router.get("/", notesRead)
router.post("/", notesCreate)
router.put("/:id", notesUpdate)
router.delete("/:id", notesDelete)


module.exports = router;