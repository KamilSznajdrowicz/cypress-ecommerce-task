import "../support/commands";

class CategoryPage {
  checkResultsWithoutFilters(): void {
    cy.get(".col-md-3.col-sm-6.col-xs-12").then((elements) => {
      // Check if there are 6 items
      expect(elements.length).to.eq(6);
      // cy.wrap(elements).eq(0).click(); // click first element
    });
  }

  clickActiveProductFromResults(): void {
    cy.get(".productcart").eq(0).click();
  }
  selectCategories(): void {
    cy.get("#category_id").select("0,36");
    cy.get("#category_id option:selected").should("contain", "Makeup");
  }
  clickSearch(): void {
    cy.get("#search_button").click();
  }
  checkSearchResults(): void {
    cy.checkSearchKeyword("eye");
  }
  checkResultsWithFilters(): void {
    cy.get(".col-md-3.col-sm-6.col-xs-12").then((elements) => {
      expect(elements.length).to.eq(3);
    });
  }

  selectPriceSorting(): void {
    cy.get("#sort").select("p.price-ASC");
  }

  checkPriceSorting(): void {
    cy.checkPriceSorting();
  }
}

export default CategoryPage;
