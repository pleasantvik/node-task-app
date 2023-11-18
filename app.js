const yargs = require("yargs");
const notesFn = require("./notes");

// const command = process.argv[2];

// switch (command) {
//   case "add":
//     console.log("Adding note");
//     break;
//   case "remove":
//     console.log("Removing note");
//     break;

//   default:
//     return null;
// }

// console.log(process.argv);

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    // console.log("Title: " + argv.title);
    // console.log("Body: " + argv.body);
    notesFn.addNote(argv.title, argv.body);
  },
});
// Create remove command
yargs.command({
  command: "remove",
  describe: "Removea new note",
  builder: {
    title: {
      demandOption: true,
      describe: "Note title",
    },
  },
  handler: function (argv) {
    // console.log("Removing a new note");

    notesFn.removeNote(argv.title);
  },
});
// Create remove command
yargs.command({
  command: "list",
  describe: "List new note",
  handler: function () {
    notesFn.listNotes();
  },
});
// Create read command
yargs.command({
  command: "read",
  describe: "Read a  new note",
  builder: {
    title: {
      demandOption: true,
      describe: "Note title",
      type: "string",
    },
  },

  handler: function (argv) {
    notesFn.readNotes(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
