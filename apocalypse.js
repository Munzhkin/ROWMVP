// Apocalypse (ดินแดนหายนะ) · S1 แดนสุสานคำสาปมรณะ · 2026/10/3 – 2027/1/1
// Names and portraits are taken from the in-game season screen. Bosses that also exist as
// regular MVPs reuse that MVP's element, race, size and card data (`from` = source id).
// Bosses with no source data are marked as pending.
(() => {
  // Order follows the season path: Amon Ra → Pharaoh → Bloody Knight → Dark Lord → Anubis.
  const BOSSES = [
    [90001, 'Amon Ra', 'เซ็นย์ตื่นบรรทม', 'a1', 80014],
    [90002, 'Pharaoh', 'ทราของราชาสุสา', 'a3', 80016],
    [90003, 'Bloody Knight', 'เงาโลหิตพิโรธ', 'a2', 80022],
    [90004, 'Dark Lord', 'จ้าวแห่งอเวจี', 'a4', 80018],
    [90005, 'Anubis', 'นัขยมโลกกลืนวิญ', 'a5', null],
  ];
  const KEEP = ['lv', 'race', 'el', 'size', 'col', 'best_el', 'el_bonus', 'sum_lo', 'sum_hi', 'slots'];
  BOSSES.forEach(([id, name, th, file, from]) => {
    const img = 'apoc_' + file, src = window.RO_DATA.find(b => b.id === from);
    window.RO_TEX[img] = 'assets/apocalypse/' + file + '.webp';
    const boss = { id, name, th, img, region: 'Apocalypse', season: 'S1', from };
    if (src) KEEP.forEach(k => { boss[k] = src[k]; });
    else Object.assign(boss, { pending: true, col: {}, slots: {} });
    window.RO_DATA.push(boss);
  });
})();
