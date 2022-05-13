class Dot extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture, frame);
    this.init();
  }
  static generate(scene) {
    const x = Phaser.Math.Between(200, config.width - 200);
    const y = config.height - 800;
    const id = Phaser.Math.Between(1, 5);
    return new Dot(scene, x, y, "dots", `sphere${id}`);
  }

  init() {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.velocity = 250;
  }

  move() {
    this.body.setVelocityY(this.velocity);
  }
}
