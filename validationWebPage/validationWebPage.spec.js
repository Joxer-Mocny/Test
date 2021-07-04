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

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Ďakujem za vyplnenie žiadosti.");
  });
  it("Test form submit with out dizajn", () => {
    // submit form and check for errors

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Ďakujem za vyplnenie žiadosti.");
  });

  it("Test form submit with out checkbox programovanie ", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Ďakujem za vyplnenie žiadosti.");
  });

  it("Test form submit with out checkbox online marketing ", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Ďakujem za vyplnenie žiadosti.");
  });

  it("Test form submit with out checkox webova a mobilna aplikacia ", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Ďakujem za vyplnenie žiadosti.");
  });

  it("Test form submit with out checkbox elektronicky obchod ", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Ďakujem za vyplnenie žiadosti.");
  });

  it("Test form submit with out checkbox webstranka ", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Ďakujem za vyplnenie žiadosti.");
  });

  it("Test form submit with out checkbox redakcny system ", () => {
    // submit form

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

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
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

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím svoje meno"
    );
  });

  it("Test form errors with out company", () => {
    // submit form and check for errors

    cy.get("#name").click().type("John Dove").blur();

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

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Vyplňte prosím meno spoločnosti"
    );
  });

  it("Test form errors with out e-mail", () => {
    // submit form and check for errors

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

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
  });

  it("Test form errors with wrong mail", () => {
    // submit form and check for errors
    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compenycom").blur();

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
  });

  it("Test form errors with out phone number", () => {
    // submit form and check for errors

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

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
      "Vyplňte prosím svoje telefónne číslo"
    );
  });

  it("Test form errors with out message", () => {
    // submit form and check for errors

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

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Opíšte prosím svoj projekt"
    );
  });

  it("Test form errors with  name", () => {
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

  it("Test form errors with company", () => {
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

  it("Test form errors with email", () => {
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

  it("Test form errors with phone number", () => {
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

  it("Test form errors with  Dizajn", () => {
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

  it("Test form errors with Programovanie", () => {
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

  it("Test form errors with Online marketing", () => {
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

  it("Test form errors with Webová a mobilná aplikácia", () => {
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

  it("Test form errors with Elektronický obchod", () => {
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

  it("Test form errors with Web stránka", () => {
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

  it("Test form errors with  Redakčný systém", () => {
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

  it("Test form errors with  project", () => {
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

    cy.get("#contact-submit").click();

    // check for successful modal popup

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Thank you for your request.");
  });

  it("Test form submit with out dizajn", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    // check for successful modal popup

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Thank you for your request.");
  });

  it("Test form submit with out checkbox programovanie ", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    // check for successful modal popup

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Thank you for your request.");
  });

  it("Test form submit with out checkbox online marketing ", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    // check for successful modal popup

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Thank you for your request.");
  });

  it("Test form submit with out checkox webova a mobilna aplikacia ", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();
    // check for successful modal popup

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Thank you for your request.");
  });

  it("Test form submit with out checkbox elektronicky obchod ", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Web stránka"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    // check for successful modal popup

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Thank you for your request.");
  });

  it("Test form submit with out checkbox webstranka ", () => {
    // submit form

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

    cy.get("#tel").click().type("+4211111111111").blur();

    cy.get('input[value="Dizajn"]').click();

    cy.get('input[value="Programovanie"]').click();

    cy.get('input[value="Online marketing"]').click();

    cy.get('input[value="Webová a mobilná aplikácia"]').click();

    cy.get('input[value="Elektronický obchod"]').click();

    cy.get('input[value="Redakčný systém"]').click();

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    // check for successful modal popup

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Thank you for your request.");
  });

  it("Test form submit with out checkbox redakcny system ", () => {
    // submit form

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

    cy.get("#message").click().type("Testing").blur();

    cy.get("#contact-submit").click();

    // check for successful modal popup

    cy.get("#modal-overlay-contact-us", { timeout: 20000 })
      .should("have.attr", "style", "display: visible")
      .and("contains", "Thank you for your request.");
  });

  it("Test form errors", () => {
    // submit form and check for errors

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

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with out name", () => {
    // submit form and check for errors

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

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please enter your name"
    );
  });

  it("Test form errors with out company", () => {
    // submit form and check for errors

    cy.get("#name").click().type("John Dove").blur();

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

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should("contain", "Company");
  });

  it("Test form errors with out e-mail", () => {
    // submit form and check for errors

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

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

  it("Test form errors with wrong mail", () => {
    // submit form and check for errors
    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compenycom").blur();

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

    cy.get("#name").click().type("John Dove").blur();

    cy.get("#company-name").click().type("Company").blur();

    cy.get("#email").click().type("John.dove@compeny.com").blur();

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
      "Please enter your phone number"
    );
  });

  it("Test form errors with out message", () => {
    // submit form and check for errors

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

    cy.get("#contact-submit").click();

    cy.get('span[class="error-text"]').should(
      "contain",
      "Please describe your project"
    );
  });

  it("Test form errors with name", () => {
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

  it("Test form errors with company", () => {
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

  it("Test form errors with email", () => {
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

  it("Test form errors with  phone number", () => {
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

  it("Test form errors with Dizajn", () => {
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

  it("Test form errors with Programovanie", () => {
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

  it("Test form errors with Online marketing", () => {
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

  it("Test form errors with Webová a mobilná aplikácia", () => {
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

  it("Test form errors with Elektronický obchod", () => {
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

  it("Test form errors with Web stránka", () => {
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

  it("Test form errors with  Redakčný systém", () => {
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

  it("Test form errors with  project", () => {
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
