class UiScene extends Phaser.Scene {
    constructor() {
        super('Ui');
    }

    init() {
        //grab a refference to the game scene
        this.gameScene = this.scene.get('Game');
    }

    create() {
        this.setupUiElements();
        this.setupEvents();
    }

    setupUiElements() {
        //create the score text obejct
        this.scoreText = this.add.text(35, 8, 'Coins: 0', { font: '16px', fill: 'white'});
        //create a coin icon
        this.coinIcon = this.add.image(15,15, 'items', 3);

    };

    setupEvents() {
        this.gameScene.events.on('updateScore', (score) => {
            this.scoreText.setText(`Coins: ${score}`);
        });
    }
}