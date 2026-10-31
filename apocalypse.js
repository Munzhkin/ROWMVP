// Apocalypse (ดินแดนหายนะ) · S1 แดนสุสานคำสาปมรณะ · 2026/10/3 – 2027/1/1
// Names and portraits are taken from the in-game season screen. Element, race, size
// and card data are not available yet, so these guides are marked as pending.
(() => {
  // Order follows the season path: Amon Ra → Pharaoh → Bloody Knight → Dark Lord → Anubis.
  const BOSSES = [
    [90001, 'Amon Ra', 'เซ็นย์ตื่นบรรทม', 'a1'],
    [90002, 'Pharaoh', 'ทราของราชาสุสา', 'a3'],
    [90003, 'Bloody Knight', 'เงาโลหิตพิโรธ', 'a2'],
    [90004, 'Dark Lord', 'จ้าวแห่งอเวจี', 'a4'],
    [90005, 'Anubis', 'นัขยมโลกกลืนวิญ', 'a5'],
  ];
  BOSSES.forEach(([id, name, th, file]) => {
    const img = 'apoc_' + file;
    window.RO_TEX[img] = 'assets/apocalypse/' + file + '.webp';
    window.RO_DATA.push({ id, name, th, img, region: 'Apocalypse', season: 'S1', pending: true, col: {}, slots: {} });
  });
})();
