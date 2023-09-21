<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="message in messages" :key="message.id" class="message">
        <p :class="{ 'my-message': message.isMine }">{{ message.text }}</p>
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
      <button @click="sendMessage">Send</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({
          id: Date.now(),
          text: this.newMessage,
          isMine: true, // Indicate if the message is from the user
        });
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
/* Chat container styles */
.chat-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

/* Chat message styles */
.chat-messages {
  flex-grow: 1;
  overflow-y: auto;
  padding: 10px;
}

.message {
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end; /* Adjust if you want messages on the left side */
}

.message p {
  background-color: #3498db;
  color: white;
  padding: 8px 12px;
  border-radius: 10px;
  max-width: 70%; /* Adjust as needed */
  word-wrap: break-word;
}

/* User input styles */
.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
}

.chat-input input {
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.chat-input button {
  background-color: #3498db;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.chat-input button:hover {
  background-color: #2980b9;
}

/* Optional: Style user's messages differently */
.my-message p {
  background-color: #2ecc71;
}
</style>
