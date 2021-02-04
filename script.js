$(function() {
  
  var juice = 0;
  var minersOwned = 0;
  var minersUpgrade =1;
  var ticks;

  if (localStorage.getItem('juice') !== null) {
    juice = parseFloat(localStorage.getItem('juice'));
    updateDisplay();
  }
  if (localStorage.getItem('minersOwned') !== null) {
    minersOwned = parseInt(localStorage.getItem('minersOwned'));
    updateDisplay();
  }
  if (localStorage.getItem('minersUpgrade') !== null) {
    minersUpgrade = parseFloat(localStorage.getItem('minersUpgrade'));
    updateDisplay();
  }
  
  
  ticks = window.setInterval(function() {
    var amt = minersOwned * (minersUpgrade);
    mathJuice("add", amt);
  }, 1000);

  function updateDisplay() {
    checkButtonsEnabled();
    console.log(juice)
    $("#juice-display").text(juice.toFixed(5));
    $("#owned-display").text(minersOwned);
    $("#rate-display").text(minersUpgrade.toFixed(5));
  }
  
  function checkButtonsEnabled(){
     if (juice < 1) {
            $("#btn-buy").attr("disabled", "disabled");
        } else {
            $("#btn-buy").removeAttr("disabled", "disabled");
        }    
     
     if (juice < 1 || minersOwned < 1) {
            $("#btn-upgrade").attr("disabled", "disabled");
        } else {
            $("#btn-upgrade").removeAttr("disabled", "disabled");
        }    
     }
  
  function mathJuice(operator, amount) {
    switch (operator) {
      case "add":
        juice += amount;
        localStorage.juice = juice;
        updateDisplay();
        break;
      case "sub":
        juice -= amount;
        localStorage.juice = juice;
        updateDisplay();
        break;
      default:
        alert("mathJuice() not passed correct operator!")
    }
  }

  $("#btn-click").click(function() {
    mathJuice("add",1);
    updateDisplay();
  });
  $("#btn-clear").click(function() {
      juice = 0;
      localStorage.juice = 0;
      minersOwned = 0;
      localStorage.minersOwned = 0;  
      minersUpgrade =1;
      localStorage.minersUpgrade =1;
      updateDisplay();
  });  
  $("#btn-buy").click(function() {
    if (juice >= 1) {
      mathJuice("sub", 1)
      minersOwned += 1;
      localStorage.minersOwned = minersOwned;
      updateDisplay();
    }
  });
  $("#btn-upgrade").click(function() {
    if (juice >= 1) {
      mathJuice("sub", 1)
      minersUpgrade += 1;
      localStorage.minersUpgrade = minersUpgrade;
      updateDisplay();
    }
  });

  
  

  function storageAvailable(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return false;
    }
  }

  if (storageAvailable('localStorage')) {
    console.log("local storage available!");
  } else {
    console.log("local storage not available!");
  }

});