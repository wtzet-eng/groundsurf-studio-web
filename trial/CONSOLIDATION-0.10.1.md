# GroundSurf Studio 0.10.1 Preview 3

## Open the demo

Open the portable HTML directly, or deliberately install the Ubuntu 24.04 amd64 package from Downloads with:

    sudo apt install ./GroundSurf-Studio-0.10.1-trial.1-Ubuntu24.04-amd64.deb

Use **Projects → Open complete project** to open **Synthetic-project-continuity.zip**. It contains four synthetic borehole logs, two rebuildable surface definitions, a calibrated metric profile, and a separate TWT profile with a saved conversion. The original TWT picks remain alongside the derived elevations. The **completed** example adds a manually selected named horizon and its surface definition. Use these examples for testing only.

1. In **Explorer → Named horizons**, choose **New horizon** and enter a name, colour and interpreter. The interpreter defaults to the last name saved locally.
2. Choose the logged top or base and start picking. In **Boreholes** and the editable **Section line** view, click the interval. Shift+click takes the opposite boundary. In **3D boreholes**, use the borehole objects or the inspected interval. The focus layout offers a **Horizon explorer** toggle.
3. Review the contacts. A second pick in the same well requires deliberate replacement. Remove a selected contact or undo a draft edit as needed. Logged-unit differences and ordering changes or touches at shared contacts require explicit review. Save the horizon.
4. For a surface, pick at least four distinct boreholes. Set the maximum triangle edge length and acknowledge unreviewed interpolation edges. Try 5 m for the synthetic example. Generate the surface definition, then use **Rebuild saved horizons** in 3D.
5. Use **Save complete project**. A reopened project restores named horizons, exact original contacts, surface definitions and the time–depth objects. Choosing a named horizon displays its contacts again.

## Scientific scope

A contact is the original borehole ID, interval and top/base boundary bound to the original CSV SHA-256. Depth, unit and elevation come from that source. Colour styles the selected contact markers. Ordering review checks common boreholes and cannot establish ordering between boreholes. Metric geometry is modelled separately using the existing bounded XY triangulation and holds the source control elevations fixed. Generation records the selected named horizon identity and revision and explicitly creates the supporting tie links. Subsequent contact edits produce a new horizon revision and retain earlier surface definitions as labelled snapshots. Full dependency tracking and separate historical result states are subsequent work.

A note may be omitted. The archived named horizon keeps a blank note, and generated ties explicitly record that no site-specific explanation was supplied. Quick and detailed borehole ties retain mismatch confirmations. Existing archives load with an empty named-horizon list. Earlier application versions may omit this optional record when resaving, so keep named-horizon projects in Preview 3 or newer. Saved figures belong to synthetic inputs.

## Consolidation and handover

The baseline was integration commit d7631c0. It already includes the stack of verified scientific previews and automatic contact-table population. PR #47 supplied the contact-review preference and optional-note changes. Only its functional changes were taken forward. At consolidation the baseline was 167 commits ahead of main across 273 files. Treat that baseline as one development line for later integration review. Review the combined diff and migration risk before any main merge.

The interpreter preference is stored per local browser or desktop profile. Browsers may isolate offline file storage by path. A historical author is kept on the source record. Modelling and datum decisions still require deliberate review. Comparison panes remain inspection views. The new demo covers evidence, named interpretation, bounded surfaces and saved time–depth objects. A linked volume, numerical grid, simulated property and uncertainty result in the same archive are deferred.

Preview 4 should begin with one persistent numerical-grid definition linked to a source surface or volume revision. Validate restoration, incompatibility and external reference integrity using the existing demo before adding ensembles or restructuring the archive.
