// Phaser Game Configuration
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

// Game variables
let player;
let cursors;

// Start game
let game = new Phaser.Game(config);

// Preload assets
function preload() {
    this.load.image('car', 'assets/car.png');  // Provide the path to your car image asset
    this.load.image('track', 'assets/track.png');  // Provide the path to your track image asset
}

// Create game objects
function create() {
    // Add track
    this.add.image(400, 300, 'track');

    // Add player car
    player = this.physics.add.image(400, 300, 'car');
    player.setCollideWorldBounds(true);

    // Input
    cursors = this.input.keyboard.createCursorKeys();
}

// Game loop
function update() {
    // Player input
    if (cursors.left.isDown) {
        player.setAngularVelocity(-300);
    } else if (cursors.right.isDown) {
        player.setAngularVelocity(300);
    } else {
        player.setAngularVelocity(0);
    }

    if (cursors.up.isDown) {
        this.physics.velocityFromRotation(player.rotation, 200, player.body.velocity);
    } else {
        player.setAcceleration(0);
    }
}
