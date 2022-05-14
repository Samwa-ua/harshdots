class StartScene extends Phaser.Scene {
  constructor() {
    super("Start");
  }
  create() {
    this.createBackground();
    this.createText();
    this.setEvent();
  }

  createBackground() {
    this.add.sprite(0, 0, "bg").setOrigin(0);
  }

  createText() {
    this.add
      .text(config.width / 2, 300, "Welcome to Harsh Dots", {
        font: "60px Arial",
        fill: "#33f",
      })
      .setOrigin(0.5);
    this.add
      .text(config.width / 2, 500, "Tap to Start", {
        font: "40px Arial",
        fill: "#fff",
      })
      .setOrigin(0.5);
  }
  setEvent() {
    this.input.on("pointerdown", () => {
      this.scene.start("Game");
    });
  }
}
