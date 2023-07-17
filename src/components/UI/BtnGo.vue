<template>
  <button class="btn">
    <span class="btn__text">Хочу есть</span>
  </button>
</template>

<script>
export default {
  name: "button-go"
};
</script>

<style scoped>
.btn {
  position: relative;
  outline: none;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  opacity: 1;
  background-color: #e94560;
  border: 1px solid #0f3460;
}

.btn__text {
  padding: 1.8em 4em;
  color: #0f3460;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 1.2px;
}
.btn__text:hover {
  animation: storm 0.7s ease-in-out both; 
  animation-delay: 0.06s;
}
.btn:hover {
  animation: rotate 0.7s ease-in-out both;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}
</style>
