<template>
    <v-app>
      <v-container fluid fill-height class="d-flex justify-center align-center">
        <p class="title">Página em Construção...</p>
        <div id="loader">
          <div id="box"></div>
          <div id="hill"></div>
        </div>
      </v-container>
    </v-app>
  </template>
  
  <script>
  export default {
    name: "LoaderComponent",
  };
  </script>
  
  <style scoped>
  .title {
    font-size: 30pt;
    font-weight: 700;
    margin-top: 330px;
    position: relative; /* Importante para animações CSS */
    animation: textAnimation 2s infinite alternate; /* Aplicando a animação no texto */
  }
  
  @keyframes textAnimation {
    0% {
      transform: scale(1);
      color: white;
    }
    100% {
      transform: scale(1.1);
      color: lightgray;
      opacity: 70%;
    }
  }
  
  html,
  body,
  .v-application {
    height: 100%;
    margin: 0;
    background-color: black;
    overflow: hidden; /* Desativa a rolagem vertical */
  }
  
  #loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 5.4em;
    height: 5.4em;
    background-color: black;
    z-index: 1000;
  }
  
  #hill {
    position: absolute;
    width: 7.1em;
    height: 7.1em;
    top: 1.7em;
    left: 1.7em;
    background-color: transparent;
    border-left: 0.25em solid whitesmoke;
    transform: rotate(45deg);
  }
  
  #hill:after {
    content: "";
    position: absolute;
    width: 7.1em;
    height: 7.1em;
    left: 0;
    background-color: black;
  }
  
  #box {
    position: absolute;
    left: 0;
    bottom: -0.1em;
    width: 1em;
    height: 1em;
    background-color: transparent;
    border: 0.25em solid whitesmoke;
    border-radius: 15%;
    transform: translate(0, -1em) rotate(-45deg);
    animation: push 2.5s cubic-bezier(0.79, 0, 0.47, 0.97) infinite;
  }
  
  @keyframes push {
    0% {
      transform: translate(0, -1em) rotate(-45deg);
    }
    5% {
      transform: translate(0, -1em) rotate(-50deg);
    }
    20% {
      transform: translate(1em, -2em) rotate(47deg);
    }
    25% {
      transform: translate(1em, -2em) rotate(45deg);
    }
    30% {
      transform: translate(1em, -2em) rotate(40deg);
    }
    45% {
      transform: translate(2em, -3em) rotate(137deg);
    }
    50% {
      transform: translate(2em, -3em) rotate(135deg);
    }
    55% {
      transform: translate(2em, -3em) rotate(130deg);
    }
    70% {
      transform: translate(3em, -4em) rotate(217deg);
    }
    75% {
      transform: translate(3em, -4em) rotate(220deg);
    }
    100% {
      transform: translate(0, -1em) rotate(-225deg);
    }
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: 20pt;
      font-weight: 700;
      margin-top: 300px;
      position: relative; /* Importante para animações CSS */
      animation: textAnimation 2s infinite alternate; /* Aplicando a animação no texto */
    }
  }
  </style>
  