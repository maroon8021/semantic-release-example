module.exports = {
  branches: ["main"],
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github",
    "@semantic-release/npm",
  ],
  // publishのdisabledするために下記の設定が必要
  publish: "@semantic-release/npm",
  npmPublish: false,
};
