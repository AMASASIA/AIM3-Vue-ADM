<template>
  <div class="p-4 border rounded-xl shadow bg-white w-full max-w-xl mx-auto">
    <h2 class="text-xl font-bold mb-2">AI Advocacy Chat</h2>
    <div v-for="msg in messages" :key="msg.id" class="mb-2">
      <strong>{{ msg.sender }}:</strong> {{ msg.text }}
    </div>
    <input
      v-model="newMessage"
      @keyup.enter="sendMessage"
      class="border p-2 w-full rounded"
      placeholder="Type your message..."
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getAIResponse } from './AiAdvocacyEngine'

const messages = ref([
  { id: 1, sender: 'User', text: 'What is DID?' },
  { id: 2, sender: 'AI', text: 'DID stands for Decentralized Identifier.' },
])

const newMessage = ref('')

function sendMessage() {
  if (!newMessage.value.trim()) return
  const userText = newMessage.value
  messages.value.push({ id: Date.now(), sender: 'User', text: userText })
  newMessage.value = ''
  getAIResponse(userText).then((response) => {
    messages.value.push({ id: Date.now() + 1, sender: 'AI', text: response })
  })
}
</script>
