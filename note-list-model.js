(function(exports){
  function NoteList(){
    this.notes = [];
  };

  NoteList.prototype.newNote = function(text){
    this.notes.push(new Note(text));
  };

  NoteList.prototype.showNotes = function(){
    for (var i = 0; i < this.notes.length; i++) {
        console.log(this.notes[i].text);
     };
   };
  exports.NoteList = NoteList;

})(this);

(function(exports){
 function Note(text){
  this.text = text;
};
 exports.Note = Note;
})(this);
