# Asset provenance

- Reference: user-supplied Foodstars video, used to inspect portrait composition, board reveal timing, cursor gestures and treasure presentation. The source video is not embedded or played as the HTML gameplay.
- Logo: local official English Juicy Journey logo, proportionally scaled.
- Items: local Juicy Journey chess/item collection; the local source/provenance.json records the original paths.
- Treasure: existing approved JJ red-and-gold chef chest images generated in October 2026 from the user's local artwork, with closed, half-open and open states. No competitor chest artwork is used.
- Ending: no promotional poster or CTA is embedded or displayed. The game holds on the opened JJ chest, reward pile and settled wallets. The control strip is independently rendered in the JJ red/gold palette; it does not contain copied Foodstars controls.
- Cursor: independently traced reference-style proportions, with a short pointing finger, broad curled-finger palm, rolled cuff and gray-blue shading. Continuous piecewise-linear movement connects every contact, drag, hold and next target. Contact compression is anchored to the fingertip; no arc, bobbing or teleport. No competitor cursor pixels are embedded.
- Music: user-supplied Tropical Sunset.wav, first 33 seconds transcoded to 128 kbps MP3, used for this explicitly authorized sample only. No external requests or default music toggle.
- This is an HTML animation/demo adaptation of the reference chronology, not a pixel-identical extraction of the competitor's original game engine.
- Chest feedback uses the same closed-chest silhouette throughout all intermediate merges. A grayscale copy of the local closed image is covered by eleven independently restored color regions. Each valid merge triggers a short damped shake and falling dust; only the final merge triggers the closed/half-open/open sequence. The final burst uses 50 coin particles and 50 local gem particles, with staged wallet arrivals.
- Coin UI and particles use the existing local coast-merge/source/assets-jj/gold-coin.png and coin-stack.png. Detached crop debris and red matte speckles were removed while preserving the gold/star artwork, cast shadow and aspect ratio. The paths are recorded in the local source/coin-provenance.json.
- Hand motion now articulates the index knuckle, palm, thumb and cuff between lifted, pressed, gripping and released poses. The fingertip stays anchored; animation is not whole-hand scaling.
- Interaction effects are synthesized locally with Web Audio: layered impact/transient/chime for each merge, plus pickup, coin arrival and opening sounds. Effects require a user gesture and pause when hidden. The provided MP3 remains a separate music layer at 35% volume.
