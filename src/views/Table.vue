<template>
    <div class="row">
      <div class="col-md-12 side-a">
        <h1 class="table-title led-text">Kosárlabdázók Táblázata</h1>
        <div class="led-separator2"></div>
  
        <table class="content-table animacio" style="animation-delay: 1s">
          <thead>
            <tr>
              <th>Kép</th>
              <th class="led-text">Név</th>
              <th class="led-text">Poszt</th>
              <th class="led-text">Részletek</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(jatekos, i) in jatekosok" :key="i">
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
        <div class="led-separator"></div>
      </div>
  
      <div v-if="selectedPlayer" class="modal" @click="closeModal">
        <div class="modal-content" @click.stop>
          <span class="close" @click="closeModal">&times;</span>
          <img :src="selectedPlayer.kep" alt="Kép" class="modal-image" />
          <h2 class="led-text">{{ selectedPlayer.nev }}</h2>
          <p class="led-text">{{ selectedPlayer.leiras }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        jatekosok: [
  { 
    id: 1, 
    nev: "Kobe Bryant", 
    poszt: "Shooting Guard", 
    kep: "/kobe.jpg", 
    leiras: "Kobe Bryant, az NBA egyik legnagyobb játékosa, 5-szörös NBA-bajnok és 2-szeres olimpiai aranyérmes. A Los Angeles Lakers ikonikus játékosaként, Bryant híres volt a technikai tudásáról, versenyszelleméről és az elképesztő munkamoráljáról. Különleges stílusa és klutcha kiemelte őt a sportág történetéből." 
  },
  { 
    id: 2, 
    nev: "LeBron James", 
    poszt: "Small Forward", 
    kep: "/lebron.jpg", 
    leiras: "LeBron James, a kosárlabda legendája, 4-szeres NBA-bajnok és 4-szeres MVP. A Cleveland Cavaliers, a Miami Heat és a Los Angeles Lakers csapataiban játszott, és mindhárom helyen meghatározó szerepet játszott. James nemcsak a pályán, hanem a közösségi kezdeményezésekben is aktív, és az egyik legismertebb sportoló a világon." 
  },
  { 
    id: 3, 
    nev: "Michael Jordan", 
    poszt: "Shooting Guard", 
    kep: "/michael.jpg", 
    leiras: "Michael Jordan, a kosárlabda történetének legjobbja, 6-szoros NBA-bajnok és 14-szeres All-Star. Jordan a Chicago Bulls csapatával vált híressé, és a 90-es években dominálta az NBA-t. Az ő neve összefonódott a versenyszellemmel és a győzni akarással, ami még ma is inspirálja a fiatal játékosokat." 
  },
  { 
    id: 4, 
    nev: "Stephen Curry", 
    poszt: "Point Guard", 
    kep: "/stephen.jpg", 
    leiras: "Stephen Curry, a hárompontos király, 3-szoros NBA-bajnok és 2-szeres MVP. Curry megváltoztatta a kosárlabdázás stílusát azzal, hogy a távoli dobásokra helyezte a hangsúlyt. A Golden State Warriors csapatában játszik, ahol ő a vezető játékos, és folyamatosan új rekordokat állít fel." 
  },
  { 
    id: 5, 
    nev: "Kevin Durant", 
    poszt: "Small Forward", 
    kep: "/kevin.jpg", 
    leiras: "Kevin Durant, az NBA egyik legjobb pontszerzője, 2-szeres NBA-bajnok és 2-szeres MVP. Durant a hosszú lábai és kiváló dobástechnikai tudása révén képes megoldani a legnehezebb helyzeteket is. Játszott a Seattle SuperSonics, a Oklahoma City Thunder, a Golden State Warriors és a Brooklyn Nets csapataiban." 
  },
],
    selectedPlayer: null,
      };
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
    color:white; 
    text-shadow:
        0 0 5px rgba(163, 3, 17, 1),
        0 0 10px rgba(163, 3, 17, 0.7);
    margin: 0 auto; 
  }
  </style>
  