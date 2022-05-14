class Dot extends Phaser.GameObjects.Sprite {
  constructor(scene, value) {
    super(scene, 0, 0, "dot");
    this.scene = scene;
    this.value = value;
    this.scene.add.existing(this);
    this.setInteractive();
    this.show();
  }
  show() {
    let texture = "dot" + this.value;
    this.setTexture(texture);
  }

  init(position) {
    this.position = position;
    this.setPosition(-this.width, -this.height);
  }
  move(params) {
    this.scene.tweens.add({
      targets: this,
      x: params.x,
      y: params.y,
      delay: params.delay,
      ease: "Linear",
      duration: 450,
      onComplete: () => {
        if (params.callback) {
          params.callback();
        }
      },
    });
  }
}
