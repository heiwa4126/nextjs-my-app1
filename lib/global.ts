import { basePath } from '@/next.config';

const rawSelfUrl = process.env.NEXT_SELFURL ?? 'http://localhost:3000';
export const selfUrl = rawSelfUrl + basePath;
export const baseUrl = (process.env.NEXT_BASEURL ?? rawSelfUrl) + basePath;
