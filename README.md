# AIM3-ADM (v1.0) – All-in-One DAO & Messaging SuperApp
Includes AI Advocacy chat, video ID UI, and a AImap.

This repository contains the fully integrated AIM3-ADM super app, combining video chat, AI map visualization, Stripe payments, NFT/SBT minting, and DAO governance UI.

---

## ✅ Features

### 1. 🎥 Video Chat (LiveKit or WebRTC)
- Join and create rooms for video/audio chat
- LiveKit integration (preferred)
- Fallback to WebRTC if needed

### 2. 🧠 AiMap.vue – AI-Powered Visualization
- Visual thread/mindmap view of DAO discussions
- Tracks messages, proposals, and votes
- Syncs with AI Advocacy panel

### 3. 💳 Stripe Payments + NFT Minting
- Stripe Checkout integration for credit card payments
- Upon successful payment:
  - Mint NFT (ERC-721)
  - Issue Soul-Bound Token (ERC-5192)
  - Create ERC-6551 Token Bound Account
- Connected to AI Map for traceability

### 4. 🛠 Vercel & GitHub Integration
- Vite-based build system
- Preconfigured `vercel.json` for Vercel auto-deploy
- `.github/workflows/deploy.yml` for CI/CD (coming soon)

---

## 🧪 How to Run Locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

---

## 🚀 Vercel Deploy Instructions

**Framework Preset**: `Vite` or `Other`  
**Build Command**: `npm run build`  
**Output Directory**: `dist`

Make sure your `vercel.json` contains:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite"
}
```

---

## 📁 Structure

```
src/
  components/
    VideoChat.vue
    AiMap.vue
  App.vue
  main.js
public/
vercel.json
vite.config.js
README.md
```

---

## 📌 Notes

- ERC contracts are mocked for demo – can be replaced with live smart contracts.
- LiveKit credentials need to be configured in `.env.local`.
- AI Map uses mocked messages, can be extended to backend or P2P layer.

---

## 📬 Contact

For more info or contribution requests, contact: `info@amasasia`

Includes AI Advocacy chat, video ID UI, and a map.

## Setup
```bash
npm install
npm run dev
```

## Environment Variables
- `OPENAI_API_KEY`
- `GEMINI_API_KEY`
