
const express = require('express');
const router = express.Router();
const Note = require('../modules/NoteSchema');

// Returns all the notes.

router.get('/', async (req, res) => {
    try{
        const notes = await Note.find();
        res.json(notes);
    }
    catch(err){
        res.json({message: error});
    }
});

// Add a note
router.post('/', async (req, res) => {
    const note = new Note( {
        noteName: req.body.noteName,
        description: req.body.description,
        createDate: req.body.createDate,
        lastUpdateDate: req.body.lastUpdateDate
    });

    try {
    const savedNote = await note.save();
    res.json(savedNote); }
    catch(err) {
        res.json({message: err});
    }
});

// Delete specific note

router.delete('/:noteId', async (req,res) =>{
    try {
    const removedNote = await Note.remove({_id: req.params.noteId});
    res.json(removedNote);
    }
    catch(error){
        res.json({message : error});
    }
});

//Update a note

router.patch('/:noteId', async (req,res) => {
    try {
        const updatedNote = await Note.updateOne({_id: req.params.noteId},
             {$set: {todoNotes: req.body.todoNotes, lastUpdateDate: Date.now()}});
        res.json(updatedNote);
        }
        catch(error){
            res.json({message : error});
        }
});

module.exports = router;
