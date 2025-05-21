import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 0,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    video: 'on',
    screenshot: 'on',
    baseURL: 'https://demoqa.com',
  },
reporter: [
  ['list'],
  ['html', { outputFolder: 'playwright-report', open: 'never' }]
],
});
