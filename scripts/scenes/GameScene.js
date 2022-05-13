class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.createBackground();
    this.dots = new Dots(this);
    this.dots.createDot();
    this.dots.createDot();
    this.dots.createDot();
    this.dots.createDot();
    this.dots.createDot();
  }

  createBackground() {
    this.add.image(0, 0, "bg").setOrigin(0, 0);
  }
}
