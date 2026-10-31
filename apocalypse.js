// Apocalypse (ดินแดนหายนะ) · S1 แดนสุสานคำสาปมรณะ · 2026/10/3 – 2027/1/1
// Names and portraits are taken from the in-game season screen. Element, race, size
// and card data are not available yet, so these guides are marked as pending.
(() => {
  const BOSSES = [
    [90001, 'เซ็นย์ตื่นบรรทม'],
    [90002, 'ทราของราชาสุสา'],
    [90003, 'เงาโลหิตพิโรธ'],
    [90004, 'จ้าวแห่งอเวจี'],
    [90005, 'นัขยมโลกกลืนวิญ'],
  ];
  BOSSES.forEach(([id, name], i) => {
    const img = 'apoc_' + (i + 1);
    window.RO_TEX[img] = 'assets/apocalypse/a' + (i + 1) + '.webp';
    window.RO_DATA.push({ id, name, img, region: 'Apocalypse', season: 'S1', pending: true, col: {}, slots: {} });
  });
})();
