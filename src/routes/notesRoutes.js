const express = require("express");
const { notesRead,notesCreate,notesDelete,notesUpdate,notesPatched } = require("../controllers/notecontrollers");

const router = express.Router();

router.get("/", notesRead)
router.post("/", notesCreate)
router.patch("/:id", notesPatched)
router.put("/:id", notesUpdate)
router.delete("/:id", notesDelete)


module.exports = router;