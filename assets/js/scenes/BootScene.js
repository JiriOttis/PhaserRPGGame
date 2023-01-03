class BootScene extends Phaser.Scene {
    constructor() {
        super('Boot');
    }

    preload() {
        this.loadImages();
        this.loadSpriteSheets();
        this.loadAudio();
        this.loadTileMap();
    }

    loadImages() {
        this.load.image('button1', 'images/ui/blue_button01.png');
        this.load.image('button2', 'images/ui/blue_button02.png');
        //load the map tileset image
        this.load.image('background', 'level/background-extruded.png');
    }

    loadSpriteSheets() {
        this.load.spritesheet('items', 'images/items.png', {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('characters', 'images/characters.png', {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('monsters', 'images/monsters.png', {frameWidth: 32, frameHeight: 32});
    }

    loadAudio() {
        this.load.audio('goldSound', ['audio/Pickup.wav']);
        this.load.audio('enemyDeath', ['audio/EnemyDeath.wav']);
        this.load.audio('playerAttack', ['audio/PlayerAttack.wav']);
        this.load.audio('playerDamage', ['audio/PlayerDamage.wav']);
        this.load.audio('playerDeath', ['audio/PlayerDeath.wav']);

    }

    loadTileMap(){
        //map made with Tiled in JSON format
        this.load.tilemapTiledJSON('map', 'level/level.json')

    }

    create() {
        this.scene.start('Title');
    }
}