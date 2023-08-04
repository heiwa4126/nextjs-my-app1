# nextjs-my-app1

```bash
pnpx create-next-app@latest my-app1 --no-src-dir --import-alias '@/*' --ts --tailwind --eslint --app --use-pnpm
```

で始めた Next.js v13 + daisyui のプロジェクト。app route。これをセルフホスティングする練習。

## self-hosting してみる

仕様概要:

- basePathは `myapp1`
- 開発環境では http://locahost:3000 で動かす。
- Nginx の背後に置いて、 https://www.example.com/myapp1 で動かす

nginx, node, pnpm はあらかじめインストールしてあって、
nginxはTSLでつながることを確認済みだとする。

### `.env*` で設定している環境変数メモ

- `NEXTCONFIG_BASEPATH` - [next.config.jsの basePath](https://nextjs.org/docs/pages/api-reference/next-config-js/basePath)。デフォルトは``(空文字列)
- `NEXTCONFIG_OUTPUT` - [next.config.js の output](https://nextjs.org/docs/pages/api-reference/next-config-js/output)。デフォルトは undefined

- `NEXT_SELFURL` - セルフホストするホスト上でのURL。デフォルト `http://locahost:3000` 。自前でホストするAPIへのURLの一部になる。
- `NEXT_BASEURL` - 外からのURL。`NEXT_SELFURL`+`NEXT_BASEPATH`が外から見えるNext.jsのエントリポイント。デフォルトは`NEXT_SELFURL`

これらは next.config.jsのnextConfigのenv経由で lib/global.ts に渡る。`lib/global.ts`中のJSDoc参照

### nginxの設定 (部分)

```config
  location /myapp1 {
    proxy_pass http://localhost:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
  }
```

下2つはややオプションっぽいけど、

- [Host \- HTTP \| MDN](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/Host)
- [X-Forwarded-For - HTTP | MDN](https://developer.mozilla.org/ja/docs/Web/HTTP/Headers/X-Forwarded-For)
- [$proxy_add_x_forwarded_for](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#var_proxy_add_x_forwarded_for)
- [Using the Forwarded header | NGINX](https://www.nginx.com/resources/wiki/start/topics/examples/forwarded/)

### 配置

プロジェクトをcloneしたら
[.env.production.local.template](.env.production.local.template) を `.env.production.local`にコピーして編集する。

続けて以下のコマンドを実行

```bash
pnpm i
pnpm build
./create_servce_file.sh > var/myapp1.service
sudo ln -sf "$PWD/var/myapp1.service" /usr/lib/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable myapp1 --now
systemctl status myapp1
```

## Docker

- [Building Your Application: Deploying | Next.js](https://nextjs.org/docs/pages/building-your-application/deploying#docker-image)
- [next.js/examples/with-docker at canary · vercel/next.js](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
- [next.js/examples/with-docker/Dockerfile at canary · vercel/next.js](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)

Dockerfileは[これそのまま使えば](https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile)動くのでは?

↑そんなに甘くなかった。

まず standaloneモードにする([参照](https://nextjs.org/docs/app/api-reference/next-config-js/output#automatically-copying-traced-files))。
これは必須ではないけど、

- 利点 - サイズがうんと小さくなる。
- 欠点 - `npm run start` で動かなくなる。
- 欠点 - `.next/static/`と`public`をコピーする必要がある (Dockerfile中に記述あり)

で、

```bash
docker build . --tag myapp1:test1
docker run -d --rm -p 3000:3000 myapp1:test1
```

すれば、とりあえず動く。

`npm run build`の時にoutputモードをオプションで指定できるといいのだけど。環境変数つかえば出来るな。

⇒ 改造した。 NEXTCONFIG_OUTPUTで制御できるようにした([next.config.js](next.config.js)参照)。

あと

> Error: Cannot find module 'next/dist/compiled/jest-worker'

が出る。[Error: Cannot find module 'next/dist/compiled/jest-worker' - On Docker · Issue #48173 · vercel/next.js](https://github.com/vercel/next.js/issues/48173) に従って `pnpm i -D jest-worker` したけど、納得できない。

⇒ `-D(--save-dev)` じゃダメだった。`pnpm i jest-worker`

### output: standaloneでは `next start` が使えない

開発環境では普通に `build & start` が使えてほしいので
([next.config.js](next.config.js)を改造した。

### next/image はめんどくさい

- layoutがv13のやつだと非推奨(使えないわけではない)。[\`next/image\` changed in version 13 | Next.js](https://nextjs.org/docs/messages/next-image-upgrade-to-13)
- basePathを見てくれない。[参考](https://nextjs.org/docs/app/api-reference/next-config-js/basePath#images)
- あと `pnpm i sharp`

このへん参考にした。

- [Next.jsのv13でnext/imageにstyle propが追加されたので消えたプロパティの代替を考える - エキサイト TechBlog.](https://tech.excite.co.jp/entry/2022/12/23/001520)

そうはいっても全部.webpにしてくれるのはカッコいいので、我慢して使う。

## TODO

- 非Dockerでoutput: standaloneの時の手順(Dockerfileと同じことをやればいいはず)。
- Dockerで再起動時にコンテナが自動で上がる手順 (Next.jsと関係ない)
- docker-compose.yml も書く (Next.jsと関係ない)
- `NEXT_TELEMETRY_DISABLED=1` で[テレメトリー](https://nextjs.org/telemetry)を無効にするやつ。standaloneだとbuild時と実行時に要るような気がする。.envに書いとけばいい?
