(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    
    console.log("Create New Room ");
    
  
    return {
      //array of all rooms
      all: rooms,
      //adds new room
      addRoom: function(roomName) {
          rooms.$add({name: roomName})
      }
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();

