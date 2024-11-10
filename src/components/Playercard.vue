<template>
  <div class="player-card" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="card-inner" :class="{ flipped: hover }">
      <div class="card-front">
        <img :src="jatekos.kep" alt="Kép" class="player-image" />
        <h3 class="player-name text-nowrap">{{ jatekos.nev }}</h3>
        <p class="player-position">{{ jatekos.poszt }}</p>
      </div>
      <div class="card-back">
        <h3 class="awards-title">Díjak</h3>
        <ul class="awards-list">
          <li v-for="dij in jatekos.dijak" :key="dij">{{ dij }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    jatekos: Object,
  },
  data() {
    return {
      hover: false, 
    };
  },
};
</script>

<style scoped>
.player-card {
  perspective: 1000px; 
  width: 250px;
  height: 320px;
  margin: 20px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
}

.card-inner.flipped {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  padding: 10px;
  background-color:#121212;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.card-front {
  z-index: 2;
}

.card-back {
  transform: rotateY(180deg);
  background-color: var(--bg-black-50);
}

.awards-title {
  color: white;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(163, 3, 17, 1), 0 0 10px rgba(163, 3, 17, 0.7);
}

.awards-list {
  list-style: none;
  padding: 0;
  color: white;
  text-align: center;
}

.awards-list li {
  margin: 5px 0;
  font-weight: bold;
  text-shadow: 0 0 5px rgba(163, 3, 17, 1), 0 0 10px rgba(163, 3, 17, 0.7);
}

.player-image {
  width: 100%;
  max-height: 200px;
  border-radius: 10%;
  object-fit: cover; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
  transition: transform 0.3s;
}

.player-name,
.player-position {
  color: white;
  text-shadow: 0 0 5px rgba(163, 3, 17, 1), 0 0 10px rgba(163, 3, 17, 0.7);
  margin: 10px auto;
}
</style>
