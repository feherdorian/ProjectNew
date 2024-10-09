<template>
  <div class="row">
    <div class="col-md-12 side-a">
      <h1 class="table-title led-text">Kosárlabdázók Táblázata</h1>
      <div class="led-separator2"></div>

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
.table-title {
  font-size: 2em;
  color: #a30311; 
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 
    0 0 5px rgba(163, 3, 17, 1), 
    0 0 10px rgba(163, 3, 17, 0.7); 
}

.content-table {
  border-collapse: collapse;
  margin: 15px 0;
  font-size: 1em;
  min-width: 100%;
  border: 1px solid #a30311; 
  border-radius: 10px;
  overflow: hidden;
  animation: fadeIn 0.5s ease-in;
}

.content-table thead tr {
  background-color: #a30311; 
  color: #ffffff;
}

.content-table th,
.content-table td {
  padding: 12px 15px;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.table-cell {
  font-weight: 500;
  text-align: center;
  background-color: var(--bg-black-50);
  transition: background-color 0.3s;
}

.table-row:hover .table-cell {
  background-color: rgba(163, 3, 17, 0.2);
}

.player-image {
  width: 80px;
  height: 80px; 
  border-radius: 50%; 
  object-fit: cover; 
}

.details-btn {
  background-color: #a30311; 
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 5px;
  cursor: pointer;
}

.details-btn:hover {
  background-color: rgba(163, 3, 17, 0.8);
}

.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 999;
  animation: fadeIn 0.5s ease-in;
}

.modal-content {
  background-color: var(--bg-black-50);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}

.modal-image {
  width: 120px; 
  height: 120px; 
  border-radius: 50%; 
  object-fit: cover; 
}

.close {
  float: right;
  font-size: 20px;
  cursor: pointer;
  color: white;
}

.led-text {
  color: white; 
  text-shadow:
    0 0 5px rgba(163, 3, 17, 1),
    0 0 10px rgba(163, 3, 17, 0.7);
  margin: 0 auto; 
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}


@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
