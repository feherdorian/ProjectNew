<template>
  <div class="container">
    <div class="col-md-12 side-a">
      <!-- Cím a táblázathoz -->
      <h1 class="table-title led-text">Kosárlabdázók Táblázata</h1>
      <div class="separator"></div>

      <!-- Táblázat, ha látható -->
      <transition name="fade">
        <table v-if="isTableVisible" class="content-table">
          <thead>
            <tr>
              <th>Kép</th>
              <th class="led-text">Név</th>
              <th class="led-text">Poszt</th>
              <th class="led-text">Részletek</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(jatekos, i) in jatekosok" :key="i" class="table-row" @mouseover="hoverRow(i)" @mouseleave="leaveRow">
              <td class="table-cell">
                <img :src="jatekos.kep" alt="Kép" class="player-image" />
              </td>
              <td class="table-cell led-text">{{ jatekos.nev }}</td>
              <td class="table-cell led-text">{{ jatekos.poszt }}</td>
              <td class="table-cell">
                <button @click="showDetails(jatekos)" class="details-btn">Részletek</button>
              </td>
            </tr>
          </tbody>
        </table>
      </transition>

      <div class="led-separator"></div>
    </div>

    <!-- Modal a játékos részletes adatainak megjelenítésére -->
    <transition name="fade">
      <div v-if="selectedPlayer" class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <span class="close" @click="closeModal">&times;</span>
          <img :src="selectedPlayer.kep" alt="Kép" class="modal-image" />
          <h2 class="led-text">{{ selectedPlayer.nev }}</h2>
          <p class="led-text">{{ selectedPlayer.leiras }}</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jatekosok: [
        { id: 1, nev: "Kobe Bryant", poszt: "Shooting Guard", kep: "/kobe.jpg", leiras: "Kobe Bryant, az NBA egyik legnagyobb játékosa." },
        { id: 2, nev: "LeBron James", poszt: "Small Forward", kep: "/lebron.jpg", leiras: "LeBron James, a kosárlabda legendája." },
        { id: 3, nev: "Michael Jordan", poszt: "Shooting Guard", kep: "/michael.jpg", leiras: "Michael Jordan, a kosárlabda történetének legjobbja." },
        { id: 4, nev: "Stephen Curry", poszt: "Point Guard", kep: "/stephen.jpg", leiras: "Stephen Curry, a hárompontos király." },
        { id: 5, nev: "Kevin Durant", poszt: "Small Forward", kep: "/kevin.jpg", leiras: "Kevin Durant, az NBA egyik legjobb pontszerzője." },
      ],
      selectedPlayer: null,
      isTableVisible: true,
      hoveredRow: null,
    };
  },
  methods: {
    showDetails(jatekos) {
      this.selectedPlayer = jatekos;
    },
    closeModal() {
      this.selectedPlayer = null;
    },
    hoverRow(index) {
      this.hoveredRow = index;
    },
    leaveRow() {
      this.hoveredRow = null;
    },
  },
};
</script>

<style scoped>
/* Cím a táblázathoz - Használjuk ugyanazt a formázást, mint a kártyákon */
.table-title {
  font-size: 3em;  /* Nagyobb betűméret a kiemelt címhez */
  color: #a30311;  /* Élénk piros szín */
  text-align: center;
  text-shadow: 0 0 10px rgba(163, 3, 17, 1), 0 0 15px rgba(163, 3, 17, 0.8);  /* Fényes árnyék */
  font-family: 'Arial', sans-serif;  /* Betűtípus módosítása */
  font-weight: 900;  /* Kiemelkedő vastagság */
  margin-bottom: 20px;  /* Néhány pixeles margó a cím alá */
}

/* Táblázat stílusa */
.content-table {
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1.2em;
  min-width: 100%;
  border: 1px solid #d32f2f;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  animation: fadeIn 0.5s ease-in-out;
}

/* Fejléc szín és háttér */
.content-table thead tr {
  background-color: #d32f2f; 
  color: #fff;
}

/* Cellák stílusa */
.content-table th,
.content-table td {
  padding: 15px 20px;
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Táblázat sorok */
.table-cell {
  font-weight: 600;
  text-align: center;
  background-color: #121212;
  transition: background-color 0.3s, transform 0.2s;
}

.table-row:hover .table-cell {
  background-color: rgba(211, 47, 47, 0.2);
  transform: scale(1.02);
}

/* Kép stílusa a táblázatban */
.player-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s;
}

.player-image:hover {
  transform: scale(1.1);
}

/* Részletek gomb */
.details-btn {
  background-color: #d32f2f;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.details-btn:hover {
  background-color: rgba(211, 47, 47, 0.8);
  transform: scale(1.05);
}

/* Modal ablak stílusa */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.75);
  color: #fff;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-content {
  background-color: #2c2c2c;
  padding: 25px;
  border-radius: 12px;
  max-width: 600px;
  width: 80%;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  position: relative;
}

.modal-image {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.8em;
  cursor: pointer;
  color: #fff;
}

/* Szöveg stílusa, mint a kártyákban */
.led-text {
  color: white;
  text-shadow: 0 0 8px rgba(211, 47, 47, 1), 0 0 18px rgba(211, 47, 47, 0.7);
}

/* Átmenet hatások (fade) */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

/* Elválasztó vonal (separator) */
.separator {
  height: 4px;
  background-color: #d32f2f;
  width: 70%;
  margin: 15px auto;
  animation: blink 1.5s infinite;
}

/* Blinking animáció */
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}
</style>
