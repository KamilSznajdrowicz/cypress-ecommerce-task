import data from "../fixtures/product.json";
const { productName } = data;

class HomePage {
  visitHomepage(): void {
    cy.visit(`${Cypress.env("baseUrl")}`);
  }
  clickAccountWidget(): void {
    cy.get("#customer_menu_top").click();
    cy.url().should("include", "account/login");
    cy.get("h1").should("contain.text", "Account Login");
  }
  enterSearchKeywords(): void {
    cy.get("#filter_keyword").type(productName);
  }
  clickSearch(): void {
    cy.get(".button-in-search").click();
  }
}

export default HomePage;
