class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.image("bg", "assets/images/background.png");
  }

  create() {
    this.createBackground();
  }

  createBackground() {
    this.add.image(0, 0, "bg").setOrigin(0, 0);
  }
}
