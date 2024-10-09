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
  border-radius: 30px; 
  padding: 10px;
  margin: 20px;
  width: 250px; 
  height: 320px; 
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.player-card:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.player-image {
  width: 100%;
  max-height: 200px; 
  border-radius: 10%;
  transition: transform 0.3s;
}

.player-card:hover .player-image {
  transform: scale(1.1);
}

.player-name {
  font-weight: bold;
  color: white;
  margin-top: 10px; 
  text-shadow:
    0 0 5px rgba(163, 3, 17, 1),
    0 0 10px rgba(163, 3, 17, 0.7);
  margin: 0 auto; 
}

.player-position {
  font-weight: bold;
  color: white;
  margin-top: 10px; 
  text-shadow:
    0 0 5px rgba(163, 3, 17, 1),
    0 0 10px rgba(163, 3, 17, 0.7);
  margin: 0 auto; 
}
</style>
