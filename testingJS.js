function testNoteIsCreated() {
  var note = new Note('hi');
  assert.isTrue(note.text === 'hi');
};

 testNoteIsCreated();

 function noteListCreated() {
   var noteList = new NoteList();
   assert.isTrue(noteList.notes[0]=== 'note');
 };

 noteListCreated();

 function testNewNoteInNotelist() {
   var noteList = new NoteList();
   noteList.newNote('hi');
   assert.isTrue(noteList.notes[1].text === 'hi');
 };

 testNewNoteInNotelist();
