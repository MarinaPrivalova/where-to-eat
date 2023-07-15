<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app {
  width: 100%;
  min-height: 100vh;
  font-family: "Inter", "Arial", "Helvetica", sans-serif;
  background: #141e30; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #141e30, #243b55);
  background: linear-gradient(to right, #141e30, #243b55);
  display: flex;
  align-items: center;
  justify-content: center;
  }
</style>
