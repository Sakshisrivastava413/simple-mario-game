var game = new Phaser.Game(1275, 650, Phaser.CANVAS);

var gameObject = {

  preload: function () {

    game.load.image('background', './assets/download.jpeg');
    game.load.spritesheet('tiles', './assets/tiles.png')
  },

  create: function () {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    var back = game.add.sprite(0, 0, 'background');
    back.width = 1275
    back.height = 650
  },

  update: function () {

  }

}

game.state.add('gameObject', gameObject);
game.state.start('gameObject');