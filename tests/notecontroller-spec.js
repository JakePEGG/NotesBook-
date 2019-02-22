function TestHTMLlist(){
    var notelist = new NoteList();
    let note = new Note("Favourite drink: seltzer")
    notelist.addToList(note);
    var view = new NoteListView(notelist)
    var notecontroller = new NoteController(notelist);

    notecontroller.create_html = function(){
      var doc = document.createElement('app')
      doc.innerHTML = "<div id='app'>hello</div>"
      console.log(doc.innerHTML)
      return doc

    }
    console.log(notecontroller.create_html())
    notecontroller.create_html();
    console.log(notecontroller.create_html())
    console.log(notecontroller.wrapNotesInHtml(view))


    // notecontroller.view.getHTML();

    // console.log(notecontroller.view.getHTML());

    // console.log(notecontroller.wrapNotesInHtml())

    assert.isTrue(notecontroller.wrapNotesInHtml(view) === "<ul><li><div>Favourite drink: seltzer</div></li></ul>")

    console.log("TestHTMLlist is passing")
  }

  // var note = new Note("jake")
  // var notelist = new NoteList(note)
  // notelist.addToList
  // var view = new NoteListView(notelist);
  //
  // console.log(note);
  // console.log(notelist);
  // console.log(notelist.addToList(note));
  // console.log(notelist.printList());
  // console.log(view.getHTML())

  TestHTMLlist();
