class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  preload() {
    this.load.image("bg", "assets/images/background.png");
    this.load.spritesheet("balls", "assets/sprites/balls.png", {
      frameWidth: 17,
      frameHeight: 17,
    });
  }

  create() {
    this.createBackground();
    this.createBalls();
  }

  createBalls() {
    const group = this.make.group({
      key: "balls",
      frame: [0, 1, 2, 3, 4],
      frameQuantity: 6,
      max: 36,
    });
    Phaser.Actions.GridAlign(group.getChildren(), {
      width: 6,
      height: 6,
      cellWidth: 64,
      cellHeight: 64,
      x: this.sys.game.config.width / 2.5,
      y: this.sys.game.config.height / 3,
    });
    this.add.image(100, 200, "balls", Phaser.Math.Between(0, 5));
  }

  createBackground() {
    this.add.image(0, 0, "bg").setOrigin(0, 0);
  }
}
