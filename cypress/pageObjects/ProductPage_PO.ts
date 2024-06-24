import CheckoutPage from "./CheckoutPage_PO";

class ProductPage {
  clickAddToCart(): void {
    cy.contains("Add to Cart").click();
  }
  getProductTitle(): Cypress.Chainable<string> {
    cy.get(".bgnone")
      .invoke("text")
      .then((text) => {
        cy.log("Product title in PDP:", text);
      });
    return cy.get(".bgnone").invoke("text");
  }
}

export default ProductPage;
