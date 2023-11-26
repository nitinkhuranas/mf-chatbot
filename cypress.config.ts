import { defineConfig } from "cypress";
const { install, ensureBrowserFlags } = require('@neuralegion/cypress-har-generator');

export default defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    specPattern: 'integrationTests/tests/*.cy.ts',
    supportFile: 'integrationTests/support.ts',
    setupNodeEvents: (on, config) => {
      // require('cypress-mochawesome-reporter/plugin')(on);
      // on('before:browser:launch', (browser, launchOptions) => {
      //   ensureBrowserFlags(browser, launchOptions);
      //   return launchOptions;
      // });
      on('task', {
        ctrLogFiles(message) {
          console.log(message);

          return null;
        },
        ctrLogMessages(message) {
          console.log(message);

          return null;
        },
      });

      //HAR generator
      on('before:browser:launch', (browser, launchOptions) => {
        ensureBrowserFlags(browser, launchOptions);
        return launchOptions;
      });
      require('cypress-terminal-report/src/installLogsPrinter')(on);
      install(on);
    },
  }
});
