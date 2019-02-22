function isANoteListView() {
  let constructor_name = "NoteListView"
  let noteListView = new NoteListView();
  assert.isTrue(noteListView.__proto__.constructor.name === constructor_name)
};
  isANoteListView();


function displayNoteLists() {
  let noteList = new NoteList();
  let noteListView = new NoteListView(noteList);
  let note = new Note("Favourite food: Chicken")
  let note2 = new Note("Favourite drink: H20")
  noteList.addToList(note)
  // console.log(noteList)
  noteList.addToList(note2)
  // console.log(noteList)
  // console.log(noteListView.getHTML())
  assert.isTrue(noteListView.getHTML() === ("<ul><li><div>" + "Favourite food: Chic" + "</div></li><li><div>" + "Favourite drink: H20" + "</div></li></ul>"))
};
displayNoteLists();
