var game = new Phaser.Game(1275, 650, Phaser.CANVAS);

var gameObject = {

  preload: function () {

    game.load.image('background', './assets/background.jpg');
    game.load.spritesheet('tiles', './assets/tiles.png')
  },

  create: function () {
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.add.sprite(0, 0, 'background');

  },

  update: function () {

  }

}

game.state.add('gameObject', gameObject);
game.state.start('gameObject');