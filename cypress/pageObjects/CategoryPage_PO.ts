import "../support/commands";

class CategoryPage {
  checkResultsEyeWithoutFilters() {
    cy.get(".col-md-3.col-sm-6.col-xs-12").then((elements) => {
      // Sprawdź, czy znaleziono dokładnie 6 elementów
      expect(elements.length).to.eq(6);

      // Przykładowa akcja na pierwszym znalezionym elemencie
      //   cy.wrap(elements).eq(0).click(); // Kliknięcie pierwszego elementu
      //   // Tutaj można dodać więcej działań na znalezionych elementach
    });
  }
  selectCategories() {
    cy.get("#category_id").select("0,36");
    cy.get("#category_id option:selected").should("contain", "Makeup");
  }
  clickSearch() {
    cy.get("#search_button").click();
  }
  checkSearchResults() {
    cy.checkSearchKeyword("eye");
  }
  checkResultsEyeWithFilters() {
    cy.get(".col-md-3.col-sm-6.col-xs-12").then((elements) => {
      expect(elements.length).to.eq(3);
    });
  }

  selectPriceSorting() {
    cy.get("#sort").select("p.price-ASC");
  }

  checkPriceSorting() {
    cy.checkPriceSorting(".col-md-3.col-sm-6.col-xs-12");
  }
}

export default CategoryPage;
