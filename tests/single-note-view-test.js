function testIndividualNoteinHTML() {
  var note = new Note("Favourite drink: seltzer")
  var singlenoteview = new SingleNoteView(note);
  assert.isTrue(singlenoteview.note_model() == "<div>Favourite drink: seltzer</div>")
}

testIndividualNoteinHTML()
