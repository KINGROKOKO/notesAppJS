window.onload = function(){
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

 function testNewController() {
   var controller = new noteController();
   assert.isTrue(controller.noteList.notes[0].text === "hi");
 };

 testNewController()

 function testHTMLOutput(){
   var NoteListDouble = {
     newNote: function() {}
 };

  var text = 'hey man'
  var ViewingListDouble = {
    view: function() {return text}
  };

 var controller = new noteController(NoteListDouble);
 controller.viewing = ViewingListDouble
 controller.show();
 assert.isTrue(document.getElementById('app').innerHTML === text);
 };

 testHTMLOutput()

 function testingSingleNoteView() {

    var noteDouble = {
     text: 'hi'
   }
   var singleNote = new SingleNote(noteDouble);
   console.log(singleNote.view())
   assert.isTrue(singleNote.view() === "<div>hi</div>");
 };

 testingSingleNoteView()
 };
