# GroundSurf Studio 0.10.1 Preview 1

## Try the offline workflow

1. Open the portable HTML in a desktop browser, or on Ubuntu 24.04 amd64 install the preview deliberately with `sudo apt install ./groundsurf-studio_0.10.1~preview1_amd64.deb`. The HTML needs no installation.
2. Open **Projects → Open complete project** and choose `Synthetic-time-depth.zip`.
3. Open **Explorer → Section images → Integrated interpretation**. Under **Review a source interpretation**, choose **Synthetic time profile — Analytical TWT horizon**.
4. Expand **Time–depth conversion**, then choose **Define velocity model**. Enter 2,000 m/s, optional velocity SD 100 m/s, TWT-zero elevation 50 m, and output datum **Synthetic elevation datum**. Enter **Analytical constant velocity example** for the source and set coverage to 0–1,000 ms. Confirm the reference and coverage.
5. Save the metric interpretation. The expected endpoints are −150 m at 200 ms TWT and −550 m at 600 ms TWT. The velocity-only elevation SDs are 10 m and 30 m respectively.
6. Download the derived JSON if needed. Use **Projects → Save complete project** to keep the original TWT pick and the metric result together.

## Method and validity

At each pick vertex, elevation in metres is `z = z₀ − v × TWT / 2`, using TWT in seconds and velocity in m/s. The user declares the elevation of seismic time zero, `z₀`, in a named output vertical datum. SEG-Y sample spacing and delay determine TWT. For positioned images, the confirmed image calibration supplies TWT. XY stays in the source metric CRS. The model assumes one constant velocity along the entire pick and vertical travel through the covered interval. Coverage is a user declaration, including along-section applicability. The software checks the entire pick against the declared time interval and stops if any vertex lies outside it.

If a velocity standard deviation is supplied, the elevation SD is `TWT × σᵥ / 2`. This follows directly from the linear equation. The same uncertain velocity affects every vertex, so those elevation errors are correlated. The figure covers velocity uncertainty alone and assumes the datum and TWT are fixed. A blank field records unspecified uncertainty.

Each saved conversion has a derived ID and owns an immutable velocity model ID. Revising the model replaces the active derived record with a new calculation and both new IDs. Archived or downloaded snapshots retain their original model. Changes in the source calibration, navigation or geometry flag an existing result for recomputation and block export. The original pick remains in the archive. Conversions are kept in the review workspace and have no automatic route into horizons, geometry ensembles or engineering models. Settings carry units, datum and source identity in the versioned project archive. Large SEG-Y inputs stay external.

## Preview scope

The workspace stores one active conversion per pick and up to four per section. The next scientific steps are layered interval velocities and monotonic checkshot time–depth curves, verified separately with analytical layer-boundary and interpolation examples. VSP-based inputs and simultaneous alternative velocity scenarios remain future work. This is geological interpretation of picks. Seismic processing remains outside the project scope.

Ubuntu and Debian are the first desktop targets. Each additional build needs a native launch, offline project reopening, file-dialog, graphics and install/uninstall test. Fedora and Windows packaging follow the shared payload. macOS signing and notarisation need separate verification. The portable HTML covers supported browser workflows. Local QGIS, ParaView and GsTL bridges require the relevant desktop components.
