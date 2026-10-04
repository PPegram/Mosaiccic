# Website maintenance

The canonical page template is `scripts/build.mjs`. Run `npm run build` after editing it, then `npm test` before committing.

GitHub Actions also checks the committed pages, regenerates the HTML and fails if those files were out of date. CSS font URLs and responsive image paths are included in the structural checks.

The original upload flattened folders. Images and fonts have been restored under `assets/`, and the build/check files are restored under `scripts/`. Old top-level copies have been left in place to avoid destructive cleanup; they are not the canonical sources.

The colour control has Light, Dark and System options. Light and Dark choices are propagated through internal URLs as `?theme=light` or `?theme=dark`, including links with section anchors. This avoids cookies and browser-storage dependencies. A plain page URL uses the operating-system preference.

The initial theme script executes before the stylesheets. With JavaScript disabled, the stylesheet follows the operating-system preference and native page navigation remains available.

Keyboard focus uses contrasting rings for light, dark and tinted sections. The mobile logo link has a minimum height of 44 pixels. Homepage destination labels are unnumbered; the research process remains numbered.
