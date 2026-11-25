# Horizon geometry uncertainty · 0.10.0 preview

1. Open `Synthetic-horizon-geometry.zip` from **Projects → Open complete project**.
2. In the 3D borehole workspace, select **Rebuild saved horizons**.
3. In **Explorer → Section images → Integrated interpretation**, select the synthetic pick and **Synthetic target** under **Compare against rebuilt horizon**.
4. Review the metric pick and open **Horizon geometry uncertainty**. Optionally select **Synthetic ceiling** as the fixed horizon above. Use a prior elevation SD of 10 m to see more rejected draws.
5. Run the preview and inspect the centre elevations, percentiles and residuals. Download the results with the mesh, complete pick provenance, assumptions and accepted realisations.

On Linux, open the portable HTML in Chromium or Firefox directly from your file manager. It works offline. The Ubuntu amd64 preview uses Ubuntu 24.04 runtime dependencies. To install it deliberately, run `sudo apt install ./groundsurf-studio_0.10.0~preview1_amd64.deb` from the folder containing the package, then launch GroundSurf Studio from the application menu.

## Conditioning method

The background is the original planar interpolation inside each retained
triangle. The preview splits each triangle into three by adding a centre
vertex. A displacement at the centre varies linearly to zero on the original
edges, with weight `w = 3 × min(barycentric coordinates)`. Borehole elevations,
edges, omitted triangles and the footprint stay fixed. With a strictly
monotonic pick in chainage, the preview uses the point with greatest interior
weight per triangle. This avoids giving a densely digitised line extra weight
merely because it contains more vertices. Point position, baseline residual
and influence are included in the results. An exact hard-contact conflict above
the supplied tolerance stops the run.

For each triangle, centre displacement has independent Gaussian prior variance
\(s^2\). The pick residual \(r\) is modelled as the centre displacement multiplied
by \(w\), plus independent pick error with variance \(u^2\). The conditional centre
displacement has mean \(s^2 w r / (u^2 + s^2 w^2)\) and variance
\(s^2 u^2 / (u^2 + s^2 w^2)\). Lower pick SD yields stronger conditioning.
At a synthetic centre with 10 m baseline, 14 m pick and both SDs equal to 2 m,
the posterior has mean 12 m and SD √2 m. A triangle without pick support
retains its prior.

Fixed upper and lower horizons must use the same XY controls and triangle
topology from the same original borehole source. Comparing the corners and
centre is sufficient to check positive thickness everywhere in a split
triangle because the differences within each subtriangle are linear. A draw
with any crossing or touch is rejected as a whole. The reported rejection
fraction concerns this filter. Percentiles describe the accepted draws and
can shift considerably when rejection is common. The exported triangle indices
identify corner anchors. Centre coordinates and each draw's centre elevations
are in the same triangle order. No interpolation is defined outside that mesh.

## Scope

This preview covers one reviewed metric pick and one stochastic horizon on an
existing triangulated mesh. Source observations and deterministic horizon
proposals are preserved in the existing project format. Ensemble results are
downloaded separately and can be regenerated using the same settings and seed.
They are not included in project ZIPs. Independent triangle interiors and
fixed edges are strong modelling assumptions, and the entered SDs require
geological judgement. Pointwise percentiles provide a visual summary of the
accepted ensemble and should not be treated as a joint probability envelope.
Joint multi-horizon simulation, spatial covariance across triangles, supported
pinch-outs and erosional truncations, faults, structural scenario comparisons,
and thickness and occurrence grids remain later 0.10.0 work. Curved section
navigation and time-domain interpretation are outside this conditioning route.
