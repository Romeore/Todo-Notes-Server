const mongoose = require('mongoose');

const NotesSchema = mongoose.Schema({
    noteName: {
        type: String,
        required: true
    },
    todoNotes: {
        type: Array
    },
    createDate:{
        type: Date,
        default: Date.now
    },
    lastUpdateDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Notes', NotesSchema);
