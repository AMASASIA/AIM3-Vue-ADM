<template>
  <div class="video-chat">
    <video ref="localVideo" autoplay muted playsinline></video>
    <video ref="remoteVideo" autoplay playsinline></video>
  </div>
</template>

<script>
export default {
  mounted() {
    this.startVideoChat()
  },
  methods: {
    async startVideoChat() {
      const localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      this.$refs.localVideo.srcObject = localStream

      const pc = new RTCPeerConnection()

      localStream.getTracks().forEach(track => {
        pc.addTrack(track, localStream)
      })

      pc.ontrack = event => {
        this.$refs.remoteVideo.srcObject = event.streams[0]
      }

      const offer = await pc.createOffer()
      await pc.setLocalDescription(offer)

      // 🚧 ここはデモのため、Signaling Serverがない構成
      // 実環境では WebSocket / Firebase / Waku などで交換

      // await signalingServer.send(offer)
    }
  }
}
</script>

<style scoped>
.video-chat {
  display: flex;
  gap: 1rem;
}
video {
  width: 45%;
  border: 2px solid #ccc;
}
</style>
