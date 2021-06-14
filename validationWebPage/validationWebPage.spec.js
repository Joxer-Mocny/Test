describe("Test SK", () => {
  beforeEach(() => {
    cy.visit("https://www.bart.sk/mam-zaujem");
  });

  it("Test form submit", () => {
    // visit web and fill the form.
    cy.get("#form-group-name").contains("Vaše meno");
    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@comp.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    // check for successful modal popup

    cy.get('div[id="modal-overlay-contact-us"]', { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Ďakujem za vyplnenie žiadosti.");
  });

  it("Test form errors", () => {
    // submit form and check for errors

    cy.get('button[id="contact-submit"]').click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out name", () => {
    // submit form and check for errors

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out company", () => {
    // submit form and check for errors

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out email", () => {
    // submit form and check for errors

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with wrong mail", () => {
    // submit form and check for errors
    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dovecompeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();
  });

  it("Test form errors with out phone number", () => {
    // submit form and check for errors

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out  service", () => {
    // submit form and check for errors

    cy.get('input[value="Dizajn"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out  service2", () => {
    // submit form and check for errors

    cy.get('input[value="Programovanie"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out  service3", () => {
    // submit form and check for errors

    cy.get('input[value="Online marketing"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out  service4", () => {
    // submit form and check for errors

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out  service5", () => {
    // submit form and check for errors

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out  service6", () => {
    // submit form and check for errors

    cy.get('input[value="Web stránka"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out service7", () => {
    // submit form and check for errors

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with out project", () => {
    // submit form and check for errors

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Zadajte prosím valídny email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje telefónne číslo"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );
  });
});

describe("Test EN", () => {
  beforeEach(() => {
    cy.visit("https://www.bart.sk/en/interested-in-test");
  });

  it("Test form submit", () => {
    // visit web and fill the form
    cy.get("#form-group-name").contains("Name");
    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    // skus prerobit na timeout
    cy.get("#contact-submit").click();

    // check for successful modal popup

    //   cy.get('div[id="modal-overlay-contact-us"]', { timeout: 20000 })
    //     .should("have.attr", "style", "display: visible")
    //     .and("contains", "Ďakujem za vyplnenie žiadosti.");
  });

  it("Test form errors", () => {
    // submit form and check for errors

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should("contain", "Please enter valid email");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out name", () => {
    // submit form and check for errors

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out company", () => {
    // submit form and check for errors

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out email", () => {
    // submit form and check for errors

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with wrong mail", () => {
    // submit form and check for errors
    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dovecompeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );
  });

  it("Test form errors with out phone number", () => {
    // submit form and check for errors

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out  service1", () => {
    // submit form and check for errors

    cy.get('input[value="Dizajn"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out  service2", () => {
    // submit form and check for errors

    cy.get('input[value="Programovanie"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out  service3", () => {
    // submit form and check for errors

    cy.get('input[value="Online marketing"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out  service4", () => {
    // submit form and check for errors

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out  service5", () => {
    // submit form and check for errors

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out  service6", () => {
    // submit form and check for errors

    cy.get('input[value="Web stránka"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out service7", () => {
    // submit form and check for errors

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out project", () => {
    // submit form and check for errors

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );

    cy.get('span[class="error-text"]').should("contain", "Company");

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter valid email"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your phone number"
    );

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím, o ktorú službu máte záujem"
    );
  });
});
