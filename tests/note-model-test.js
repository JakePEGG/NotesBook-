
  function returningCorrectNoteTest() {
    var note = new Note('go shopping');

    assert.isTrue(note.getNote() === 'go shopping');
    
};

returningCorrectNoteTest();
