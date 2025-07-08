import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 0,
  use: {
    trace: 'on',
    video: 'on',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'Safari',
      use: {
        browserName: 'webkit',
      },
    },
    {
      name: 'Edge',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Edge/114.0.1823.67',
      },
    },
    {
      name: 'Chrome',
      use: {
        browserName: 'chromium',
        viewport: { width: 1280, height: 720 },
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/114.0.5735.134',
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
      },
    },
    {
      name: 'Pixel7',
      use: {
        ...devices['Pixel 7'],
      },
    },
  ],
  reporter: [['list'], ['html', { outputFolder: 'test-results', open: 'never' }]],
});
