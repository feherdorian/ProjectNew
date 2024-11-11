<template>
  <div class="container">
    <!-- Kosárlabdázók címe -->
    <h1 class="table-title led-text">Kosárlabdázók</h1>
    <div class="separator"></div> 

    <!-- Kereső mező -->
    <div class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Keresés név vagy poszt alapján"
        class="search-input"
      />
      <i class="search-icon fas fa-search"></i>
    </div>
    
    <!-- Ha nincs találat, megjelenítjük az üzenetet -->
    <div v-if="noResults" class="no-results-message">
      <p>Nem található ilyen játékos a rendszerünkben.</p>
    </div>

    <!-- Játékosok listája -->
    <div class="row mt-4">
      <Playercard
        v-for="jatekos in filteredPlayers"
        :key="jatekos.id"
        :jatekos="jatekos"
        @click="showDetails(jatekos)"
        class="player-card"
      />
    </div>
    
    <!-- Modal a játékos részletes adatainak megjelenítésére -->
    <div v-if="selectedPlayer" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <img :src="selectedPlayer.kep" alt="Kép" class="modal-image" />
        <h2 class="led-text">{{ selectedPlayer.nev }}</h2>
        <p class="led-text">{{ selectedPlayer.leiras }}</p>
        <ul class="led-text">
          <li v-for="dij in selectedPlayer.dijak" :key="dij">{{ dij }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Playercard from '@/components/Playercard.vue';

export default {
  components: {
    Playercard,
  },
  data() {
    return {
      searchQuery: '',
      jatekosok: [
        { id: 1, nev: 'Kobe Bryant', poszt: 'Shooting Guard', kep: '/kobe2.jpg', leiras: 'Kobe Bryant, az NBA egyik legnagyobb játékosa.', dijak: ['5x NBA Champion', '2x NBA Finals MVP'] },
        { id: 2, nev: 'LeBron James', poszt: 'Small Forward', kep: '/lebron2.jpg', leiras: 'LeBron James, kosárlabda legendája.', dijak: ['4x NBA MVP', '4x NBA Champion'] },
        { id: 3, nev: 'Michael Jordan', poszt: 'Shooting Guard', kep: '/michael2.jpg', leiras: 'Michael Jordan, a kosárlabda történetének egyik legnagyobb ikonja.', dijak: ['6x NBA Champion', '5x NBA MVP'] },
        { id: 4, nev: 'Stephen Curry', poszt: 'Point Guard', kep: '/stephen2.jpg', leiras: 'Stephen Curry, a modern kosárlabdázás forradalmasítója.', dijak: ['3x NBA Champion', '2x NBA MVP'] },
        { id: 5, nev: 'Jayson Tatum', poszt: 'Small Forward', kep: '/tatum.jpg', leiras: 'Jayson Tatum, a Boston Celtics kiemelkedő tehetsége.', dijak: ['1x NBA All-Star', 'NBA All-Rookie First Team'] },
        { id: 6, nev: 'Larry Bird', poszt: 'Small Forward / Power Forward', kep: '/larry.jpg', leiras: 'Larry Bird a Boston Celtics legendás játékosa.', dijak: ['3x NBA Champion', '3x NBA MVP'] },
        { id: 7, nev: 'Anthony Edwards', poszt: 'Shooting Guard', kep: '/edwards.jpg', leiras: 'Anthony Edwards, a Minnesota Timberwolves fiatal sztárja.', dijak: ['NBA All-Star 2023', 'NBA Rookie of the Year 2021'] },
        { id: 8, nev: 'Magic Johnson', poszt: 'Point Guard', kep: '/magic.jpg', leiras: 'Earvin "Magic" Johnson, a kosárlabda egyik legnagyobb alakja.', dijak: ['5x NBA Champion', '3x NBA MVP'] },
        { id: 9, nev: 'Molnár Krisztián', poszt: 'Burger King Konyha.', kep: '/kiki.jpg', leiras: 'Burger King dolgozó', dijak: ['LOL vb', 'Hónap dolgozója (Burger king)', 'MTA nagykövet'] },
      ],
      selectedPlayer: null,
      noResults: false,  // A keresési eredmények állapota
    };
  },
  computed: {
    filteredPlayers() {
      const players = this.jatekosok.filter((jatekos) => {
        const nameMatch = jatekos.nev.toLowerCase().includes(this.searchQuery.toLowerCase());
        const positionMatch = jatekos.poszt.toLowerCase().includes(this.searchQuery.toLowerCase());
        return nameMatch || positionMatch;
      });

      this.noResults = players.length === 0;
      return players;
    },
  },
  methods: {
    showDetails(jatekos) {
      this.selectedPlayer = jatekos;
    },
    closeModal() {
      this.selectedPlayer = null;
    },
  },
};
</script>

<style scoped>
/* Cím stílusa - Azonos a táblázat címével */
.table-title {
  font-size: 3em;  /* Nagyobb betűméret a kiemelt címhez */
  color: #a30311;  /* Élénk piros szín */
  text-align: center;
  text-shadow: 0 0 10px rgba(163, 3, 17, 1), 0 0 15px rgba(163, 3, 17, 0.8);  /* Fényes árnyék */
  font-family: 'Arial', sans-serif;  /* Betűtípus módosítása */
  font-weight: 900;  /* Kiemelkedő vastagság */
  margin-bottom: 20px;  /* Néhány pixeles margó a cím alá */
}

/* Kereső konténer beállítása */
.search-container {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
  position: relative;
}

/* A kereső input stílusa */
.search-input {
  padding: 12px 20px;
  border: 2px solid #a30311;
  border-radius: 50px;
  background-color: #333333;
  color: white;
  font-size: 16px;
  width: 300px;
  outline: none;
  transition: all 0.3s ease;
}

/* Kereső input fókuszálásakor */
.search-input:focus {
  border-color: #ff4d4d;
  background-color: #444;
  box-shadow: 0 0 10px rgba(163, 3, 17, 0.6);
}

/* Kereső ikon stílusa */
.search-icon {
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
  color: #a30311;
  transition: color 0.3s ease;
}

/* Kereső ikon hover */
.search-container:hover .search-icon {
  color: #ff4d4d;
}

/* Üzenet, ha nincs találat */
.no-results-message {
  text-align: center;
  font-size: 1.2em;
  color: #ff4d4d;
  margin-top: 20px;
}

/* A játékosok listájának megjelenítése */
.row {
  display: flex;
  /* flex-wrap: wrap; */
  /* justify-content: space-between; */
  margin-top: 20px;
}

.player-card {
  width: calc(33.33% - 20px);
  margin: 10px;
  box-sizing: border-box;
  transition: transform 0.3s ease;
}

.player-card:hover {
  transform: scale(1.05);
}

.player-card img {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .player-card {
    width: calc(50% - 20px);
  }
}

@media (max-width: 480px) {
  .player-card {
    width: 100%;
  }
}

/* Modal beállítások */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background: rgba(0, 0, 0, 0.8);
  z-index: 9999;
}

.modal-content {
  background-color: #121212;
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  position: relative;
  animation: fadeIn 0.3s ease-in-out;
}

.modal-image {
  width: 100%;
  border-radius: 5px;
}

.close {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5em;
  cursor: pointer;
  color: #ff4d4d;
}

.close:hover {
  color: #fff;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
.led-text {
  color: white;
  text-shadow: 0 0 8px rgba(211, 47, 47, 1), 0 0 18px rgba(211, 47, 47, 0.7);
}
</style>
