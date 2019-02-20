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
  noteList.addToList(note2)
  assert.isTrue(noteListView.getHTML() === '<ul><li><div>Favourite food: Chicken</div></li><li><div>Favourite drink: H20</div></li></ul>')
};
displayNoteLists();
