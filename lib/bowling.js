var TenPinBowlingGame = function() {
  this.score = 0;
  this.rolls = [];
};

TenPinBowlingGame.prototype.getScore = function() {
  for(var i = 0; i < this.rolls.length; i++) {
    if((this.rolls[i -1] + this.rolls[i-2]) === 10) {
      this.score += this.rolls[i] * 2;
    }
    else {
      this.score += this.rolls[i];
    }
  }
  return this.score;
};

TenPinBowlingGame.prototype.roll = function(huw) {
  this.rolls.push(huw);
};

module.exports = TenPinBowlingGame;
