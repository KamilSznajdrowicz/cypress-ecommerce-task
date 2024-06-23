// load the global Cypress types
/// <reference types="cypress" />
// load the 3rd party command definition for cy.waitUntil()
/// <reference types="cypress-wait-until" />

// typically custom commands are added in this support folder
// so it makes sense to put their TypeScript definitions here
// from the JavaScript specs loads this file using
// the triple slash "reference" comment like this:
//
// /// <reference path="../support/index.d.ts" />

declare namespace Cypress {
  interface Chainable<Subject = any> {
    checkSearchKeyword(keyword: string): void;
    checkPriceSorting(selector: string): void;
  }
}
