import CategoryPage from "../../pageObjects/CategoryPage_PO";
import HomePage from "../../pageObjects/HomePage_PO";
/// <reference types="cypress" />

describe("Category page testing", () => {
  const homePage = new HomePage();
  const categoryPage = new CategoryPage();

  beforeEach(() => {
    homePage.visitHomepage();
  });
  it("Product Search and Filter testing", () => {
    homePage.enterSearchKeywords();
    homePage.clickSearch();
    categoryPage.checkResultsEyeWithoutFilters();
    categoryPage.selectCategories();
    categoryPage.clickSearch();
    categoryPage.checkSearchResults();
    categoryPage.checkResultsEyeWithFilters();
  });

  // Additional test to check if sorting works correctly.
  it("Product Search and sorting testing", () => {
    homePage.enterSearchKeywords();
    homePage.clickSearch();
    categoryPage.selectPriceSorting();
    categoryPage.checkPriceSorting();
  });
});
