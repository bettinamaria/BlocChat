(function() {
  function Message($firebaseArray) {
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);
      
    return {
        send: function(newMessage, userName, roomId){
            console.log("Sending message from Message");
                messages.$add({
                    content: newMessage,
                    roomId: roomId,
                    sentAt: firebase.database.ServerValue.TIMESTAMP,
                    userName: userName
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