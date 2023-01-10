# semantic-release-example

## やったこと/やれること

- `main` ブランチに入ったら勝手に最新のバージョンの tag うってくれる
  - あえてリリースはしないようにしてみた
  - バージョンアップは `semantic version` のフォーマットから読み取ってどのバージョンアップか(major/minor/patch)を勝手に判断してくれる
  - その際に package.json の `version` も書き換えてくれる
- PR 作成のタイミングで commit のフォーマットが適切かどうか CI で検知するようにした
- 独自の commit フォーマットを用意したい場合は `.releaserc.js` と `commitlint.config.js` をそれぞれ修正する

## 参考

https://github.com/semantic-release/semantic-release/blob/master/docs/support/FAQ.md

https://github.com/marketplace/actions/semantic-pull-request
