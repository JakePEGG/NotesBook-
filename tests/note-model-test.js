
  // function testnoteisanote() {
    var note = new Note('go shopping');

    if (note.getCurrentNote() !== 'go shopping') {
      throw new Error("Incorrect note");
    }

  // testnoteisanote();
