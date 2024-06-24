import { fakeData } from "../fixtures/fakedata";

class RegistrationPage {
  clickRegisterAccount() {
    cy.get("#accountFrm > fieldset > .btn").click();
  }
  enterName() {
    cy.get("#AccountFrm_firstname").type(fakeData.Name);
  }
  enterSurname() {
    cy.get("#AccountFrm_lastname").type(fakeData.Surname);
  }
  enterEmail() {
    cy.get("#AccountFrm_email").type(fakeData.Email);
  }
  enterStreet() {
    cy.get("#AccountFrm_address_1").type(fakeData.Street);
  }
  enterCity() {
    cy.get("#AccountFrm_city").type(fakeData.City);
  }
  selectRegion() {
    cy.get("#AccountFrm_zone_id").select("3516");
    cy.get("#AccountFrm_zone_id option:selected").should("have.text", "Angus");
  }
  enterPostCode() {
    cy.get("#AccountFrm_postcode").type(fakeData.PostCode);
  }
  enterLogin() {
    cy.get("#AccountFrm_loginname").type(fakeData.Login);
    expect(fakeData.Login.length).to.be.at.least(5);
  }
  enterPassword() {
    cy.get("#AccountFrm_password").type(fakeData.Password);
  }
  checkValidationPassword() {
    cy.get("#AccountFrm_password").should("have.value", fakeData.Password);
    if (fakeData.Password.length >= 8) {
      cy.log(
        `Generated password "${fakeData.Password}" meets the minimum length requirement.`
      );
    } else {
      cy.log(
        `Generated password "${fakeData.Password}" does not meet the minimum length requirement.`
      );
    }
  }
  enterPasswordConfirm() {
    cy.get("#AccountFrm_confirm").type(fakeData.Password);
  }
  checkPasswordConfirm() {
    cy.get("#AccountFrm_password")
      .invoke("val")
      .then((passwordValue) => {
        cy.get("#AccountFrm_confirm").invoke("val").should("eq", passwordValue);
      });
  }
  checkToC() {
    cy.get("#AccountFrm_agree").check({ force: true }).should("be.checked");
  }
  clickRegister() {
    cy.get('button[title="Continue"]').click();
  }
  checkRegistrationTest() {
    cy.title().should("eq", "Your Account Has Been Created!");
    cy.url().should("include", "rt=account/success");
  }
  enterLoginEmail() {
    cy.get("#loginFrm_loginname").type(fakeData.Login);
  }
  enterLoginPassword() {
    cy.get("#loginFrm_password").type(fakeData.Password);
  }
  clickLogIn() {
    cy.get('button[type="submit"]').eq(1).click();
  }
  checkLoginTest() {
    cy.title().should("eq", "My Account");
    cy.url().should("include", "rt=account/account");
    cy.get(".maintext").should("contain.text", " My Account");
  }
}

export default RegistrationPage;
