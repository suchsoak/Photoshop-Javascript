 var px = app.preferences.rulerUnits = "Pixels";

if (px == false){
    alert("Had a problem, check out if is pixels!!")
} else{

 alert("Enabled Tabs.")

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

if (width == 6480 && height == 1068) {
    // CAROSSEL - INSTAGRAM
    doc.guides.add(Direction.VERTICAL, 1079.563);
    doc.guides.add(Direction.HORIZONTAL, 172.969);
    doc.guides.add(Direction.VERTICAL, 2160.219);
    doc.guides.add(Direction.VERTICAL, 3240.656);
    doc.guides.add(Direction.VERTICAL, 4319);
    doc.guides.add(Direction.VERTICAL, 5400);
  
    alert("Enabled Tabs.");
  } 
