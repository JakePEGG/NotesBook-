function isANoteListView() {
  let constructor_name = "NoteListView"
  let noteListView = new NoteListView();
  assert.isTrue(noteListView.__proto__.constructor.name === constructor_name)
};
  isANoteListView();


function displayNoteLists() {
  let noteList = new NoteList();
  let noteListView = new NoteListView(notelist);
  assert.isTrue(noteListView.getHTML() === '<ul><li><div>Favourite food: Chicken</div></li><li><div>Favourite drink: H20</div></li></ul>')
};
displayNoteLists();
