(function(exports){
  function ViewingList(NotesList){
      this.list = NotesList
     };
 ViewingList.prototype.view = function(){
     for (var i = 0; i < this.list.notes.length; i++) {
         console.log("<ul><li><div>" + this.list.notes[i].text + "</div></li></ul>")
  };
};
  exports.ViewingList = ViewingList;
})(this);
