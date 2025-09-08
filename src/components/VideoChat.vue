<template>
  <div class="p-4 border rounded-xl shadow bg-white w-full max-w-2xl mx-auto">
    <h2 class="text-xl font-bold mb-4">🎥 WebRTC Video Chat</h2>

    <div class="grid grid-cols-2 gap-4 mb-4">
      <video ref="localVideo" autoplay muted playsinline class="rounded bg-gray-200" />
      <video ref="remoteVideo" autoplay playsinline class="rounded bg-gray-200" />
    </div>

    <div class="mb-4">
      <input
        v-model="remoteOffer"
        class="border p-2 w-full rounded"
        placeholder="Paste remote offer here"
      />
    </div>

    <div class="flex gap-4">
      <button @click="startCall" class="bg-blue-500 text-white px-4 py-2 rounded">Start Call</button>
      <button @click="answerCall" class="bg-green-500 text-white px-4 py-2 rounded">Answer Call</button>
    </div>

    <div class="mt-4">
      <label class="block font-bold">Generated Offer / Answer:</label>
      <textarea class="w-full border p-2 mt-1 rounded text-xs" readonly>{{ localSDP }}</textarea>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const localVideo = ref(null)
const remoteVideo = ref(null)
const remoteOffer = ref('')
const localSDP = ref('')
let localStream = null
let peerConnection = null

const config = {
  iceServers: [
    { urls: 'stun:stun.l.google.com:19302' },
  ],
}

onMounted(async () => {
  localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  localVideo.value.srcObject = localStream
})

async function startCall() {
  peerConnection = new RTCPeerConnection(config)
  addPeerEvents()

  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream)
  })

  const offer = await peerConnection.createOffer()
  await peerConnection.setLocalDescription(offer)
  localSDP.value = JSON.stringify(peerConnection.localDescription)
}

async function answerCall() {
  peerConnection = new RTCPeerConnection(config)
  addPeerEvents()

  localStream.getTracks().forEach(track => {
    peerConnection.addTrack(track, localStream)
  })

  const offer = JSON.parse(remoteOffer.value)
  await peerConnection.setRemoteDescription(offer)

  const answer = await peerConnection.createAnswer()
  await peerConnection.setLocalDescription(answer)
  localSDP.value = JSON.stringify(peerConnection.localDescription)
}

function addPeerEvents() {
  peerConnection.ontrack = (event) => {
    remoteVideo.value.srcObject = event.streams[0]
  }

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      // ICE candidate handling (could be used for future signaling server)
      console.log('ICE candidate:', event.candidate)
    }
  }
}
</script>
