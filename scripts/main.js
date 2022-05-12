const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  rows: 6,
  cols: 6,
  scene: new GameScene(),
};

const game = new Phaser.Game(config);
