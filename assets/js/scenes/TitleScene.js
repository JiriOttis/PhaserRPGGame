class TitleScene extends Phaser.Scene {
    constructor() {
        super('Title');
    }

    create() {
        //create title text
        this.titleText = this.add.text(this.scale.width / 2, this.scale.height / 2, 'Phaser RPG Game', { fontSize: '64px', fill: 'white'})
        this.titleText.setOrigin(0.5);

        //create the play game button
        this.startGameButton = new UiButton(this, this.scale.width / 2, this.scale.height * 0.65, 'button1', 'button2', 'Start', this.startScene.bind(this, 'Game'));
    }

    startScene(targetScene) {
        this.scene.start(targetScene);
    }


}

