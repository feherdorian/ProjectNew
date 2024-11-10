# Kosárlabdázók Webalkalmazás

## Áttekintés

Ez a Vue.js alapú webalkalmazás célja, hogy bemutassa a világ legismertebb kosárlabdázóit. Az alkalmazás lehetőséget ad arra, hogy megismerkedjünk a játékosok adataival, statisztikáival és képeikkel. Az alkalmazás könnyen navigálható és interaktív módon mutatja be a kosárlabdázókat.

### Főbb Funkciók:
- **Navigációs menü**: Navigálj a főoldal, kosárlabdázók táblázata és játékos kártyák között.
- **Dinamikus szöveg megjelenítés**: A főoldalon található szövegek gépelő animációval jelennek meg.
- **Kosárlabdázók listája**: Kosárlabdázók neve és pozíciója egy táblázatban.
- **Kosárlabdázó kártyák**: Minden játékos részletes kártyája, statisztikákkal és képekkel.

---

## Alkalmazás Struktúra

Az alkalmazás a következő komponensek felhasználásával készült:

### 1. **`Home.vue`**

A `Home.vue` komponens a főoldalt jeleníti meg, ahol dinamikus szövegek és a kosárlabda témájú üdvözlő szöveg található. A szövegek **gépelő animációval** jelennek meg, ami vizuálisan izgalmasabbá teszi a kezdőoldalt.

- **Funkciók**:
  - Üdvözlő szöveg megjelenítése.
  - Animációval megjelenő szöveg.

  


### 2. **`PlayersTable.vue`**

A `PlayersTable.vue` komponens tartalmazza a kosárlabdázók listáját egy táblázat formájában. A táblázatban szerepel minden kosárlabdázó neve, pozíciója és egy link a részletes játékos kártyájához.

- **Funkciók**:
  - A táblázat dinamikusan jeleníti meg a kosárlabdázók adatait.
  - A játékosok nevére kattintva a felhasználók elérhetik a játékosok részletes kártyáját.


### 3. **`PlayerCard.vue`**

A `PlayerCard.vue` komponens egy játékos részletes kártyáját jeleníti meg. A kártya tartalmazza a játékos nevét, pozícióját, statisztikáit (például pontok, lepattanók, gólpasszok), és egy képet a játékosról.

- **Funkciók**:
  - Részletes információk a játékosról.
  - A játékos képének és statisztikáinak megjelenítése.
  - A kártya vissza gombbal ellátott, hogy a felhasználók visszakerülhessenek a játékosok listájához.


### 4. **`Navbar.vue`**

A `Navbar.vue` komponens a navigációs sávot tartalmazza, amely minden oldalon elérhető. A navigációs menü segít a felhasználóknak könnyedén váltani a különböző oldalak között, például a főoldal, a játékosok listája és a részletes játékos kártyák között.

- **Funkciók**:
  - Két fő navigációs elem: **Főoldal** és **Kosárlabdázók**.
  - Reszponzív, így mobil eszközökön is jól működik.


### 5. **`PlayerData.js`** (adatok kezeléséhez)

A `PlayerData.js` egy egyszerű JavaScript fájl, amely tartalmazza az összes játékos adatait (pl. név, pozíció, statisztikák, képek elérési útja). Ez az adatforrás a többi komponens számára.

- **Funkciók**:
  - A játékosok adatait egy tömbben tárolja.
  - Segít az alkalmazásnak a dinamikus adatkezelésben és biztosítja a felhasználói élményt.

```javascript
export const players = [  {    id: 1,    name: "Michael Jordan",    position: "Shooting Guard",    stats: {      points: 30.1,      rebounds: 6.2,      assists: 5.3    },    image: "./images/jordan.png"  },  // További játékosok...];
