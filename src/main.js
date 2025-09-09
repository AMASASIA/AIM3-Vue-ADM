import { createApp } from 'vue';

// ----- ▼ ここからテスト用コード ▼ -----

// 1. ルーターやApp.vueを使わず、ここで簡単なテスト部品（コンポーネント）を作成します。
const TestComponent = {
  template: `
    <div style="padding: 2rem; background-color: lightblue; color: black; font-size: 24px; text-align: center;">
      <h1>テスト表示成功！</h1>
      <p>もしこのメッセージが見えていれば、Vueの基本的な動作は正常です。</p>
    </div>
  `
};

// 2. App.vueの代わりに、この簡単なテスト部品を表示させます。
createApp(TestComponent).mount('#app');

// ----- ▲ ここまでテスト用コード ▲ -----


/*
  元のコードは、テストが終わったら戻せるように、以下にコメントとして残しておきます。

  import App from './App.vue';
  import router from './router';
  createApp(App).use(router).mount('#app');
*/
