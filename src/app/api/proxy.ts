import { createProxyMiddleware } from 'http-proxy-middleware';

export default createProxyMiddleware({
  target: 'http://127.0.0.1:3333', // URL ของเซิร์ฟเวอร์ AdonisJS
  changeOrigin: true,
  pathRewrite: {
    '^/api/proxy': '', // ลบ `/api/proxy` ออกจาก path
  },
});
