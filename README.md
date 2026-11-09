# BÁSTYAFAL – Kaland a hálón

Védd a hálót. Vezetett, csapatjáték-formátumú, döntésalapú képzés középiskolásoknak (Kibervédelem alapjai, Információs műveletek alapjai). Fiktív helyszín: Bástyavár, Bástya Gimnázium, BástyaKupa.

NKE HHK Katonai Távoktatási és Vizsgaközpont · v3.0 · 2026-11-09

## Tartalom
- `index.html` – az 5–7 perces demó (egyetlen fájl, a videók beágyazva, magyar felirattal). Szimulált csapatmódban fut, bot-szavazókkal.
- `docs/` – vezetői döntési anyag (PDF v1.3) és a videóscriptek.
- `scripts/` – videónként egy generálási script (angol prompt, magyar felirat időkóddal).
- `videos/` – a demóba épített videók (átkódolt, 960×540).

## Ismert korlátok
- Az élő, több telefonos mód a claude.ai artifact adatbázisát használja; ezen a helyen (Vercel) a szimulált mód működik. Éles osztálytermi használathoz az S2V (Scan2Vote) háttér kell.
- Az ezüst/bronz és tanulópálya záró videó (V5b, V5c) még nincs legenerálva.
- A videók MI-generáltak; éles kiadás előtt jóváhagyás szükséges.

## v2.4 (2026-11-06)
- Indítóképernyő: a V6 bemutató klip (30 mp) a képernyő közepén (~60%), körülötte mozgó, áttetsző emblémaminta sötét háttéren. Az oldal megnyitásakor először ez fut, majd automatikusan a felület következik, „Tovább a játékhoz” gombbal átugorható.

## v3.0 (2026-11-09) – élő mód
- Élő, többjátékos mód saját háttérrel: Supabase (KM-dev, `bf_` táblák) + Vercel. A játékosok QR-kóddal, fiók nélkül csatlakoznak.
- Házigazda: kezdőoldal → „Házigazda nézet” → házigazda-kód. A kijelzőn megjelenik a 6 jegyű játékkód és a QR.
- Részletek: `docs/ARCHITEKTURA_ELO_MOD_v1.0_2026-11-09.md`, terheléspróba: `scripts/loadtest.mjs`, változások: `CHANGELOG.md`.
