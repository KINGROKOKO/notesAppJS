function testNoteIsCreated() {
  var note = new Note('hi');
  assert.isTrue(note.text === 'hi');
};

 testNoteIsCreated();

 function testNewNoteInNotelist() {
   var noteList = new NoteList();
   noteList.newNote('hi');
   assert.isTrue(noteList.notes[0].text === 'hi');
 };

 testNewNoteInNotelist();

 function testNotesReturned() {
   var noteList = new NoteList();
   var notesBack = []
   notesBack.push(noteList.newNote('hi'));
   notesBack.push(noteList.newNote('hi'));

   assert.isTrue(notesBack.length === 2);
 };

 testNotesReturned();

 function testNoNoteToDisplay() {
   var noteList = new NoteList();
   var listView = new ViewingList(noteList);
   assert.isTrue(listView.view() === "There are no notes to display");
 };
