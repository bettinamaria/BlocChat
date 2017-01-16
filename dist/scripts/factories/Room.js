(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    var rooms = $firebaseArray(ref);
    rooms.orderByChild().endAt('room3');
    console.log(rooms);
       
    rooms.$add({ room5: "room5" }).then(function(ref) {
    var id = ref.key;
    console.log("new chat room added: " + id);
    rooms.$indexFor(id); // returns location in the array
    });
      
    return {
      all: rooms  
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();