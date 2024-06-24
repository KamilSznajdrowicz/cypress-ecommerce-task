import HomePage from "../../pageObjects/HomePage_PO";
import RegistrationPage from "../../pageObjects/RegistrationPage_PO";
/// <reference types="cypress" />

describe("Registration page testing", () => {
  const homePage = new HomePage();
  const registrationPage = new RegistrationPage();

  beforeEach(() => {
    homePage.visitHomepage(); // visit the homepage before each test.
    homePage.clickAccountWidget();
  });

  it("Create a new user account with unique data", () => {
    registrationPage.clickRegisterAccount();
    registrationPage.enterName();
    registrationPage.enterSurname();
    registrationPage.enterEmail();
    registrationPage.enterStreet();
    registrationPage.enterCity();
    registrationPage.selectRegion();
    registrationPage.enterPostCode();
    registrationPage.enterLogin();
    registrationPage.enterPassword();
    registrationPage.enterPasswordConfirm();
    registrationPage.checkToC();
    registrationPage.clickRegister();
    registrationPage.checkRegistrationTest();
  });

  it("Log in to a new user account", () => {
    registrationPage.enterLoginEmail();
    registrationPage.enterLoginPassword();
    registrationPage.clickLogIn();
    registrationPage.checkLoginTest();
  });
});
