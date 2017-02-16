(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    return {
        send: function(newMessage, roomId){
            console.log("Sending message from Message");
                messages.$add({
                    content: newMessage,
                    roomId: roomId,
                    sentAt: firebase.database.ServerValue.TIMESTAMP
                });
        },
        getByRoomId: function (roomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(roomId));
        }
    };
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();