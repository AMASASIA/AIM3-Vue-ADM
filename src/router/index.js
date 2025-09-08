import { createRouter, createWebHistory } from 'vue-router'
import ChatMessaging from '../components/ChatMessaging.vue'
import VideoChat from '../components/VideoChat.vue'
import AiMap from '../components/AiMap.vue'

const routes = [
  { path: '/', component: ChatMessaging },
  { path: '/video', component: VideoChat },
  { path: '/map', component: AiMap },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
