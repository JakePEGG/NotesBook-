(function (exports) {
  function NoteListView(notelist){
    this.notelist = notelist;
    };

  // NoteListView.prototype.getHTML = function() {
  //   let html = this.notelist.printList();
  //   let htmll = html.map(note)
  //   console.log(htmll)
  // };
  //   var arraylist = m

    NoteListView.prototype.getHTML = function(notelist){
      var array = this.notelist.printList();
      var new_array = [];
      for(var i = 0; i < array.length; i++) {
        new_array.push(`<li><div>${array[i].text}</div></li>`);
      }
      new_array.unshift("<ul>");
      new_array.push("</ul>");
      return new_array.join("");
      // var new_array = [];
      // for (var i in array) {
      //   new_array.push(`<li><div>${array[i].text}</div></li>`);
      // }
      // new_array.unshift("<ul>");
      // new_array.push("</ul>");
      // return new_array.join("");
    };



    // let html = this.notelist.printList().map(note => {
  //     return "<li><div>" + note.text + "</div></li>"
  //   });
  //   return "<ul>" + html.join("") + "</ul>"
  // }

    exports.NoteListView = NoteListView;


  })(this);
