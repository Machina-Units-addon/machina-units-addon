var newBuild = {
    "/pa/units/addon/railgun/railgun.json": ["factory", 0, { row: 0, column: 0 }],
    "/pa/units/addon/tactical_launcher/tactical_launcher.json": ["combat", 0, { row: 0, column: 1 }],
    "/pa/units/addon/dreadnought/dreadnought.json": ["orbital_structure", 0, { row: 0, column: 0 }],
    "/pa/units/addon/orbital_battleship/orbital_battleship.json": ["orbital_structure", 0, { row: 0, column: 1 }],
    "/pa/units/addon/titan_sea/titan_sea.json": ["factory", 0, { row: 0, column: 1 }],
}
if (Build && Build.HotkeyModel && Build.HotkeyModel.SpecIdToGridMap) {
    _.extend(Build.HotkeyModel.SpecIdToGridMap, newBuild);
}

