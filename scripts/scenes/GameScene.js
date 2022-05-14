class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.createBackground();
    this.createDots();
    this.start();
  }

  start() {
    this.initDots();
  }

  initDots() {
    let positions = this.getDotsPosition();

    this.dots.forEach((card) => {
      let position = positions.pop();
      card.setPosition(position.x, position.y);
    });
  }
  createDots() {
    this.dots = [];

    for (let value of config.dots) {
      for (let i = 0; i < 6; i++) {
        this.dots.push(new Dot(this, value));
      }
    }
    this.input.on("gameobjectdown", this.onDotClicked, this);
  }
  getDotsPosition() {
    let positions = [];
    let dotTexture = this.textures.get("dot").getSourceImage();
    let dotWidth = dotTexture.width + 40;
    let dotHeigth = dotTexture.height + 40;
    let offsetX =
      (this.sys.game.config.width - dotWidth * config.cols) / 2 + dotWidth / 2;
    let offsetY =
      (this.sys.game.config.height - dotHeigth * config.rows) / 2 +
      dotHeigth / 2;

    for (let row = 0; row < config.rows; row++) {
      for (let col = 0; col < config.cols; col++) {
        positions.push({
          x: offsetX + col * dotWidth,
          y: offsetY + row * dotHeigth,
        });
      }
    }
    return Phaser.Utils.Array.Shuffle(positions);
  }
  onDotClicked(pointer, dot) {
    console.log("dot clicked");
  }

  createBackground() {
    this.add.image(0, 0, "bg").setOrigin(0);
  }
}
