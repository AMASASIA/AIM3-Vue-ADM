<template>
  <div class="ai-map">
    <h2>AI Map - User Clusters</h2>
    <div class="grid">
      <div v-for="(node, index) in clusters" :key="index" class="cluster">
        🧠 {{ node.label }}<br />
        👥 Users: {{ node.users }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clusters: [
        { label: 'Supporter', users: 12 },
        { label: 'Critic', users: 4 },
        { label: 'Analyst', users: 7 }
      ]
    }
  }
}
</script>

<style scoped>
.grid {
  display: flex;
  gap: 1rem;
}
.cluster {
  background: #eee;
  padding: 1rem;
  border-radius: 0.5rem;
}
</style>

</script>
