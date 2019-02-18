

(function(exports) {
  function Note () {

  }

  Note.prototype.language = function () {
    return ('My favourite language is Javascript');
  };


  var note = new Note();
  console.log(note.language());
}(this));
