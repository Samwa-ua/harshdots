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
    this.initDotsPosition();
    this.initDots();
    this.showDots();
  }

  initDots() {
    let positions = Phaser.Utils.Array.Shuffle(this.positions);
    this.dots.forEach((dot) => {
      dot.init(positions.pop());
    });
  }
  showDots() {
    this.dots.forEach((dot) => {
      dot.depth = dot.position.delay;
      dot.move({
        x: dot.position.x,
        y: dot.position.y,
        delay: dot.position.delay,
      });
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
  initDotsPosition() {
    let positions = [];
    let dotTexture = this.textures.get("dot").getSourceImage();
    let dotWidth = dotTexture.width + 40;
    let dotHeigth = dotTexture.height + 40;
    let offsetX =
      (this.sys.game.config.width - dotWidth * config.cols) / 2 + dotWidth / 2;
    let offsetY =
      (this.sys.game.config.height - dotHeigth * config.rows) / 2 +
      dotHeigth / 2;

    let id = 0;
    for (let row = 0; row < config.rows; row++) {
      for (let col = 0; col < config.cols; col++) {
        ++id;
        positions.push({
          delay: id * 10,
          x: offsetX + col * dotWidth,
          y: offsetY + row * dotHeigth,
        });
      }
    }
    this.positions = positions;
  }

  onDotClicked(pointer, dot) {
    console.log(this, "dot clicked");
  }

  createBackground() {
    this.add.image(0, 0, "bg").setOrigin(0);
  }
}
