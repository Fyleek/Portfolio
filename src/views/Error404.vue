<!DOCTYPE html>
<template>
  <body>
    <div class="noise"></div>
    <div class="overlay"></div>
    <div class="terminal">
      <h1>Error <span class="errorcode">404</span></h1>
      <p class="output">La page que vous recherchez n'existe pas</p>
      <p class="output">Merci de <router-link to="/"><a>retourner à l'accueil</a></router-link>.</p>
      <p class="output">Bonne chance.</p>
    </div>
  </body>
</template>

<script>
export default {
  name: 'Error 404',
}
</script>

<style scoped>
@import 'https://fonts.googleapis.com/css?family=Inconsolata';

body {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  margin: 0px;
  box-sizing: border-box !important;
  height: 100% !important;
  background-color: #000000 !important;
  background-image: radial-gradient(#11581E, #041607), url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif") !important;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  font-family: 'Inconsolata', Helvetica, sans-serif !important;
  font-size: 1.5rem !important;
  color: rgba(128, 255, 128, 0.8) !important;
  text-shadow:
      0 0 1ex rgba(51, 255, 51, 1),
      0 0 2px rgba(255, 255, 255, 0.8) !important;
}

.noise {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url("https://media.giphy.com/media/oEI9uBYSzLpBK/giphy.gif");
  background-repeat: no-repeat;
  background-size: cover;
  z-index: -1;
  opacity: .02;
}

.overlay {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  background:
      repeating-linear-gradient(
          180deg,
          rgba(0, 0, 0, 0) 0,
          rgba(0, 0, 0, 0.3) 50%,
          rgba(0, 0, 0, 0) 100%);
  background-size: auto 4px;
  z-index: 1;
}

.overlay::before {
  content: "";
  pointer-events: none;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      0deg,
      transparent 0%,
      rgba(32, 128, 32, 0.2) 2%,
      rgba(32, 128, 32, 0.8) 3%,
      rgba(32, 128, 32, 0.2) 3%,
      transparent 100%);
  background-repeat: no-repeat;
  animation: scan 7.5s linear 0s infinite;
}

@keyframes scan {
  0%        { background-position: 0 -100vh; }
  35%, 100% { background-position: 0 100vh; }
}

.terminal {
  box-sizing: inherit;
  position: absolute;
  height: 100%;
  width: 1000px;
  max-width: 100%;
  padding: 4rem;
  text-transform: uppercase;
}

.output {
  color: rgba(128, 255, 128, 0.8);
  text-shadow:
      0 0 1px rgba(51, 255, 51, 0.4),
      0 0 2px rgba(255, 255, 255, 0.8);
}

.output::before {
  content: "> ";
}

a {
  color: #fff;
  text-decoration: none;
}

a::before {
  content: "[";
}

a::after {
  content: "]";
}

.errorcode {
  color: white;
}
</style>