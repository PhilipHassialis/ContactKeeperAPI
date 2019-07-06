const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");

const User = require("../models/User");
const Contact = require("../models/Contact");

// @route   GET api/contacts
// @desc    get all user's contacts
// @access  private
router.get("/", auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server error");
    }
});

// @route   POST api/contacts
// @desc    add new contact
// @access  private
router.post("/", (req, res) => {
    res.send("add contact");
});

// @route   PUT api/contacts/:id
// @desc    update contact
// @access  private
router.put("/:id", (req, res) => {
    res.send("update contact");
});

// @route   DELETE api/contacts/:id
// @desc    delete contact
// @access  private
router.delete("/:id", (req, res) => {
    res.send("delete contact");
});

module.exports = router;
