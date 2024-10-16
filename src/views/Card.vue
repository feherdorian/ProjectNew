<template>
  <div class="container">
    <h1 class="table-title led-text">Kosárlabdázók</h1>
    <div class="separator"></div> 
    <div class="search-container">
      <input
        type="text"
        v-model="searchQuery"
        placeholder="Keresés név vagy poszt alapján"
        class="search-input"
      />
    </div>
    <div class="row">
      <Playercard
        v-for="jatekos in filteredPlayers"
        :key="jatekos.id"
        :jatekos="jatekos"
        @click="showDetails(jatekos)"
      />
    </div>

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
        {
          id: 1,
          nev: 'Kobe Bryant',
          poszt: 'Shooting Guard',
          kep: '/kobe2.jpg',
          leiras: 'Kobe Bryant, az NBA egyik legnagyobb játékosa. Összesen 20 évet töltött a Los Angeles Lakers csapatában, ahol 5 NBA bajnoki címet nyert. Kobe a "Black Mamba" becenéven vált ismertté, és legendás munkamoráljáról, valamint versenyszelleméről híres. Karrierje során 18 alkalommal választották All-Star játékossá, és 2008-ban elnyerte az NBA legértékesebb játékosának (MVP) címét.',
          dijak: ['5x NBA Champion', '2x NBA Finals MVP', '18x NBA All-Star', 'NBA MVP 2008'],
        },
        {
          id: 2,
          nev: 'LeBron James',
          poszt: 'Small Forward',
          kep: '/lebron2.jpg',
          leiras: 'LeBron James, a kosárlabda legendája, aki három NBA bajnoki címet nyert három különböző csapattal (Miami Heat, Cleveland Cavaliers, Los Angeles Lakers). A "King James" becenéven ismert LeBron számos rekordot tart, és az NBA történetének egyik legjobb játékosának tartják. Karrierje során 17 alkalommal választották All-Star játékossá, és 4 alkalommal elnyerte az MVP címet.',
          dijak: ['4x NBA MVP', '4x NBA Champion', 'NBA Rookie of the Year 2004', '2x Olympic Gold Medalist'],
        },
        {
          id: 3,
          nev: 'Michael Jordan',
          poszt: 'Shooting Guard',
          kep: '/michael2.jpg',
          leiras: 'Michael Jordan, az NBA történetének egyik legnagyobb ikonja. 6 NBA bajnoki címet nyert a Chicago Bulls csapatával, és 14 alkalommal választották All-Star játékossá. Jordan híres volt a versenyszelleméről, és a "His Airness" becenéven vált ismertté, amely a légies ugrásaira utal. Karrierje során 5 alkalommal nyerte el az MVP címet, és a kosárlabda kultúrára gyakorolt hatása máig érezhető.',
          dijak: ['6x NBA Champion', '5x NBA MVP', '14x NBA All-Star', '2x Olympic Gold Medalist'],
        },
        {
          id: 4,
          nev: 'Stephen Curry',
          poszt: 'Point Guard',
          kep: '/stephen2.jpg',
          leiras: 'Stephen Curry, a Golden State Warriors sztárja és a modern kosárlabdázás forradalmasítója. Curry híres a hárompontos lövéseiről, és ő az első játékos, aki egy idényben 400 hárompontos kosarat dobott. 3 NBA bajnoki címet nyert, és kétszer választották az NBA legértékesebb játékosának (MVP). Számtalan rekordot állított fel a hárompontos lövések terén, és általánosan elismert a sportág történetének legjobb dobójaként.',
          dijak: ['3x NBA Champion', '2x NBA MVP', 'NBA 3-Point Leader'],
        },
        {
          id: 5,
          nev: 'Jayson Tatum',
          poszt: 'Small Forward',
          kep: '/tatum.jpg',
          leiras: 'Jayson Tatum, a Boston Celtics kiemelkedő tehetsége, aki az NBA egyik legígéretesebb fiatal játékosa. Tatum több alkalommal is All-Star választott, és a 2022-es NBA-döntőben szereplő Celtics egyik kulcsjátékosa volt. A kiváló dobáskészsége és sokoldalúsága miatt a liga egyik legkeresettebb játékosának számít. A 2021-es olimpiai játékokon aranyérmet nyert az Egyesült Államok csapatával..',
          dijak: ['1x NBA All-Star', 'NBA All-Rookie First Team', '2021 FIBA AmeriCup Champion', '2022 NBA Finals Runner-Up'],
        },
        {
          id: 6,
          nev: 'Larry Bird',
          poszt: 'Small Forward / Power Forward',
          kep: '/larry.jpg',
          leiras: 'Larry Bird a Boston Celtics legendás játékosa, aki az 1980-as években dominálta az NBA-t. Háromszoros NBA-bajnok és háromszoros MVP, Bird híres volt a kiváló kosárlabda-intelligenciájáról, pontos lövéseiről és kreatív játékáról. Később sikeres edző és csapatvezető lett.',
          dijak: ['3x NBA Champion', '3x NBA MVP', '12x NBA All-Star'],
        },
        {
          id: 7,
          nev: 'Anthony Edwards',
          poszt: 'Shooting Guard',
          kep: '/edwards.jpg',
          leiras: 'Anthony Edwards, a Minnesota Timberwolves fiatal sztárja, aki gyors fejlődésével a liga egyik legígéretesebb játékosává vált. 2020-ban választották ki az NBA Draft első helyén, és azóta kiemelkedő teljesítménye révén sokak figyelmét felkeltette. Edwards dinamikus játéka és pontos dobásai révén a csapat kulcsszereplőjévé vált.',
          dijak: ['NBA All-Star 2023', 'NBA Rookie of the Year 2021'],
        },
        {
          id: 8,
          nev: 'Magic Johnson',
          poszt: 'Point Guard',
          kep: '/magic.jpg',
          leiras: 'Earvin "Magic" Johnson a kosárlabda egyik legnagyobb alakja, aki az 1980-as években és a 90-es évek elején játszott. A Los Angeles Lakers csapatában vált híressé, ahol 1979 és 1991, valamint 1996 között szerepelt. Johnson öt NBA-bajnoki címet nyert és háromszor választották az NBA MVP-jének.',
          dijak: ['5x NBA Champion', '3x NBA MVP', '12x NBA All-Star'],
        },
      ],
      selectedPlayer: null,
    };
  },
  computed: {
    filteredPlayers() {
      return this.jatekosok.filter((jatekos) => {
        const nameMatch = jatekos.nev.toLowerCase().includes(this.searchQuery.toLowerCase());
        const positionMatch = jatekos.poszt.toLowerCase().includes(this.searchQuery.toLowerCase());
        return nameMatch || positionMatch;
      });
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
.container {
  padding: 20px;
}

.search-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
}

.search-input {
  padding: 5px;
  border: 1px solid #a30311;
  border-radius: 5px;
  width: 250px;
}

.table-title {
  font-size: 2em;
  color: #a30311;
  text-align: center;
}

.led-text {
  color:#fff;
  text-shadow: 0 0 5px rgba(163, 3, 17, 1), 0 0 10px rgba(163, 3, 17, 0.7);
  margin: 0 auto; 
}

.separator {
  height: 4px;
  background-color: var(--led-color);
  width: 60%;
  margin: 10px auto;
  animation: blink 1.5s infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff
}

.modal-content {
  background-color:var(--bg-black-50);
  padding: 20px;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
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
}

</style>
