// components/Chat.vue
<template>
  <div>
    <h2>Chat</h2>
    <div class="chat-container">
      <div v-for="message in messages" :key="message.id" class="message">
        <strong>{{ message.sender }}:</strong> {{ message.text }}
      </div>
    </div>
    <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type a message..." />
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
          sender: 'You', // You can customize the sender
          text: this.newMessage,
        });
        this.newMessage = '';
      }
    },
  },
};
</script>

<style scoped>
/* Add your chat styles here */
.chat-container {
  border: 1px solid #ccc;
  padding: 10px;
  max-height: 300px;
  overflow-y: scroll;
}

.message {
  margin: 5px 0;
}
</style>
