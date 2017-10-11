(function(exports){

  function SingleNote(note){
    this.note = note;
  };

  SingleNote.prototype.view = function(){
    return '<div>' + this.note.text + '</div>'
  };
  exports.SingleNote = SingleNote
})(this);
