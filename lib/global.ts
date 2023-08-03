import { basePath } from '@/next.config';

const rawSelfUrl = process.env.NEXT_SELFURL ?? 'http://localhost:3000';

/** 環境変数 `NEXT_SELFURL`+`NEXTCONFIG_BASEPATH` NEXT_SELFURLのデフォルト値は http://localhost:3000 。
セルフホストしているAPIに対してreact server componentからアクセスするのに使う。
 */
export const selfUrl = rawSelfUrl + basePath;

/** 環境変数 `NEXT_BASEURL`+`NEXTCONFIG_BASEPATH` NEXT_BASEURLのデフォルト値は NEXT_SELFURL 。
セルフホストしているAPIに対してreact client componentからアクセスするのに使う。
 */
export const baseUrl = (process.env.NEXT_BASEURL ?? rawSelfUrl) + basePath;
