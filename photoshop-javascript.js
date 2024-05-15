app.preferences.rulerUnits = Units.PIXELS;

if (Units.PIXELS == false){
    alert("Had a problem, check if it's pixels!!")
}

// var width = new UnitValue("1080 pixels")
// var height = new UnitValue("1080 pixels")

var doc = app.activeDocument;

var width = doc.width;
var height = doc.height;

if (width == 1080 && height == 1080) {
    // FEED
  doc.guides.add(Direction.HORIZONTAL, 76.531);
  doc.guides.add(Direction.HORIZONTAL, 1003.469);
  doc.guides.add(Direction.VERTICAL, 76.531);
  doc.guides.add(Direction.VERTICAL, 540.0);
  doc.guides.add(Direction.HORIZONTAL, 540.0);
  doc.guides.add(Direction.VERTICAL, 1003.469);

  alert("Enabled Tabs.");
}

if (width == 1080 && height == 1920) {
    // STORY
    doc.guides.add(Direction.VERTICAL, 540.0);
    doc.guides.add(Direction.HORIZONTAL, 188);
    doc.guides.add(Direction.HORIZONTAL, 1827);
    doc.guides.add(Direction.VERTICAL, 67);
    doc.guides.add(Direction.VERTICAL, 1046.5);

    alert("Enabled Tabs.");
  }

if (width == 1050 && height == 600) {
    // CARD
    doc.guides.add(Direction.VERTICAL, 33);
    doc.guides.add(Direction.HORIZONTAL, 23.5);
    doc.guides.add(Direction.HORIZONTAL, 577.5);
    doc.guides.add(Direction.VERTICAL, 1024);

    alert("Enabled Tabs.");
  }

if (width == 1300 && height == 1300) {
    // CARD
    doc.guides.add(Direction.VERTICAL, 1220);
    doc.guides.add(Direction.HORIZONTAL, 80);
    doc.guides.add(Direction.HORIZONTAL, 1220);
    doc.guides.add(Direction.VERTICAL, 80);

    alert("Enabled Tabs.");
  }
