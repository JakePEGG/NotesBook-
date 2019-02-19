(function(exports) {
  function testnoteisanote() {
    var note = new note('go shopping');

    if (note.getCurrentNote !== 'go shopping') {
      throw new Error("Incorrect note");
    }
  }
  testnoteisanote();
})(this);
