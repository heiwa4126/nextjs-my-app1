# nextjs-my-app1

```bash
pnpx create-next-app@latest my-app1 --no-src-dir --import-alias '@/*' --ts --tailwind --eslint --app --use-pnpm
```

で始めた nextjs + daisyui のプロジェクト。 app route。

## self-hosting してみる

仕様概要:

- basePathは `myapp1`
- 開発環境では http://locahost:3000 で動かす。
- Nginx の背後に置いて、 https://www.example.com/myapp1 で動かす

nginx, node, pnpm はあらかじめインストールしてあって、
nginxはTSLでつながることを確認済みだとする。

### `.env*` で設定している環境変数メモ

- `NEXT_BASEPATH` - next.config.jsの basePathに渡る。デフォルトは``(空文字列)
- `NEXT_SELFURL` - セルフホストするホスト上でのURL。デフォルト`http://locahost:3000` 。自前でホストするAPIへのURLの一部になる。
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
