var game = new Phaser.Game(1275, 650, Phaser.CANVAS);

var gameObject = {

  preload: function () {

  },

  create: function () {

  },

  update: function () {

  }

}

game.state.add('gameObject', gameObject);
game.state.start('gameObject');