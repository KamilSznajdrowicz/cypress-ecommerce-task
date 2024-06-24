import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 12000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    video: false,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    retries: {
      runMode: 0,
      openMode: 0, // add retry test when fail
    },
    env: {
      baseUrl: "https://automationteststore.com",
    },
  },
});
