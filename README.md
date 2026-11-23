# GroundSurf Studio — public beta website

This repository is the **public static distribution site** for GroundSurf Studio **0.7.5 beta**, hosted through GitHub Pages.

The development repository `wtzet-eng/GroundSurf-Studio` remains private while we review the project's source code and licensing for eventual open-source distribution. This repository provides the **public beta's prebuilt portable HTML**, a static information site, screenshots, instructions, and an issue tracker. Public distribution of a compiled application does **not** mean the development source has been published under an open-source licence.

## Public release

- Release notes: [0.7.5-beta.1](https://github.com/wtzet-eng/groundsurf-studio-web/releases/tag/v0.7.5-beta.1).
- The checksum for the standalone download is in `download/SHA256SUMS.txt`.

## What is published

- `/` — light, accessible landing page in the same dark palette as Studio.
- `/app/` — **the real, locally executed standalone Studio 0.7.5 browser bundle**. This is identical to the downloadable HTML.
- `/download/GroundSurf-Studio-0.7.5-beta.html` — independent portable HTML to open without internet, login or installation.
- `/guide/` — a short tutorial and scientific limitations.
- `/privacy/` — clear explanation of locally handled files and static-hosting limitations.
- `/assets/` — screenshots and stylesheet, no tracking scripts.

## Version & integrity

Built from the private Studio branch `feat/studio-075-thickness-section-zoom-20261123`; build metadata `0.7.5-preview.1`, publicly labelled **0.7.5-beta.1**.

Expected application SHA-256 for **both `app/index.html` and downloadable HTML**:

`ae0208957e6c548a4c96446b4abedaaeb3ecc2dca12380bea53b1352170723e1`

Original size: **1,164,341 bytes**.

The public site is not the GroundSurf Site Intelligence website and does not connect to its backend. The bundle has a restrictive no-network Content Security Policy. We do not retain user uploads.

## Tested and not tested

- Ubuntu Firefox and Chromium: tests of the offline application, project ZIP saving/reopening, real SGU Stockholm boreholes, quick correlations, section zoom and schematic spacing, 3D interpretation, geological QC and conceptual thickness.
- Windows and macOS: supported as **intended** browser platforms, but not yet independently runtime-tested for this release.
- Scientific interpretation: derived surfaces and conditional thickness are not independently verified geology or engineering calculations.

## Publication process

Create a public **GitHub Pages** site using the repository's `main` branch and root (`/`). Publishing through this distribution repository deliberately does **not** expose private development branches, credentials or backend service code. Use a new documented beta version and verify it before replacing either copy of the application.

For updates, preserve both portable files at identical checksums and retest both browser and offline workflows.

## Feedback

Open an issue in this repository. Please remove confidential source coordinates and personal/client information from public reports.

## Legal status

The website text and design are provided for public reading. The application is supplied as an **experimental free-to-use beta**; the full development source repository has not yet been published. A comprehensive source-code licence is subject to review before any open-source release. Third-party software licence notices are listed in `THIRD_PARTY_NOTICES.md`.

No warranty of geology, fitness for engineering purpose, merchantability or uninterrupted availability is made.
