(function (exports) {
  function NoteListView(notelist){
    this.notelist = notelist;
    };

    NoteListView.prototype.getHTML = function(notelist){
      var array = this.notelist.printList();
      var new_array = [];
      for(var i = 0; i < array.length; i++) {
        new_array.push(`<li><div>${array[i].text.slice(0,20)}</div></li>`);
      }
      new_array.unshift("<ul>");
      new_array.push("</ul>");
      return new_array.join("");
    };

    exports.NoteListView = NoteListView;

  })(this);
