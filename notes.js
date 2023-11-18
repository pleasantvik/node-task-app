const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => "Your notes...";

//* HELPER FUNCTIONS: (For loading existing note from file system, and wrting note to file system)
const loadNotes = () => {
  try {
    const dataJSON = fs.readFileSync("notes.json", "utf-8");

    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const dataObj = JSON.stringify(notes);
  fs.writeFileSync("./notes.json", dataObj);
};

// AddNotes
const addNote = (title, body) => {
  //? Get all notes
  const notes = loadNotes();

  //? Check if note title exist
  const foundNote = notes.find((note) => note.title === title);

  if (foundNote) {
    console.log("Note title already taken");
  } else {
    notes.push({
      title,
      body,
    });

    saveNotes(notes);
    console.log(chalk.green.inverse(`Note added successfully`));
  }
};

//? - Remove note
const removeNote = function (title) {
  const notes = loadNotes();
  const newNote = notes.filter((note) => note.title !== title);

  if (notes.length === newNote.length) {
    console.log(chalk.red(`No note was removed`));
  } else {
    console.log(chalk.green.inverse(`${title} removed successfully`));
    saveNotes(newNote);
  }
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.red.inverse(`Your Note`));
  notes.forEach((note) => console.log(chalk.green.inverse(note.title)));
};

const readNotes = (title) => {
  const notes = loadNotes();

  const foundNote = notes.find((note) => note.title === title);

  if (!foundNote) {
    console.log(chalk.red.inverse(`No note found`));
  } else {
    console.log(
      chalk.green.inverse(
        `title: ${foundNote.title} \n body: ${foundNote.body}`
      )
    );
  }
};
module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNotes,
};
