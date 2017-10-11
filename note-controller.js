(function(exports){
function noteDisplay(noteList = new NoteList()){
  this.noteList = noteList
  this.noteList.newNote('hiti')
  this.viewing = new ViewingList(this.noteList)
};

 noteDisplay.prototype.show = function(){
  var list = this.viewing.view();
  var item = document.getElementById('app');
  item.innerHTML = list;
};

noteDisplay.prototype.archive = function(){
 return this.noteList.notes
};
  exports.noteDisplay = noteDisplay;
})(this);


// changeText("howdy");
//
// (function(exports){
//  function Note(text){
//   this.text = text;
// };
//  exports.Note = Note;
// })(this);
