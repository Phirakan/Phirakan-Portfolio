import { NextRequest, NextResponse } from 'next/server';
import { createProxyMiddleware } from 'http-proxy-middleware';

const apiProxy = createProxyMiddleware({
  target: 'http://127.0.0.1:3333',
  changeOrigin: true,
  pathRewrite: { '^/api/proxy': '' }, // ลบ `/api/proxy` ออกจาก path
});

export async function middleware(req: NextRequest) {
  const response = await new Promise((resolve, reject) => {
    apiProxy(req, NextResponse, (result) => {
      if (result instanceof Error) {
        reject(result);
      } else {
        resolve(result);
      }
    });
  });

  return response;
}
