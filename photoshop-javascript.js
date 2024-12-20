function size(){

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
doc.guides.add(Direction.VERTICAL, 70.0);
doc.guides.add(Direction.VERTICAL, 204.281);
doc.guides.add(Direction.VERTICAL, 338.563);
doc.guides.add(Direction.VERTICAL, 472.844);
doc.guides.add(Direction.VERTICAL, 607.156);
doc.guides.add(Direction.VERTICAL, 741.438);
doc.guides.add(Direction.VERTICAL, 875.719);
doc.guides.add(Direction.VERTICAL, 1010.0);

doc.guides.add(Direction.HORIZONTAL, 0.0);
doc.guides.add(Direction.HORIZONTAL, 154.281);
doc.guides.add(Direction.HORIZONTAL, 308.563);
doc.guides.add(Direction.HORIZONTAL, 462.844);
doc.guides.add(Direction.HORIZONTAL, 617.156);
doc.guides.add(Direction.HORIZONTAL, 771.438);
doc.guides.add(Direction.HORIZONTAL, 925.719);
doc.guides.add(Direction.HORIZONTAL, 1080.0);
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

if (width == 2160 && height == 3840) {
    // STORY
    doc.guides.add(Direction.VERTICAL, 180);
    doc.guides.add(Direction.HORIZONTAL, 1020);
    doc.guides.add(Direction.HORIZONTAL, 2820);
    doc.guides.add(Direction.VERTICAL, 1980);
    doc.guides.add(Direction.VERTICAL, 540);

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
    doc.guides.add(Direction.HORIZONTAL, 650);
    doc.guides.add(Direction.HORIZONTAL, 1220);
    doc.guides.add(Direction.VERTICAL, 80);
    doc.guides.add(Direction.VERTICAL, 650);

    alert("Enabled Tabs.");
  }

if (width == 8000 && height == 2000) {
    // FEED
    doc.guides.add(Direction.VERTICAL, 2000);
    doc.guides.add(Direction.VERTICAL, 4000);
    doc.guides.add(Direction.VERTICAL, 6000);
    doc.guides.add(Direction.VERTICAL, 996.125);
    doc.guides.add(Direction.HORIZONTAL, 100);
    doc.guides.add(Direction.HORIZONTAL, 1900);
    doc.guides.add(Direction.VERTICAL, 80);

    alert("Enabled Tabs.");
  }

} 
size()

if(app.preferences.rulerUnits !== Units.PIXELS){
  alert("Had a problem, check the size!");
}

