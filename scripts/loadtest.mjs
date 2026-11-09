// BÁSTYAFAL élő mód terheléspróba (Node 18+). Használat:
//   BF_HOST_CODE=... node scripts/loadtest.mjs [játékosok száma, alap: 35] [körök száma, alap: 3]
// Egy teszt-játékmenetet hoz létre, N játékost léptet be, köröket szavaztat, és méri a késleltetést.
const URL_ = 'https://xaklmjaexyhcbztklyqf.supabase.co/rest/v1/rpc/';
const KEY = 'sb_publishable_KdbxMCfCt7vh3olVAoVpvQ_tJ4z8jgw';
const N = +(process.argv[2] || 35), ROUNDS = +(process.argv[3] || 3);
const code = process.env.BF_HOST_CODE;
if (!code) { console.error('Hiányzik a BF_HOST_CODE környezeti változó.'); process.exit(2); }
const rpc = async (fn, a) => {
  const t = performance.now();
  const r = await fetch(URL_ + fn, { method: 'POST', headers: { apikey: KEY, 'Content-Type': 'application/json' }, body: JSON.stringify(a) });
  const j = await r.json(); if (!r.ok) throw new Error(fn + ': ' + JSON.stringify(j));
  lat.push(performance.now() - t); return j;
};
const lat = [];
const pct = (p) => { const s = [...lat].sort((a, b) => a - b); return s[Math.min(s.length - 1, Math.floor(s.length * p))].toFixed(0); };
const h = await rpc('bf_host_create', { p_code: code });
if (!h.ok) { console.error('Házigazda-belépés sikertelen:', h.error); process.exit(1); }
console.log('Játék:', h.join_code);
const players = await Promise.all(Array.from({ length: N }, (_, i) => rpc('bf_join', { p_join_code: h.join_code, p_handle: 'teszt' + i })));
if (players.some((p) => !p.ok)) { console.error('Csatlakozási hiba'); process.exit(1); }
let fails = 0;
for (let r = 0; r < ROUNDS; r++) {
  const key = 'lt:' + r;
  await rpc('bf_publish', { p_sid: h.sid, p_host_token: h.host_token, p_state: { phase: 'vote', key, allowed: [0, 1, 2, 3], limit: 15 } });
  const t0 = performance.now();
  await Promise.all(players.map(async (p, i) => {
    await rpc('bf_player_poll', { p_sid: h.sid, p_token: p.token, p_since: -1 });
    const v = await rpc('bf_vote', { p_sid: h.sid, p_token: p.token, p_key: key, p_opt: i % 4 });
    if (!v.ok) fails++;
  }));
  const hp = await rpc('bf_host_poll', { p_sid: h.sid, p_host_token: h.host_token, p_key: key });
  const got = Object.keys(hp.votes).length;
  console.log(`Kör ${r + 1}: ${got}/${N} szavazat, ${(performance.now() - t0).toFixed(0)} ms`);
  if (got !== N) fails++;
}
console.log(`Kérések: ${lat.length}, késleltetés p50=${pct(0.5)} ms, p95=${pct(0.95)} ms, p99=${pct(0.99)} ms, hibák: ${fails}`);
process.exit(fails ? 1 : 0);
