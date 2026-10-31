# MVP Atlas · Ragnarok the New World

Extract the archive and open index.html in a modern browser. No installation or internet connection is required.

The world atlas opens first. Hover or focus a boss portrait on an island to enlarge it and show its name. Click or tap the portrait to go directly to its guide. Select the island label to browse the region. Select a boss in the index to open its combat guide. Use the search box, level filter, and element filter to narrow the list. Zoom with + and −, drag the enlarged map to pan, and use the center control to fit the archipelago.

The atlas uses Three.js and WebGL to render custom island meshes. If WebGL is unavailable, a Canvas 2D renderer draws the same geometry and keeps the island controls active. The eight island regions are atlas groupings by level.

Each boss guide includes its race, size, element matchups, and scored cards for ten equipment slots. Use the left and right arrow keys to browse slots and Escape to return. Direct links such as index.html#boss=80014 open a boss guide.

Scores follow the supplied dataset. The combined advantage adds the two best eligible cards in each slot and the attack-element bonus. Armor element changes do not stack. The displayed range follows the lowest and highest eligible card rolls.

English text was adapted from the supplied Taiwan dataset. Regional in-game spellings may differ. Boss and element images and card artwork are embedded in data.js for offline use. Card artwork is matched to its original item icon from roworlddb.com/media/images/item/.

Game data and images belong to their respective owners. Source: https://roworlddb.com/

## Apocalypse island (S1 · 2026/10/3 – 2027/1/1)

A detached ninth island, Apocalypse, sits in the open space to the right of the map title, with no sea route to the other islands. Its five season bosses come from the in-game "แดนสุสานคำสาปมรณะ" season screen; order follows the season path (Amon Ra → Pharaoh → Bloody Knight → Dark Lord → Anubis); names and portraits are in apocalypse.js and assets/apocalypse/. Amon Ra, Pharaoh, Bloody Knight and Dark Lord reuse the element, race, size and card data of the same MVPs on the other islands. Anubis has no source data yet, so its guide shows "Data pending".
