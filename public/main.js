var game = new Phaser.Game(1275, 650, Phaser.CANVAS);

var platforms;

var gameObject = {

  preload: function () {

    game.load.image('background', './assets/download.jpeg');
    game.load.spritesheet('tiles', './assets/brick.jpg');
    game.load.spritesheet('player', './assets/dude.png', 32, 48);
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
    ledge = platforms.create(1000, game.world.height - 47, 'tiles');
    ledge.body.immovable = true;
    // ledge.scale.setTo(-0.9, -0.7);
    

    player = game.add.sprite(32, game.world.height - 250, 'player');
    player.scale.setTo(2, 2.5);
    game.physics.arcade.enable(player);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;
    player.animations.add('right', [5, 6, 7, 8], 10, true);
    player.animations.add('left', [0, 1, 2, 3], 10, true);
    player.frame = 4

  },

  update: function () {

    var hitTiles = game.physics.arcade.collide(player, platforms);

  }

}

game.state.add('gameObject', gameObject);
game.state.start('gameObject');