import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
        //puglin
      },  
    baseUrl: 'http://localhost:4200',
    excludeSpecPattern: ['**/1-getting-started', '**/2-advanced-examples'],
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    viewportWidth: 1500,
    viewportHeight: 1080
  }
})