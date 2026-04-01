import { defineConfig } from '@playwright/test';
module.export = defineConfig({
  use:
  {
    browserName: "chromium",
    headless: false,
    screenshot: "on",
    video: "on",
    trace: "on"

  },
});

