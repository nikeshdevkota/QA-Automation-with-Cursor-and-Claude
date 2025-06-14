const { defineConfig } = require('cypress');
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
      define: {
        global: 'window',
      },
    })
  );
  return config;
}

module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
    baseUrl: 'https://www.saucedemo.com',
    specPattern: 'cypress/e2e/**/*.feature',
    supportFile: 'cypress/support/e2e.js',
    video: false,
    screenshotOnRunFailure: true,
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 30000,
    chromeWebSecurity: false,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos'
  },
}); 