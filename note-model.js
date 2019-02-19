(function (exports) {
  function Note (text) {
    this.text = text;
  };

  Note.prototype.getCurrentNote = function () {
    return this.text;
  };

  var note = new Note('go shopping');
  return note.getCurrentNote();

  exports.Note = Note;
})(this);
