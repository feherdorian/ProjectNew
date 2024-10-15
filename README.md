# ProjectNew

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

# Kosárlabdázók Táblázata

Ez az alkalmazás egy interaktív platform, amely a legnagyobb kosárlabdázókat mutatja be, lehetővé téve a felhasználók számára, hogy felfedezzék a sportág ikonikus alakjait és részletes információkat nyerjenek róluk. Az alkalmazás célja, hogy szórakoztató és informatív élményt nyújtson a kosárlabda rajongói számára.

## Funkciók

- **Kosárlabdázók listázása**: Az alkalmazás egy rendezett táblázatban jeleníti meg a játékosokat, beleértve nevüket, posztjukat és képeiket. Ez a funkció lehetővé teszi a felhasználók számára, hogy gyorsan áttekintsék a kosárlabdázókat, és kiválasszák azokat, akik iránt érdeklődnek.

- **Keresési lehetőség**: A felhasználók név vagy poszt alapján kereshetnek a játékosok között, így könnyedén megtalálhatják a keresett információt. Ez a funkció segít a felhasználóknak, hogy gyorsan elérjék azokat az adatokat, amelyeket keresnek.

- **Részletek megjelenítése**: A kiválasztott játékos részletes nézete tartalmazza a játékos leírását, díjait és egyéb érdekességeit. Ez a funkció lehetőséget ad arra, hogy a felhasználók jobban megismerjék a játékos karrierjét és teljesítményét.

## Home.vue

A **Home.vue** komponens a kezdőoldal funkcióját látja el, amely üdvözli a látogatókat, és bemutatja az alkalmazás célját. A komponens az alábbi kulcsszerepet tölti be:

### Szövegbeírás Animáció

A `Home.vue` dinamikus szövegbeírással üdvözli a felhasználókat. A cím és a leírás fokozatos megjelenítése izgalmas és interaktív élményt nyújt. A cím a következő szöveget tartalmazza: "Üdvözöljük a Kosárlabdázók világában!", míg a kísérő szöveg az alkalmazás lényegét foglalja össze: "Itt megtalálhatod a legnagyobb kosárlabdázók adatait és statisztikáit."

### Stílusos Megjelenés

A stílusok gondosan megtervezettek, hogy vonzó és modern megjelenést biztosítsanak. A `led-text` osztály különleges text-shadow effektust alkalmaz, amely LED-hatású megjelenést kölcsönöz a szövegnek. Az animációk és a színek kiválasztása hozzájárul a felhasználói élmény fokozásához.

### Komponens Szerkezete

A komponens JavaScript és Vue.js funkciókat használ a dinamikus szövegbeírás megvalósításához. A `mounted` életciklus-hook aktiválja a szövegbeírási folyamatot, amely a `typeTitle` és `typeText` metódusokkal valósul meg. Ezek a metódusok fokozatosan építik fel a címet és a kísérő szöveget, szórakoztató és érdekes módon bemutatva az alkalmazás célját.

## Komponens Interakciója

A **Home.vue** a fő alkalmazás struktúrájának része, amely más komponensekkel együtt működik. A felhasználók a kezdőoldalról könnyen navigálhatnak a kosárlabdázók listájához és részletes nézeteikhez. A kezdőoldal nemcsak bemutatja az alkalmazást, hanem segít a felhasználóknak a további felfedezésben is.

## Adatok

A játékosok adatai egy tömbben tárolódnak, amely a következő mezőket tartalmazza:

- **id**: A játékos egyedi azonosítója.
- **nev**: A játékos neve.
- **poszt**: A játékos posztja (pl. Shooting Guard, Small Forward).
- **kep**: A játékos képe.
- **leiras**: A játékos rövid leírása.
- **dijak**: A játékos által nyert díjak listája.

## Stílus

A stílusok Scoped CSS segítségével lettek kialakítva, hogy a különböző komponensek között ne lépjenek fel konfliktusok. Az alkalmazás dizájnja modern és letisztult, LED-efektusokkal a szövegeken, ami vizuálisan vonzóvá teszi a felületet. Az animációk és a dinamikus szövegbeírás fokozza a felhasználói élményt, élvezetesebbé téve az interakciót az alkalmazással.

## Összegzés

Ez a kosárlabdázókat bemutató alkalmazás nemcsak információt nyújt a sportág legnagyobb alakjairól, hanem szórakoztató és interaktív módon teszi ezt. A felhasználók könnyen navigálhatnak a játékosok között, és részletes adatokat kaphatnak róluk, így felfedezhetik a kosárlabda világának gazdagságát és sokszínűségét.