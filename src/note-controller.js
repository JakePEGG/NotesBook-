(function(exports) {
  function NoteController(notelist) {
    this.Notelist = notelist;
    // this.view = new NoteListView(notelist);
  }

  NoteController.prototype.wrapNotesInHtml = function(view, notelist) {
    return this.create_html.innerHTML = view.getHTML(notelist);
  };

  NoteController.prototype.create_html = function() {
    var id = document.getElementById('app');
    return id;
  };
    // document.getElementById("app").innerHTML = this.view.getHTML();

  exports.NoteController = NoteController;

})(this);







//
//
// window.onload = function(){
//   document.getElementById("app").innerHTML = "Howdy!";
//   var content = document.getElementById("app").innerHTML;
//   consolte.log(content);
// };
