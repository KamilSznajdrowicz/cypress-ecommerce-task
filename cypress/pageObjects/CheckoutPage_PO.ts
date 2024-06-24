class CheckoutPage {
  checkCheckout(): void {
    cy.url().should("include", "checkout/cart");
  }

  getProductCheckoutTitle(): Cypress.Chainable<string> {
    cy.get(".cart-info tbody tr td a")
      .invoke("text")
      .then((text) => {
        cy.log("Product title in Checkout:", text);
      });
    return cy.get(".cart-info tbody tr td a").invoke("text");
  }
}

export default CheckoutPage;
