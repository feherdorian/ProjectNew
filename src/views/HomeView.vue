<template>
  <div class="home">
    <h2 class="led-text">Üdvözöljük a Kosárlabdázók világában!</h2>
    <p class="led-text">Itt megtalálhatod a legnagyobb kosárlabdázók adatait és statisztikáit.</p>
  </div>
</template>

<script>
export default {
  name: "Home"
};
</script>

<style scoped>
.home {
  text-align: center;
}

.led-text {
  color: rgba(255, 0, 0, 0.548); 
  text-shadow: 
    0 0 5px rgba(163, 3, 17, 1), 
    0 0 10px rgba(163, 3, 17, 0.7); 
  margin: 10px 0; 
}

@keyframes glow {
  0% {
    text-shadow: 
      0 0 5px rgba(163, 3, 17, 1), 
      0 0 10px rgba(163, 3, 17, 0.7);
  }
  100% {
    text-shadow: 
      0 0 20px rgba(163, 3, 17, 1), 
      0 0 30px rgba(163, 3, 17, 0.7);
  }
}
</style>
