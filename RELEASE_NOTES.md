# GroundSurf Studio 0.7.5-beta.1 — first public beta

**24 November 2026 · Early-access geological interpretation workbench**

This is the first publicly downloadable GroundSurf Studio beta, based on the independently tested private build **0.7.5-preview.1**. Its internal HTML metadata remains `0.7.5-preview.1` so that the public beta preserves exactly the same tested bytes.

## Two ways to run

- **Launch in your browser:** `https://wtzet-eng.github.io/groundsurf-studio-web/app/`
- **Download a portable offline HTML file:** `GroundSurf-Studio-0.7.5-beta.html` and open it locally in Firefox or Chromium. No installation, local server, subscription or login is required.

Both entry points use **the same 1,164,341-byte browser build**.

## What's included

- Borehole interval CSV import and inspectable vertical source logs in 3D.
- One-click built-in real Stockholm SGU dataset: **14 real source boreholes and 100 logged intervals (CC0)**.
- Direct mouse-drawn manually proposed borehole correlations; top/base contacts, uncertainty notes, source-bound audit history, quick Undo.
- X/Z and Y/Z logged interval sections with metre-based vertical exaggeration, horizontal zoom and clearly labelled schematic equal spacing.
- Several separately reviewed conceptual surfaces in a 3D comparison scene.
- Geometric quality checks: crossings, inverted upper/lower order, near contacts, unsupported interpreted edges and spatial gaps.
- Conditional thickness and geometrical volume calculations only within strictly valid interpreted overlap.
- Full local project ZIP save/reopen retaining the original uploaded borehole source bytes.

## Tests

- 123 geology/application automated tests and 7 desktop tests passed.
- Standalone offline `file://` HTML browser tests on Ubuntu Firefox and Chromium passed, including real SGU data, complete project ZIPs and all earlier modelling regressions.
- Public website's browser smoke test checks the launch route, downloadable file checksum, built-in Swedish boreholes, mobile layout, privacy page and guide.

**Not yet independently tested:** native Windows or macOS browser runtimes; all engineering/geological interpretations need professional review.

## Scientific limits

The Studio beta is an **experimental conceptual interpretation workbench**. It does not provide verified stratigraphic equivalence, guaranteed coordinate/datum accuracy, geotechnical design suitability, fault interpretation, certified earthworks volumes or confirmation that a hypothetical geology exists. Values calculated between manually interpreted surfaces are conditional on the interpreter's assumptions.

## Integrity

`GroundSurf-Studio-0.7.5-beta.html`

- SHA-256: `ae0208957e6c548a4c96446b4abedaaeb3ecc2dca12380bea53b1352170723e1`
- Size: **1,164,341 bytes**.
- Corresponds byte-for-byte to the `app/index.html` hosted web version.

## Licensing and feedback

This public distribution repository contains compiled HTML and public website content. It is **not yet an open-source publication of the private Studio development repository**; a first-party source-code licence will be selected separately. Third-party licence texts are included under `third-party-licenses/`.

Try the beta free of charge and share reproducible usability feedback via this repository's GitHub Issues. Avoid posting confidential borehole data or client coordinates in public reports.

## 0.9.5-preview.1 — experimental public preview

Adds dockable workspace, multiple named sections, bounded layer geometry, conservative structural scenarios, geological grids, GSLIB exchange, saved simulation archive inspection, conditional uncertainty maps, experimental directional variograms and geometric anisotropy. The optional Ubuntu 24.04 amd64 desktop package uses separately supplied trusted Workbench 0.4.5 GsTL workers for native ordinary kriging, SGSIM and SISIM. No native workers are redistributed in Studio. The browser edition does not execute native workers.

The existing 0.7.5 application and standalone download remain unchanged. The 0.9.5 browser launch and offline download are byte-identical (1,333,702 bytes). All 187 local application/desktop tests passed, along with offline Chromium/Firefox and remote CI. The desktop package was tested from an extracted package; package-manager installation/upgrade has not been verified. Windows and macOS are not tested for this preview.

The native model supports spherical covariance, unit sill, zero nugget and horizontal geometric anisotropy. Uncertainty maps are conditional on fixed geological geometry and a maximum of ten realisations per run. This is not engineering certification. No full source-code licence is implied.
