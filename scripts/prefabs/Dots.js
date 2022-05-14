class Dots extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super();
    this.scene = scene;
  }
  createEnemy() {
    let dot = Dot.generate(this.scene);
    this.add(dot);
    dot.move();
  }
}
