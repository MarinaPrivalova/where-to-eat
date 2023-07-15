<template>
  <button class="btn"><slot></slot></button>
</template>

<script>
export default {
  name: "button-search",
};
</script>

<style scoped>
.btn {
  box-sizing: border-box;
  background-color: transparent;
  border: 2px solid #e94560;
  border-radius: 0.6em;
  color: #e94560;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: 1.2px;
  height: 60px;
  width: 175px;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  
}
.btn:hover {
  box-shadow: 0 0 10px 0 #0f3460 inset, 0 0 10px 4px #0f3460;
  color: #d6e0f0;
  outline: 0;
}
</style>
