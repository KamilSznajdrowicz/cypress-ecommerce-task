import data from "../fixtures/product.json";
const { productName } = data;

class HomePage {
  visitHomepage() {
    cy.visit(`${Cypress.env("baseUrl")}`);
  }
  clickAccountWidget() {
    cy.get("#customer_menu_top").click();
    cy.url().should("include", "account/login");
    cy.get("h1").should("contain.text", "Account Login");
  }
  enterSearchKeywords() {
    cy.get("#filter_keyword").type(productName);
  }
  clickSearch() {
    cy.get(".button-in-search").click();
  }
}

export default HomePage;
