class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.createBackground();
    this.createDots();
    this.start();
    this.graphics = this.add.graphics();
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
    // this.input.on("dragstart", this.onDrag, this);
    this.input.setDraggable(this.dots);

    this.input.on("drag", function (pointer, dot, dragX, dragY) {
      dot.x = dragX;
      dot.y = dragY;
    });
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
    if (dot.texture.key === "dot1") {
      this.graphics.lineStyle(8, 0x2f3b8c);
      this.graphics.moveTo(dot.x, dot.y);
      this.graphics.lineTo(dot.x + 64, dot.y);
      this.graphics.strokePath();
      console.log(dot, "dot clicked");
    } else if (dot.texture.key === "dot2") {
      this.graphics.lineStyle(8, 0x50bd15);
      this.graphics.moveTo(dot.x, dot.y);
      this.graphics.lineTo(dot.x, dot.y + 64);
      this.graphics.strokePath();
    } else if (dot.texture.key === "dot3") {
      this.graphics.lineStyle(8, 0x582a7f);
      this.graphics.moveTo(dot.x, dot.y);
      this.graphics.lineTo(dot.x, dot.y + 64);
      this.graphics.strokePath();
    } else if (dot.texture.key === "dot4") {
      this.graphics.lineStyle(8, 0xa30c0c);
      this.graphics.moveTo(dot.x, dot.y);
      this.graphics.lineTo(dot.x, dot.y + 64);
      this.graphics.strokePath();
    } else if (dot.texture.key === "dot5") {
      this.graphics.lineStyle(8, 0xb39f1e);
      this.graphics.moveTo(dot.x, dot.y);
      this.graphics.lineTo(dot.x, dot.y + 64);
      this.graphics.strokePath();
    }
  }

  createBackground() {
    this.add.image(0, 0, "bg").setOrigin(0);
  }
}
