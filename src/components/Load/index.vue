<template>
  <div class="loader_container">
    <div class="loader"></div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.loader_container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: white;
  z-index: 99999;
  top: 0;
}
.loader,
.loader:before,
.loader:after {
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation-fill-mode: both;
  animation: loadAnimation 1.8s infinite ease-in-out;
}

.loader {
  color: #406eeb;
  font-size: 10px;
  margin: 80px auto;
  position: relative;
  text-indent: -9999em;
  transform: translateZ(0);
  animation-delay: -0.16s;
  top: 30%;
  transform: translate(-50%, 0);
}

.loader:before,
.loader:after {
  content: '';
  position: absolute;
  top: 0;
}

.loader:before {
  left: -3.5em;
  animation-delay: -0.32s;
}

.loader:after {
  left: 3.5em;
}

@keyframes loadAnimation {
  0%,
  80%,
  100% {
    box-shadow: 0 2.5em 0 -1.3em;
  }
  40% {
    box-shadow: 0 2.5em 0 0;
  }
}
</style>
