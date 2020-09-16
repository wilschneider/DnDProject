var selectAdv = document.getElementById('adv');
var selectDie = document.getElementById('dieSides');

var dice = {
    sides: 20,
    roll: function () {
      if(selectAdv.value == "Normal") {
        var randomNumber = Math.floor(Math.random() * this.sides) + 1;
        return randomNumber;
      }
      else if(selectAdv.value == "Advantage") {
        var randomNumberOne = Math.floor(Math.random() * this.sides) + 1;
        var randomNumberTwo = Math.floor(Math.random() * this.sides) + 1;
            if(randomNumberOne > randomNumberTwo) {
                return randomNumberOne;
            }
            else {
                return randomNumberTwo;
            }
        
      }
      else if(selectAdv.value == "Disadvantage") {
        var randomNumberOne = Math.floor(Math.random() * this.sides) + 1;
        var randomNumberTwo = Math.floor(Math.random() * this.sides) + 1;
            if(randomNumberOne < randomNumberTwo) {
                return randomNumberOne;
            }
            else {
                return randomNumberTwo;
            }
        
      }
    }
  }
  
  
  
  //Prints dice roll to the page
  
  function printNumber(number) {
    var placeholder = document.getElementById('placeholder');
    placeholder.innerHTML = number;
    
  }
  
  var button = document.getElementById('button');
  
  button.onclick = function() {
    var result = dice.roll();
    printNumber(result);
    console.log(dice.sides);
  };
  
  
