# Asset notes

Original Cocos engine and native scene assets are retained from supplied Playable.zip entry 16. The original logo pixels are cleared and replaced inside the original SpriteFrame rectangle with `corn/juicy-journey-logo.webp`. Household objects, rails, pins, lava, rocks and original skeleton animation preserve their physical and visual meaning.

Local food / fruit / drink images originate from `D:/Test/Juicy Journey/棋子`. Additional missing assets were supplied under `维护工具/迁移包20261012/new-pieces/ingredients`. Aspect ratios are preserved. Exact source-to-frame mapping is in `source/asset-replacements.json` (25 frame replacements plus baked guide / order replacements).

All 1 original BGM payloads are deleted from the final resource pack. Exact removed identifiers and original payload sizes are listed in `source/removed-music.json`. Short gameplay effects remain. The original ad SDK, reporting implementation, store URLs, screen recorder and install CTAs have been removed from the runtime; a readable local resource adapter loads the original engine offline.


## Automatic demonstration update — 2026-10-13

The source artwork and resource mappings are unchanged. Native input handlers, original collision shapes and original winning thresholds are retained. Low-frame-rate game time is synchronized to Cocos native physics accumulation. See README.md for strategy and compatibility details.
