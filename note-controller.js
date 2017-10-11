(function(exports){
function noteController(noteList = new NoteList()){
  this.noteList = noteList
  this.noteList.newNote('hi')
  this.viewing = new ViewingList(this.noteList)
};

 noteController.prototype.show = function(){
  var list = this.viewing.view();
  var item = document.getElementById('app');
  item.innerHTML = list;
};

noteController.prototype.archive = function(){
 return this.noteList.notes
};
  exports.noteController = noteController;
})(this);


// changeText("howdy");
//
// (function(exports){
//  function Note(text){
//   this.text = text;
// };
//  exports.Note = Note;
// })(this);
