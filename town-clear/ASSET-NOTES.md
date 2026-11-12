# Town Clear assets

The user's office-clutter screenshot informed category orders and layered collection. The user approved the first town process concept's density and requested small 3–7 item semantic categories and individually separated objects.

Four transparent 4×3 source atlases were generated with the built-in imagegen tool using the approved town concept as style reference: living characters/animals, town vehicles/buildings, plants/furniture and loose cartons/bins/tires/cones. Every cell was cropped separately, trimmed and cleaned to its main connected alpha silhouette. Forty-eight base artworks supply 99 independent item files; repeated categories use alternate drawings or subtle color variants.

All 99 runtime objects have separate identities, files, positions, category assignments, alpha masks and lifecycle states. No composite town picture is used as a clickable game surface. Residents, animals, plants, house/store models, furniture and litter disappear independently when collected. The road/foundation substrate is drawn separately in Canvas.

The local source/inventory.json records every item and its source atlas/cell. Original atlases and 99 extracted WebP files remain under source. The standalone HTML embeds all runtime assets. No reference screenshot, generated process contact sheet, third-party game code, music, remote resource or CTA is embedded.

Layout revision: building pads are placed on opposite sides of the same road used by vehicle placement. Furniture and plants prefer storefront/curb areas; residents and animals prefer sidewalks. Contact footprints are separated, drawing and hit order use buildings at the back, vehicles in the middle and other objects in front, with ground-contact depth inside each tier, all sprite bounds stay inside the town viewport, and image perspective is preserved without random rotation. The top order containers flash and stretch horizontally on receipt. Seven occupied storage slots are valid; only an extra off-order collection causes failure.

Foundation alignment: each of the seven building sprites has its own footprint, obtained from its two lower opaque wall-edge slopes and their front corner. The rear corner follows those two axes. Footprints use the exact sprite display transform and a 7.5% paving margin, retain the same geometry after collection, and are not rotated to a shared generic diamond. Source metadata and edge-fitting evidence remain in source/foundations.json and source/prepare-foundations.cjs.
