# BÁSTYAFAL – élő mód architektúra (v1.0 · 2026-11-09)

Státusz: éles fejlesztés, első iteráció (v3.0). Cél: osztálytermi, regisztráció nélküli csapatjáték, hosszú távú üzemeltetésre.

## Miért új háttér
A demó (v2.x) élő módja a claude.ai artifact beépített adatbázisán futott, ezért a játékosoknak claude.ai-hozzáférés kellett. Az éles megoldás ettől független: a Vercelen futó oldal + Supabase.

## Összetevők
| Réteg | Megoldás |
|---|---|
| Kliens | Egyetlen statikus HTML (`index.html`), Vercel. Módok: kezdőoldal, `#hazigazda` (kivetítő), `#jatek/KÓD` (telefon), `#szimulacio` |
| Adatbázis | Supabase KM-dev projekt, `bf_` előtagú táblák (`bf_host_codes`, `bf_sessions`, `bf_players`, `bf_votes`, `bf_attempts`) |
| Hozzáférés | A táblákon RLS be van kapcsolva, policy nincs, az `anon`/`authenticated` szerepkörnek nincs közvetlen joga. Minden művelet `SECURITY DEFINER` RPC-ken át, token-ellenőrzéssel |
| Szinkron | Hosszú lekérdezés (polling): játékos 0,9–1,4 s, házigazda 0,7 s; a játékos csak változáskor kap állapotot (`rev`) |

## RPC-k
`bf_host_create(kód)`, `bf_publish`, `bf_host_poll`, `bf_join`, `bf_player_poll`, `bf_vote`. A tokenekből csak a SHA-256 hash tárolódik.

## Biztonsági és adatvédelmi alapelvek
- Játékosok személyes adatot nem adnak meg; a becenév véletlenszerű, a token csak a böngésző `sessionStorage`-ában él.
- Házigazda-kód: hash-elve tárolva (`bf_host_codes`); 10 percen belül 30 hibás próba után a belépés zárolódik.
- Szavazás szerveroldalon ellenőrzött: csak `vote` fázisban, az aktuális kulcsra, megengedett opcióra; játékosonként és kérdésenként egy szavazat (az első érvényes marad).
- Kapacitás: legfeljebb 80 játékos/játékmenet (az első üzemi cél: ~35 fő/osztály, több párhuzamos játék).
- Megőrzés: a 7 napnál régebben inaktív játékmenetek (és játékosaik, szavazataik) törlődnek, a törlés új játékmenet indításakor fut.
- A nyilvános (publishable) kulcs a kliensben szándékosan látható; a védelem az RPC-k token-ellenőrzésén és a zárt táblákon alapul.

## Ismert korlátok és következő lépések
1. Polling helyett Supabase Realtime (broadcast) a késleltetés csökkentésére, nagyobb (kb. 300 fős) rendezvényhez.
2. Ütemezett takarítás (pg_cron vagy n8n) a jelenlegi „opportunista” törlés helyett.
3. Házigazda-kód kezelés: több kód, lejárat, címke (jelenleg közvetlen adatbázis-művelettel).
4. Játékmenet-lezárás és eredmény-export a házigazdának.
5. Terheléspróba a valós környezetben (`scripts/loadtest.mjs`) és WCAG-ellenőrzés a telefonos nézeten.
6. Az `anon` által hívható RPC-k a Supabase advisor-ban figyelmeztetésként jelennek meg; ez szándékos (token-védett), de a `bf_host_create`-re IP-alapú korlátozás is bevezethető.

## Tesztelés (v3.0)
- SQL-szintű forgatókönyv-teszt (hibás kód, belépés, becenév-ütközés, újracsatlakozás, jogosulatlan hívások, szavazás szabályai, token-kiszivárgás): lefutott.
- Böngészős végpontok közötti teszt (házigazda + telefon, a háttérszolgáltatás szimulálásával): a belépés, lobbi, állapot-közzététel és szavazás működött.
- Valós környezeti terheléspróba: még nincs lefuttatva (a fejlesztői környezetből a Supabase nem érhető el), futtatása: `BF_HOST_CODE=... node scripts/loadtest.mjs 35 3`.
