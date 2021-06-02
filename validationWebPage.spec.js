describe("Zadanie test", () => {
  it("Test form", () => {
    // visit web and fill the form
    cy.visit("https://www.bart.sk/mam-zaujem");
    cy.get('form[id="contant-form"]').contains(
      'div[id="form-group-name"]',
      "Vaše meno"
    );
    cy.get('input[id="name"]').click().type("John Dove").blur();

    cy.get('form[id="contant-form"]').contains(
      'div[id="form-group-company"]',
      "Názov spoločnosť "
    );
    cy.get('input[id="company-name"]').click().type("Company").blur();

    cy.get('form[id="contant-form"]').contains(
      'div[id="form-group-email"]',
      "E-mail"
    );
    cy.get('input[id="email"]').click().type("John.dove@company.comp").blur();

    cy.get('form[id="contant-form"]').contains(
      'div[id="form-group-tel"]',
      "Telefón"
    );
    cy.get('input[id="tel"]').click().type("+4211111111111").blur();

    cy.get('form[id="contant-form"]').contains(
      'div[id="form-group-interest"]',
      "Mám záujem o..."
    );

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[id="check"]').click();

    cy.get('input[id="check"]').click();

    cy.get('input[id="check"]').click();

    cy.get('input[id="check"]').click();

    cy.get('input[id="check"]').click();

    cy.get('form[id="contant-form"]').contains(
      'div[id="form-group-message"]',
      "Krátky popis Vášho projektu"
    );
    cy.get('textarea[id="message"]').click().type("Testing").blur();

    // submit form and check for errors
    cy.get('button[id="contact-submit"]').click();

    cy.get('span[class="error-text"]').should(
      "not.contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "not.contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "not.contain",
      "Zadajte proím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "not.contain",
      "Vyplňte prosímm svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "not.contain",
      "Vyplňte prosímm o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "not.contain",
      "Opište prosímm svoj projekt"
    );

    // check for successful modal popup

    cy.get('div[id="modal-overlay-contact-us"]')
      .should("have.attr", "style", "display: visible")
      .and("contains", "Ďakujem za vyplnenie žiadosti.");
  });
});
