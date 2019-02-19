
  function returningCorrectNoteTest() {
    var note = new Note('go shopping');

    if (note.getCurrentNote() !== 'go shopping') {
      throw new Error("Incorrect note");
    }
};

returningCorrectNoteTest();
  // testnoteisanote();
