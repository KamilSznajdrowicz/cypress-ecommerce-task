import { fakeData } from "../fixtures/fakedata";

class RegistrationPage {
  clickRegisterAccount(): void {
    cy.get("#accountFrm > fieldset > .btn").click();
  }
  enterName(): void {
    cy.get("#AccountFrm_firstname").type(fakeData.Name);
  }
  enterSurname(): void {
    cy.get("#AccountFrm_lastname").type(fakeData.Surname);
  }
  enterEmail(): void {
    cy.get("#AccountFrm_email").type(fakeData.Email);
  }
  enterStreet(): void {
    cy.get("#AccountFrm_address_1").type(fakeData.Street);
  }
  enterCity(): void {
    cy.get("#AccountFrm_city").type(fakeData.City);
  }
  selectRegion(): void {
    cy.get("#AccountFrm_zone_id").select("3516");
    cy.get("#AccountFrm_zone_id option:selected").should("have.text", "Angus");
  }
  enterPostCode(): void {
    cy.get("#AccountFrm_postcode").type(fakeData.PostCode);
  }
  enterLogin(): void {
    cy.get("#AccountFrm_loginname").type(fakeData.Login);
  }
  enterPassword(): void {
    cy.get("#AccountFrm_password").type(fakeData.Password);
  }
  enterPasswordConfirm(): void {
    cy.get("#AccountFrm_confirm").type(fakeData.Password);
  }
  checkToC(): void {
    cy.get("#AccountFrm_agree").check({ force: true }).should("be.checked");
  }
  clickRegister(): void {
    cy.get('button[title="Continue"]').click();
  }
  checkRegistrationTest(): void {
    cy.title().should("eq", "Your Account Has Been Created!");
    cy.url().should("include", "rt=account/success");
  }
  enterLoginEmail(): void {
    cy.get("#loginFrm_loginname").type(fakeData.Login);
  }
  enterLoginPassword(): void {
    cy.get("#loginFrm_password").type(fakeData.Password);
  }
  clickLogIn(): void {
    cy.get('button[type="submit"]').eq(1).click();
  }
  checkLoginTest(): void {
    cy.title().should("eq", "My Account");
    cy.url().should("include", "rt=account/account");
    cy.get(".maintext").should("contain.text", " My Account");
  }
}

export default RegistrationPage;
