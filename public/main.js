var game = new Phaser.Game(1275, 650, Phaser.CANVAS);

var platforms;

var gameObject = {

  preload: function () {

    game.load.image('background', './assets/download.jpeg');
    game.load.spritesheet('tiles', './assets/brick.jpg')
  },

  create: function () {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    var back = game.add.sprite(0, 0, 'background');
    back.width = 1275;
    back.height = 650;

    platforms = game.add.group();
    platforms.enableBody = true;

    var ground = platforms.create(0, game.world.height - 47, 'tiles');
    ground.body.immovable = true;

    var ledge = platforms.create(520, 400, 'tiles');
        ledge.body.immovable = true;
        ledge = platforms.create(-150, 250, 'tiles');
        ledge.body.immovable = true;
        ledge= platforms.create(1000, game.world.height - 47, 'tiles');
        ledge.body.immovable = true;
        

  },

  update: function () {

  }

}

game.state.add('gameObject', gameObject);
game.state.start('gameObject');