class Enemy extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, frame) {
        super(scene, x, y, 'enemy', frame);

        scene.add.existing(this);
        scene.physics.add.existing(this);
    }

    update() {
        this.body.setGravityY(900);
        this.body.setCollideWorldBounds(false);
        this.body.setCircle(50, 0, 0);
        this.body.setImmovable(true);
        
    }

   

    
    
}