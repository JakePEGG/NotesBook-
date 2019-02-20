'use strict';

(function(exports) {
  function NoteList() {
    this.list = [];
  };

  NoteList.prototype.addToList = function(note) {
    return this.list.push(note);
  }

  NoteList.prototype.printList = function(){
    return this.list;
  }

  exports.NoteList = NoteList;

})(this);
