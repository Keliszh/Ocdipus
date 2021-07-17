var cursors;
class Play extends Phaser.Scene {
    constructor() {
        super('PlayScene')
    }

    create() {
        

        this.createcharacter();
        //this.createground();//for test
        this.createenemy();
        
        this.createInput();
        this.createCameras();

        this.map = this.add.tilemap('map');
        var tile = this.map.addTilesetImage('tiles', 'tiles');
        this.layer = this.map.createLayer('1', tile, 0 ,150);

        this.createCollider();
        
       
        //this.layer.setCollisionByProperty({ collides: true });
        
    }

    //set key
    createInput() {
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        keySHIFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        keyZ = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Z);
    }

    createCameras() {
        this.cameras.main.startFollow(this.character);
    }

    createcharacter() {
        this.character = new Character(this, 570, 300, 0).setOrigin(0,0);
    }
    // for test
    createground() {
        this.ground = this.physics.add.sprite(100, 500, 'ground')
        .setImmovable(true)
        .setOrigin(0,0);
    }

    createenemy() {
        this.enemy = new Enemy(this, 770, 300, 0).setOrigin(0,0);
    }
    
    createCollider() {
        //for test
        //this.physics.add.collider(this.character, this.ground);
        this.physics.add.collider(this.enemy, this.ground);
        this.physics.add.collider(this.character, this.enemy);
        this.physics.add.collider(this.character, this.layer);
        this.physics.add.collider(this.character, this.layer);
        this.layer.setCollisionBetween(30,120);
    }

    update() {
        this.character.update();
        this.enemy.update();
    }
}