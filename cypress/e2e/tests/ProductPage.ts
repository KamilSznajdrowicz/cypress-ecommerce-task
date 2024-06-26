import ProductPage from "../../pageObjects/ProductPage_PO";
import HomePage from "../../pageObjects/HomePage_PO";
import CategoryPage from "../../pageObjects/CategoryPage_PO";
import CheckoutPage from "../../pageObjects/CheckoutPage_PO";
/// <reference types="cypress" />

describe("Product page testing", () => {
  const homePage = new HomePage();
  const categoryPage = new CategoryPage();
  const productPage = new ProductPage();
  const checkoutPage = new CheckoutPage();

  beforeEach(() => {
    homePage.visitHomepage();
    homePage.enterSearchKeywords();
    homePage.clickSearch();
  });

  it("Adding Items to Cart", () => {
    categoryPage.clickActiveProductFromResults();
    // Get product title from PDP and add to cart
    productPage.getProductTitle().then((pdpTitle) => {
      productPage.clickAddToCart();
      // Check the checkout process
      checkoutPage.checkCheckout();
      // Get product title from the cart and compare with PDP title
      checkoutPage.getProductCheckoutTitle().then((cartTitle) => {
        expect(pdpTitle).to.equal(cartTitle);
      });
    });
  });
});
