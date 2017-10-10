(function(exports){
  function NoteList(){
    this.notes = ['note'];
  };

  NoteList.prototype.newNote = function(text){
    this.notes.push(new Note(text));
  };
  exports.newNote = this.newNote;
  exports.NoteList = NoteList;

})(this);

(function(exports){
 function Note(text){
  this.text = text;
};
 exports.Note = Note;
})(this);
