// Googleのライブラリをインポート
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Vercelの環境変数からAPIキーを読み込んで初期化
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

export default async function handler(req, res) {
  // POSTリクエスト以外はエラー
  if (req.method !== 'POST') {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    // 使用するモデルを選択
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // 最新の高速モデル

    // フロントエンドから送られてきたメッセージを取得
    const { message } = req.body;

    // Gemini APIにメッセージを送信
    const result = await model.generateContent(message);
    const response = await result.response;
    const text = response.text();

    // 結果をフロントエンドに返す
    res.status(200).json({ text: text });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to communicate with Gemini API" });
  }
}
