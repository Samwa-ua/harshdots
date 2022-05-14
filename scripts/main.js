const config = {
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  scene: [BootScene, StartScene, PreloadScene, GameScene],
  dots: [1, 2, 3, 4, 5, Math.floor(Math.random() * 5)],
  cols: 6,
  rows: 6,
};

const game = new Phaser.Game(config);
