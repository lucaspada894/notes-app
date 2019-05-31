const notes = require('./notes');
const chalk = require('chalk');
const yargs = require('yargs');

var command = process.argv[2];

//customize yargs version

yargs.version('1.1.0')

//console.log(process.argv);


//add, remove, red, list notes

//Create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
       return notes.addNote(argv.title, argv.body);
    }
})
//create remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'title of note to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function(argv){
       return notes.removeNote(argv.title);
    }
})

//create list command
yargs.command({
    command: 'list',
    describe: 'list all commands',
    handler: function(){
        console.log('listing all commands')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read a note',
    handler: function(){
        console.log('reading a note');
    }
})
yargs.parse();
//console.log(yargs.argv);