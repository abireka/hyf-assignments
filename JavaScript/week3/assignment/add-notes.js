const notes = [];

// 1. Save a note
function saveNote(content, id) {
  notes.push({
    content: content,
    id: id,
  });
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);


// 2. Get a note
function getNote(id) {
  if (typeof id !== "number") {
    console.log("Error: id must be a number.");
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    if (notes[i].id === id) {
      return notes[i];
    }
  }

  return "Note not found";
}

const firstNote = getNote(1);
console.log(firstNote);


// 3. Log out all notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    const note = notes[i];
    console.log(
      `The note with id: ${note.id}, has the following note text: ${note.content}`
    );
  }
}

logOutNotesFormatted();
