(function (exports) {
  function NoteListView(notelist){
    this.notelist = notelist;
    };

  NoteListView.prototype.getHTML = function() {
    let html = this.notelist.list.map(note => {
      return "<li><div>" + note.text + "</div></li>"
    });
    return "<ul>" + html.join("") + "</ul>"
  }
    exports.NoteListView = NoteListView;


  })(this);
