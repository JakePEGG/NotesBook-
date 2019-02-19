(function (exports) {
  function Note (text) {
    this.text = text;
  };

  Note.prototype.getCurrentNote = function () {
    return this.text;
  };


  exports.Note = Note;
})(this);
