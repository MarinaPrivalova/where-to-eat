<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="main">
    <button-go  @click="$router.push(`/search`)"></button-go>
  </div>
</template>

<script></script>
<style scoped>
.main {
  max-width: 1280px;
  min-width: 320px;
  display: flex;
  justify-content: center;
}
</style>