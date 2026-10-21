const express = require("express");
const Note = require("../models/Note.js")

async function notesRead (req,res) {
    try {
        const note = await Note.find().sort({createdAt:-1})
        res.status(200).json(note)
    } catch (error) {
        console.error("Error in getAllnotes controller",error);
        res.status(500).json({message:'Internal server error'});
    }
};

async function notesCreate (req,res) {
    try {
        const {title, content} = req.body;
        const note = new Note({title, content});

        const newNote = await note.save();
        res.status(201).json(newNote);
    } catch (error) {
        console.error("Error in notesCreate controller",error);
        res.status(500).json({message:'Internal server error'});
    }
};

async function notesUpdate (req,res) {
    try {
        const {title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {title, content}, {new: true})
        if (!updatedNote) {
            return res.status(404).json({message:'Note not found'});
        }
        res.status(200).json(updatedNote)
    } catch (error) {
        console.error("Error in notesUpdate controller",error);
        res.status(500).json({message:'Internal server error'});
    }
};

async function notesDelete (req,res) {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);
        if (!deletedNote) {
            return res.status(404).json({message:'Note not found'});
        }
        res.status(200).json({message:'Note deleted successfully'});
    } catch (error) {
        console.error("Error in notesDelete controller",error);
        res.status(500).json({message:'Internal server error'});
    }
};

async function notesPatched (req,res) {
    try {
        const { title,content } = req.body
        const patchedNote = await Note.findById(req.params.id, {title,content}, {new: true});
        if (!patchedNote) {
            return res.status(404).json({message:'Note not found'});
        }
        res.status(200).json(patchedNote);
    } catch (error) {
        console.error("Error in notesPatched controller",error);
        res.status(500).json({message:'Internal server error'});
    }
};

module.exports = { notesRead, notesCreate, notesUpdate, notesDelete, notesPatched };