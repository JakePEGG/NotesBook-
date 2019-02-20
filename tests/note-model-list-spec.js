function returnNoteText(){
  function NoteDouble(text){
    this.text = text;
  }
  var notedouble = new NoteDouble("Erin is helpful")
  var notelist = new NoteList()
  notelist.addToList(notedouble)
  assert.isTrue(notelist.printList()[0].text === "Erin is helpful")
};
  returnNoteText();
