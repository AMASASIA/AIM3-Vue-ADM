import { createRouter, createWebHistory } from 'vue-router'

// 外部ファイルを読み込まず、ここに簡単なテスト用コンポーネントを直接書きます
const TestComponent = {
  template: '<h1>テスト成功：ルーターは正しく動作しています！</h1>'
}

const routes = [
  { path: '/', component: TestComponent },
  { path: '/video', component: TestComponent },
  { path: '/map', component: TestComponent }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
