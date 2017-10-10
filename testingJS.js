// function testNoteIsCreated() {
//   var note = new Note('hi');
//   assert.isTrue(note.text === 'hi');
// };
//
//  testNoteIsCreated();

 function noteListCreated() {
   var noteList = new NoteList();
   assert.isTrue(noteList.notes === []);
 };

 noteListCreated();
