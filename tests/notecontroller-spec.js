function TestHTMLlist(){
    var notelist = new NoteList();
    let note = new Note("Favourite drink: seltzer")
    notelist.addToList(note);
    var view = new NoteListView(notelist)
    var notecontroller = new NoteController(notelist);

    notecontroller.create_html = function(){
      var doc = document.createElement('app')
      doc.innerHTML = "<div id='app'>hello</div>"
      return doc

    }

    assert.isTrue(notecontroller.wrapNotesInHtml(view) === ("<ul><li><div>" + "Favourite drink: sel" + "</div></li></ul>"));

    console.log("TestHTMLlist is passing")
  }

  TestHTMLlist();
