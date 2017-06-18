window.onload = function() {
  /*originally was going to use hexvalues, 
  kept the vars but switched too RGB()*/
  var hexval1;
  var hexval2;
  var hexval3;
  var cap;

  
  genButton();
};


function genButton() {

  //new values on every click 
  document.getElementById("gen").onclick = function() {
    function getRandomHex(min, max) {
      var min = 0;
      var max = 255;
      return Math.floor(Math.random() * (max - min) + min);
    }

    for (i = 0; i < 4; i++) {
      hexval1 = getRandomHex();
      hexval2 = getRandomHex();
      hexval3 = getRandomHex();
    }

    
    var finalVal = [hexval1, hexval2, hexval3];
    var valDark = [hexval1 - 85, hexval2 - 85, hexval3 - 85];
    var valLight = [hexval1 + 85, hexval2 + 85, hexval3 + 85];
    
    document.getElementById("output").style.backgroundColor = "rgb(" + finalVal + ")";
    document.getElementById("outputdark").style.backgroundColor = "rgb(" + valDark + ")";
    document.getElementById("outputlight").style.backgroundColor = "rgb(" + valLight + ")";
    
    document.getElementById("output").innerHTML = "rgb(" + finalVal + ")";
    document.getElementById("outputdark").innerHTML = "rgb(" + valDark + ")";
    document.getElementById("outputlight").innerHTML =  "rgb(" + valLight + ")";
    
    console.log(finalVal);
    console.log(valDark);
    console.log(valLight);
  };
}
