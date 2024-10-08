<template>
    <div class="player-card" @click="emitClick">
      <img :src="jatekos.kep" alt="Kép" class="player-image" />
      <h3 class="player-name">{{ jatekos.nev }}</h3>
      <p class="player-position">{{ jatekos.poszt }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      jatekos: Object,
    },
    methods: {
      emitClick() {
        this.$emit('click');
      },
    },
  };
  </script>
  
  <style scoped>
  .player-card {
    background-color: var(--bg-black-50);
    border-radius: 30px; /* Oval shape */
    padding: 10px;
    margin: 10px;
    width: 150px; /* Adjust width as needed */
    text-align: center;
    cursor: pointer;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .player-card:hover {
    transform: scale(1.05); /* Scale effect on hover */
  }
  
  .player-image {
    width: 100%;
    height: auto;
    border-radius: 30px; /* Match the card shape */
  }
  
  .player-name {
    font-weight: bold;
    color: #a30311;
  }
  
  .player-position {
    color: #555;
  }
  </style>
  