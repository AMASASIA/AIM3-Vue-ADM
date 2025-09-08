<template>
  <div class="chat-messaging">
    <div class="messages">
      <div v-for="(msg, i) in messages" :key="i" class="message">
        <strong>{{ msg.sender }}:</strong> {{ msg.text }}
      </div>
    </div>
    <input v-model="newMessage" @keydown.enter="sendMessage" placeholder="Type your message..." />
  </div>
</template>

<script>
import AiAdvocacyEngine from './AiAdvocacyEngine'

export default {
  data() {
    return {
      newMessage: '',
      messages: []
    }
  },
  methods: {
    async sendMessage() {
      if (!this.newMessage.trim()) return
      const userMsg = { sender: 'You', text: this.newMessage }
      this.messages.push(userMsg)

      const aiReply = await AiAdvocacyEngine(this.newMessage)
      this.messages.push({ sender: 'AI', text: aiReply })

      this.newMessage = ''
    }
  }
}
</script>

<style scoped>
.chat-messaging {
  padding: 1rem;
}
.message {
  margin-bottom: 0.5rem;
}
</style>
