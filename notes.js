const fs = require('fs')

const getNotes = function () {
    return 'your notes...';
}

const addNote = function(title, body){
    const notes = loadNotes();//array of objects
    const duplicatenotes = notes.filter(function (note) {
        return note.title === title;
    })

    if(duplicatenotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes);
        console.log('new note added!');
        
    }
    else {
        console.log('duplicate note!');
    }

        //console.log(notes);
    
     
    //console.log(notes);
}

const removeNote = function (title){
    const notes = loadNotes();
    var newArr = new Array();

    const findNote = notes.filter(function(note) {
        
            return note.title !== title; 
    })
    
    if(findNote.length === notes.length) {
        console.log('note not found');
    }
    else {
        console.log('note removed');
    }

    saveNotes(findNote);
}


const saveNotes = function(notes){
    const datajson = JSON.stringify(notes);
    fs.writeFileSync('notes.json', datajson);
}

const loadNotes = function(){

    try {
        const databuffer = fs.readFileSync('notes.json');
        const datajson = databuffer.toString();
        return JSON.parse(datajson);
        //console.log(JSON.parse(datajson));
    } catch (e){
        return [];
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}