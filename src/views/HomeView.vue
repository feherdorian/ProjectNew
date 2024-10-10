<template>
  <div class="home">
    <h2 class="led-text">{{ titleText }}</h2>
    <p class="led-text">{{ displayedText }}</p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      title: "Üdvözöljük a Kosárlabdázók világában!",
      fullText: "Itt megtalálhatod a legnagyobb kosárlabdázók adatait és statisztikáit.",
      titleText: "",
      displayedText: "",
      titleIndex: 0,
      textIndex: 0,
    };
  },
  mounted() {
    this.typeTitle();
  },
  methods: {
    typeTitle() {
      if (this.titleIndex < this.title.length) {
        this.titleText += this.title.charAt(this.titleIndex);
        this.titleIndex++;
        setTimeout(this.typeTitle, 55); 
      } else {
       
        this.typeText();
      }
    },
    typeText() {
      if (this.textIndex < this.fullText.length) {
        this.displayedText += this.fullText.charAt(this.textIndex);
        this.textIndex++;
        setTimeout(this.typeText, 55); 
      }
    },
  },
};
</script>

<style scoped>
.home {
  text-align: center;
}

.led-text {
  color: white; 
  text-shadow: 
    0 0 5px rgba(163, 3, 17, 1), 
    0 0 10px rgba(163, 3, 17, 0.7); 
  margin: 10px 0; 
  animation: glow 1.5s infinite alternate;
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
