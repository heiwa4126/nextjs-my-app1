/** 環境変数 `NEXT_BASEPATH`。Next.jsのbasPath。デフォルトは空白 (next.config.js参照) */
export const NEXT_BASEPATH = process.env.basePath;

/** 環境変数 `NEXT_SELFURL`+`NEXT_BASEPATH` NEXT_SELFURLのデフォルト値は http://localhost:3000 (next.config.js参照)。
 元の環境変数から加工されていることに注意。セルフホストしているAPIに対してSSRからアクセスするのに使う。
*/
export const NEXT_SELFURL = process.env.selfUrl; // 環境変数 `NEXT_SELFURL`+`NEXT_BASEPATH`

/** 環境変数 `NEXT_SELFURL`+`NEXT_BASEPATH` NEXT_BASEURLのデフォルト値はNEXT_SELFURL (next.config.js参照)。
 元の環境変数から加工されていることに注意。セルフホストしているAPIに対してCSRからアクセスするのに使う。
*/
export const NEXT_BASEURL = process.env.baseUrl;
