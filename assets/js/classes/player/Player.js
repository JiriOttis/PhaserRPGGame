class Player extends Phaser.Physics.Arcade.Image {
    constructor(scene, x, y, key, frame) {
        super(scene, x, y, key, frame);
        this.scene = scene; //the scene this game object will be added to

        //enable physics
        this.scene.physics.world.enable(this);
        //set immovable
        this.setImmovable(true);
        //scale our player
        this.setScale(2);
        //add player to existing scene
        this.scene.add.existing(this);
    }
}
