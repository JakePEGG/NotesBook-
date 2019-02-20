function isANoteListView(note) {
  let constructor_name = "NoteListView"
  let noteListView = new NoteListView();
  assert.isTrue(noteListView.__proto__.constructor.name === constructor_name)
};
  isANoteListView();
//
// function
//
// <ul><li><div>Favourite food: pesto</div></li>
// <li><div>Favourite drink: seltzer</div></li></ul>
