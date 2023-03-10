module.exports = {
  branches: ["main"],
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [{ type: "mfeat", release: "major" }],
      },
    ],
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
    [
      "@semantic-release/git",
      {
        message: "chore(release): ${nextRelease.version} [skip ci]",
      },
    ],
  ],
  // publishのdisabledするために下記の設定が必要
  publish: "@semantic-release/npm",
  npmPublish: false,
};
