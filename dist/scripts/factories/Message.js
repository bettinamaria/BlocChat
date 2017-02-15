(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    return {
        send: function(newMessage, roomId){
                messages.$add({
                    Bettina: newMessage,
                    roomId: roomID,
                    sentAt: timestamp
                });
        }
        getByRoomId: function (roomId) {
        messages.orderByChild('roomId').isEqual(ref);
        }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
