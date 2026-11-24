# Variogram analysis in GroundSurf Studio 0.9.5

Open **Properties & tools → Variogram analysis** in either edition. Load a GSLIB point set with X, Y, Z and at least one measured numerical property. Select the property and its units. Confirm that all points belong to one compatible metre-based frame with east, north and elevation axes. The input file carries no CRS or datum declaration. Subset observations to a defensible geological domain and comparable measurement support before analysis.

Choose **All directions** for a 3D omnidirectional estimate. Horizontal uses a horizontal axis at the chosen azimuth. Vertical uses the elevation axis. Custom also accepts dip, positive down. Azimuth runs clockwise from north. Both senses of an axis are included. Tolerance specifies the maximum angle to the axis. Half-bandwidth is the maximum perpendicular distance of the separation vector from that axis.

Calculate to pool distinct observation pairs into distance intervals (0,w], (w,2w] and so forth. Each point shows the mean 3D distance and half the mean squared property difference in its bin. Click a point or open the lag table for counts. Hollow symbols mark fewer than five pairs, a display heuristic. Clustered observations can still yield poorly supported estimates at larger counts. Missing sentinel −99999 is excluded from all four selected columns. Identical XYZ/value records count once. Conflicting colocated readings require an explicit choice upstream. The analysis accepts up to 2,000 informed locations.

The manual spherical curve has zero nugget. Its partial and total sill coincide. Adjust range and property-unit-squared sill visually. There is no automatic fitting, detrending or correction for unequal sampling support. Exponential, Gaussian, nonzero nugget and nested structures require a different native worker contract.

## Directional range model

The ellipsoid displays relative ranges. Rotate the view to inspect its horizontal major axis, orthogonal minor axis and vertical axis. The major axis is horizontal. The minor/major and vertical/major ratios lie in (0,1]. A dipping experimental direction is supported, while the native model supports horizontal rotation only. The analytical window is exploratory and remains in memory while mounted.

In **Native geostatistics · GsTL**, enable **Geometric anisotropy** and explicitly enter the chosen bearing, ratios and major range. After selecting the physical grid unit and fault side, Studio transforms both conditioning locations and target centres into the same metric. For bearing θ, the coordinates are (x sinθ + y cosθ, (x cosθ − y sinθ)/minorRatio, z/verticalRatio). The spherical worker and support cutoff both use Euclidean distances in that frame. Grid geometry and original measured coordinates stay in the source frame. Kriging uses normalized unit-sill variance. Simulation uses normal-score or indicator space as described in the native guide. A chart sill entered in physical units does not calibrate those outputs.

Realisation archives include directional settings and original-coordinate conditioning rows. Earlier runs default to isotropic distance. The analytical chart is transient. Keep original input files.

The private preview uses the existing separately installed, hash-checked SGeMS Workbench 0.4.5 workers. No new native binary is redistributed. Keep the upstream GsTL licence and Stanford contributor notices with any separately distributed worker. See [native setup](NATIVE-GEOSTATISTICS-0.9.1.md) for algorithm and platform limits.
