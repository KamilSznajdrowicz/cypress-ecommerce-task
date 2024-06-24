/// <reference types="cypress" />

Cypress.Commands.add("checkSearchKeyword", (keyword: string) => {
  cy.get("a.prdocutname").each(($el) => {
    cy.wrap($el)
      .should("have.attr", "href")
      .and("include", `keyword=${keyword}`);
  });
});

Cypress.Commands.add("checkPriceSorting", () => {
  cy.get(".col-md-3.col-sm-6.col-xs-12").then(($items) => {
    const prices: number[] = [];
    $items.each((index, element) => {
      const priceText = Cypress.$(element).find(".oneprice").text().trim();
      const price = parseFloat(priceText.replace(/[^\d.-]/g, "")); // Remove non-numeric characters
      if (!isNaN(price)) {
        prices.push(price);
      }
    });

    // Check if prices array is not empty and sorted correctly
    if (prices.length > 0) {
      for (let i = 0; i < prices.length - 1; i++) {
        expect(prices[i]).to.be.at.most(prices[i + 1]);
      }
    } else {
      throw new Error("No valid prices found to compare.");
    }
  });
});
