import { createRouter, createWebHistory } from 'vue-router'

// 各ページ用のコンポーネントを正しくインポートします
import Home from '../views/Home.vue'
import ChatMessaging from '../components/ChatMessaging.vue'
import ChatRoom from '../components/ChatRoom.vue' // ChatRoomを追加
import VideoChat from '../components/VideoChat.vue'
import AiMap from '../components/AiMap.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/messaging', // ボタンの表示名に合わせる
    name: 'Messaging',
    component: ChatMessaging
  },
  {
    path: '/chatroom', // ChatRoomへのルートを追加
    name: 'ChatRoom',
    component: ChatRoom
  },
  {
    path: '/video',
    name: 'Video',
    component: VideoChat
  },
  {
    path: '/map',
    name: 'Map',
    component: AiMap
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
