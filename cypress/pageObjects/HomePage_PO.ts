class HomePage {
  visitHomepage() {
    cy.visit(`${Cypress.env("baseUrl")}`);
  }
  clickAccountWidget() {
    cy.get("#customer_menu_top").click();
    cy.url().should("include", "account/login");
    cy.get("h1").should("contain.text", "Account Login");
  }
}

export default HomePage;
