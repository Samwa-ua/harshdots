class Dot extends Phaser.GameObjects.Sprite {
  constructor(scene, value) {
    super(scene, 0, 0, "dot");
    this.scene = scene;
    this.value = value;
    this.scene.add.existing(this);
    // this.setInteractive();
    // this.opened = false;
    // this.flip();
  }
}
