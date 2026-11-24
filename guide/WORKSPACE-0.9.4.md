# GroundSurf Studio 0.9.4 — dockable workspace

The default layout follows a familiar desktop GIS pattern: Explorer above Properties & tools on the left; the main geological display fills the remaining area on the right.

- Use the arrow button in either panel header to dock that panel on the opposite side. Both panels may share one side or sit on opposite sides.
- Drag the vertical divider to resize a side. Drag the horizontal divider to change the height of stacked panels. Keyboard arrows also work when a divider is focused.
- Close panels with their × buttons and restore them with Explorer / Properties in the toolbar. Reset layout (↺ in Explorer) returns both panels to the default left-hand arrangement. Dock sides and sizes are stored locally where browser storage is available, not in geological project files.
- Boreholes are now compact, searchable list entries with interval counts. Select a well to inspect its original recorded intervals, collar, coordinates and source. This does not alter the logs. The correlation view remains available for interpretation.
- 3D geological object controls normally live in Properties & tools rather than above the viewport. Focus 3D remains available, as does the existing section-line workspace.
- The correlation workspace has persistent Go to section, Go to interpretation and Go to source records shortcuts, avoiding scrolling through very tall sections.
- Global navigation and view/import actions use two compact toolbar levels (the latter may wrap on a small window).

This is a presentation and navigation change only. It does not change geological interpretations, archive formats or uncertainty calculations. Docking is left/right rather than arbitrary floating windows.
