class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    // this.load.atlas(
    //   "dots",
    //   "./assets/sprites/dots_32.png",
    //   "./assets/sprites/dots_32.json"
    // );
    // this.load.spritesheet("balls", "./assets/sprites/balls.png", {
    //   frameWidth: 32,
    //   frameHeight: 32,
    // });
    this.load.image("dot", "./assets/sprites/dot.png");
    this.load.image("dot1", "./assets/sprites/dot1.png");
    this.load.image("dot2", "./assets/sprites/dot2.png");
    this.load.image("dot3", "./assets/sprites/dot3.png");
    this.load.image("dot4", "./assets/sprites/dot4.png");
    this.load.image("dot5", "./assets/sprites/dot5.png");
  }
  create() {
    this.scene.start("Start");
  }
}
