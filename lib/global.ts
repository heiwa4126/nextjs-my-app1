export const basePath = process.env.basePath;

/** 環境変数 `NEXT_SELFURL`+`NEXTCONFIG_BASEPATH` NEXT_SELFURLのデフォルト値は http://localhost:3000 。
セルフホストしているAPIに対してreact server componentからアクセスするのに使う。
 */
export const selfUrl = process.env.selfUrl;

/** 環境変数 `NEXT_BASEURL`+`NEXTCONFIG_BASEPATH` NEXT_BASEURLのデフォルト値は NEXT_SELFURL 。
セルフホストしているAPIに対してreact client component からアクセスするのに使う。
ただ、swrなどではスキーマ://ホスト:ポート部分は省略できるので、明示して使うことは少なそう。
 */
export const baseUrl = process.env.baseUrl;
