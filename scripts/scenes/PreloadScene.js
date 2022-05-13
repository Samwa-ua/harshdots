class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.atlas(
      "dots",
      "./assets/sprites/dots_32.png",
      "./assets/sprites/dots_32.json"
    );
  }
  create() {
    this.scene.start("Start");
  }
}
