var game = new Phaser.Game(1275, 650, Phaser.CANVAS);

var platforms, back;

var gameObject = {

  preload: function () {

    game.load.image('background', './assets/download.jpeg');
    game.load.spritesheet('tiles', './assets/brick.jpg');
    game.load.spritesheet('player', './assets/dude.png', 32, 48);
  },

  create: function () {

    game.physics.startSystem(Phaser.Physics.ARCADE);
    back = game.add.tileSprite(0, 0, 3000, 3000, 'background');
    back.tileScale.set(3.6, 5)

    platforms = game.add.group();
    platforms.enableBody = true;
    game.world.setBounds(0, 0, 1920, 650);


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
    player.fixedToCamera = true;
    // game.camera.follow(player);

  },

  update: function () {

    var hitTiles = game.physics.arcade.collide(player, platforms);

    var cursor = game.input.keyboard.createCursorKeys();

    player.body.velocity.x = 0;
    if(cursor.left.isDown) {
      player.body.velocity.x = -150;
      player.animations.play('left');
    back.tilePosition.x -= 3;
      
    }
    else if(cursor.right.isDown) {
      player.body.velocity.x = 150;
      player.animations.play('right');
    back.tilePosition.x += 3;
      
    }
    else {
      player.animations.stop();
      player.frame = 4;
    }

    if(cursor.up.isDown && player.body.touching.down && hitTiles) {
      player.body.velocity.y = -400;
    }
}
  }



game.state.add('gameObject', gameObject);
game.state.start('gameObject');