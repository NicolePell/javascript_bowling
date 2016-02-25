var assert = require('assert'),
TenPinBowlingGame = require("../lib/bowling");

describe('TenPinBowlingGame', function() {
  it('should score zero for a game of gutter balls', function() {
    var game = new TenPinBowlingGame();
    assert.equal(game.getScore(),0);
  });

  it('should score twenty for a game of ones', function() {
    var game = new TenPinBowlingGame()
    for(var i = 0; i < 20; i++) {
      game.roll(1);
    }
    assert.equal(game.getScore(),20);
  });

  it('should score bonus for next roll after rolling spare', function() {
    var game = new TenPinBowlingGame();
    game.roll(5);
    game.roll(5);
    game.roll(3);
    for(var i = 0; i < 17; i++) {
      game.roll(0);
    }
    assert.equal(game.getScore(), 16);
  });
});
