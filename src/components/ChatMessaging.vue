<script setup>
import { ref } from 'vue'

// メッセージ全体を管理するリアクティブな配列
const messages = ref([
  { user: 'AI', text: 'こんにちは！何かお手伝いできることはありますか？' }
])

// ユーザーが入力中のメッセージを管理
const newMessage = ref('')

// AIが応答中かどうかを管理（ローディング表示などに使えます）
const isLoading = ref(false)

// メッセージを送信する関数
const sendMessage = async () => {
  // 入力されたメッセージを取得し、前後の空白を削除
  const userMessage = newMessage.value.trim()
  // メッセージが空の場合は何もしない
  if (!userMessage) return;

  // ユーザーのメッセージを画面のリストに追加
  messages.value.push({ user: 'you', text: userMessage })
  // 入力欄を空にする
  newMessage.value = ''
  // AIの応答待ち状態にする
  isLoading.value = true

  try {
    // Vercel上に作成したサーバーレス関数を呼び出す
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // ユーザーのメッセージをサーバーに送信
      body: JSON.stringify({ message: userMessage }),
    });

    // ネットワークエラーなどをチェック
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    // サーバーからの返信を受け取る
    const data = await response.json();
    
    // AIからの返信を画面のリストに追加
    messages.value.push({ user: 'AI', text: data.text });

  } catch (error) {
    // エラーが発生した場合の処理
    console.error("Error fetching AI response:", error);
    messages.value.push({ user: 'AI', text: '申し訳ありません、エラーが発生しました。' });
  } finally {
    // AIの応答待ち状態を解除
    isLoading.value = false;
  }
}
</script>
