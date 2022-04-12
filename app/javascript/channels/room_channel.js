import consumer from "channels/consumer"

  const room_element = document.getElementById('room-id');
  const room_id = room_element.getAttribute('data-room-id');

  console.log(consumer.subscriptions)

  consumer.subscriptions.create({ channel: "RoomChannel", room_id: room_id},
  {
    connected() {
      console.log("connected to " + room_id)
    },
  
    disconnected() {
      console.log("disconnected")
    },
  
    received(data) {
      console.log("Data Recived");
      const user_element = document.getElementById("user-id");    
      const user_id = user_element.getAttribute('data-user-id');
  
      let html;
  
      if (user_id === data.message.user_id) {
        html = data.mine
      } else {
        html = data.theirs
      }
      
      const messageContainer = document.getElementById('messages')
      messageContainer.innerHTML = messageContainer.innerHTML + html
      console.log(messageContainer.innerHTML, html)
    }
});