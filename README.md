# nextjs-my-app1

```bash
pnpx create-next-app@latest my-app1 --no-src-dir --import-alias '@/*' --ts --tailwind --eslint --app --use-pnpm
```

で始めた nextjs + daisyui のプロジェクト。 app route。

## self-hosting してみる

- basePathは `myapp1`
- http://locahost:3000 で動かす (つまり http://locahost:3000/myapp1 になる)
- Nginx の背後に置く

`.env*` で設定している環境変数メモ

- `NEXT_BASEPATH` - next.config.jsの basePathに渡る。デフォルトは``(空文字列)
- `NEXT_SELFURL` - セルフホストするホスト上でのURL。デフォルト`http://locahost:3000/` 。自前でホストするAPIへのURLの一部になる。
- `NEXT_BASEURL` - 外からのURL。`NEXT_SELFURL`+`NEXT_BASEPATH`が外から見えるNext.jsのエントリポイント。デフォルトは`NEXT_SELFURL`

これらは next.config.jsのnextConfigのenv経由で lib/global.ts に渡る。`lib/global.ts`中のJSDoc参照
