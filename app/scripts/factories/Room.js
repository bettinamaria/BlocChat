(function() {
  function Room($firebaseArray) {
    var ref = firebase.database().ref().child("rooms");
    ref.orderByChild().endAt('room3');
    console.log(ref);
    var rooms = $firebaseArray(ref);
    console.log(ref);
      
      
    return {
      all: rooms  
    };
  }

  angular
    .module('blocChat')
    .factory('Room', ['$firebaseArray', Room]);
})();