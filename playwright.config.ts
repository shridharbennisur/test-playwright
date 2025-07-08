import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 60000,
  retries: 1,
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
      name: 'Chrome',
      use: {
        channel: 'chrome',
      },
    },
    {
      name: 'Firefox',
      use: {
        browserName: 'firefox',
      },
    },
  ],
  reporter: [['list'], ['html', { outputFolder: 'test-results', open: 'never' }]],
});
