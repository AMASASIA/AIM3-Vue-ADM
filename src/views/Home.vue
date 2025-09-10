<template>
  <div class="home-container">
    <header class="title-header">
      <h1>ODAO</h1>
      <h2>OSAKA PLACE MAKING DAO</h2>
    </header>

    <main class="functions-section">
      <h3>Functions</h3>
      <div class="button-grid">
        <router-link to="/messaging" class="function-button">Messaging</router-link>
        <router-link to="/chatroom" class="function-button">Chat/Rooms</router-link>
        <router-link to="/video" class="function-button">Video Chat</router-link>
        <router-link to="/map" class="function-button">AI Map</router-link>
      </div>
    </main>

    <footer class="oke-card-section">
      <a 
        href="https://copy-of-oke-alt-amp-0827-01-mint-voice-pay-208487405110.us-west1.runoke" 
        target="_blank" 
        rel="noopener noreferrer" 
        class="oke-button"
      >
        OKE CARD
      </a>
    </footer>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ffffff;
  color: #000000;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  padding: 2rem;
  box-sizing: border-box;
}

.title-header {
  text-align: center;
  margin-bottom: 3rem;
}

.title-header h1 {
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  letter-spacing: 0.1em;
}

.title-header h2 {
  font-size: 1.2rem;
  font-weight: normal;
  margin: 0;
  letter-spacing: 0.2em;
}

.functions-section {
  width: 100%;
  max-width: 400px;
  text-align: center;
}

.functions-section h3 {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.button-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.function-button {
  background-color: #f0f0f0;
  color: #000000;
  border: none;
  border-radius: 0.75rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.function-button:hover {
  background-color: #e0e0e0;
}

.oke-card-section {
  margin-top: 3rem;
}

.oke-button {
  background-color: #000000;
  color: #ffffff;
  border: none;
  border-radius: 9999px;
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  transition: opacity 0.2s;
}

.oke-button:hover {
  opacity: 0.8;
}
</style>
