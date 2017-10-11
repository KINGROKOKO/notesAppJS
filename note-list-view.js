(function(exports){
  function ViewingList(NotesList){
      this.list = NotesList
     };
 ViewingList.prototype.view = function(){
    var list = ["<ul>"]
    if (this.list.notes.length === 0){
      return "There are no notes to display"
    }else{
     for (var i = 0; i < this.list.notes.length; i++) {
         list.push ("<li>" + this.list.notes[i].text + "</li>")
       }
         list.push("</ul>");
      return list.join('');
};
};
  exports.ViewingList = ViewingList;
})(this);
