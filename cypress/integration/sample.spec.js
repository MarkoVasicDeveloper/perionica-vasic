/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/await-async-query */
/* eslint-disable no-undef */

/// <reference types="cypress" />

describe("Test application", () => {
  it("Visit the CarpetWashing page from button in CarpetServiceInfo section", () => {
    cy.visit("/");

    cy.get("[data-testid = linkWashCarpet]").click({ force: true });

    cy.url().should("include", "pranje-tepiha");
  });

  it("Visit the DeepWashing page from button in DeepWash section", () => {
    cy.visit("/");
    cy.get("[data-testid = linkFirstDeepWashingButton]").click({ force: true });
    cy.url().should("include", "dubinsko-pranje");
    cy.visit("/");
  });

  it("Test a header links", () => {
    cy.visit("/");
    cy.visit("/pranje-tepiha");
    cy.url().should("include", "/pranje-tepiha");
    cy.visit("/dubinsko-pranje");
    cy.url().should("include", "dubinsko-pranje");
    cy.visit("/galerija");
    cy.url().should("include", "galerija");
    cy.visit("/kontakt");
    cy.url().should("include", "/kontakt");
  });

  it("Test contract page exist", () => {
    cy.visit("/kontakt");
    cy.get("form").should("exist");
    cy.get("[data-testid=name]")
      .should("exist")
      .should("be.empty")
      .should("have.attr", "required");
    cy.get("[data-testid=surname]")
      .should("exist")
      .should("be.empty")
      .should("have.attr", "required");
    cy.get("[data-testid=email]")
      .should("exist")
      .should("be.empty")
      .should("have.attr", "required");
    cy.get("[data-testid=message]")
      .should("exist")
      .should("be.empty")
      .should("have.attr", "required");
    cy.get("[data-testid=fileInput]").should("exist").should("be.empty");
    cy.findByRole("button", {
      name: /posalji\.\.\./i,
    }).should("exist");
  });

  it("Add user without photo", () => {
    cy.visit("/kontakt");

    cy.intercept("POST", "api/addUser", {
      fixture: "addUser.json",
    }).as("addUser");

    cy.get("[data-testid=name]").click().should("be.focused").type("name");

    cy.get("[data-testid=surname]")
      .click()
      .should("be.focused")
      .type("surname");

    cy.get("[data-testid=email]")
      .click()
      .should("be.focused")
      .type("email@email.com");

    cy.get("[data-testid=message]")
      .click()
      .should("be.focused")
      .type("New message");

    cy.findByRole("button", {
      name: /posalji\.\.\./i,
    }).click();

    cy.wait("@addUser").then((xhr) => {
      expect(xhr.response.body[0]).to.have.property("userId");
      expect(xhr.response.body[0]).to.have.property("name");
      expect(xhr.response.body[0]).to.have.property("surname");
      expect(xhr.response.body[0]).to.have.property("email");
    });

    cy.get("[data-testid=warning]")
      .contains(
        "Hvala sto ste nam se obratili. Pokusacemo da vam odgovorimo u sto kracem roku!"
      )
      .should("be.visible");
  });

  it("Add user and photo test correct extension", () => {
    cy.visit("/kontakt");

    cy.intercept("POST", "api/addUser", {
      fixture: "addUser.json",
    }).as("addUser");

    cy.intercept("POST", "api/uploadPhoto/**", {
      fixture: "responsePicture.json",
    }).as("uploadPhoto");

    cy.get("[data-testid=name]").click().should("be.focused").type("name");

    cy.get("[data-testid=surname]")
      .click()
      .should("be.focused")
      .type("surname");

    cy.get("[data-testid=email]")
      .click()
      .should("be.focused")
      .type("email@email.com");

    cy.get("[data-testid=message]")
      .click()
      .should("be.focused")
      .type("New message");

    cy.get("[data-testid=fileInput]").attachFile("air-compressor.png");

    cy.findByRole("button", {
      name: /posalji\.\.\./i,
    }).click();

    cy.wait("@addUser").then((xhr) => {
      expect(xhr.response.body[0]).to.have.property("userId");
      expect(xhr.response.body[0]).to.have.property("name");
      expect(xhr.response.body[0]).to.have.property("surname");
      expect(xhr.response.body[0]).to.have.property("email");
    });

    cy.wait("@uploadPhoto").then((xhr) => {
      expect(xhr.response.body).to.have.property("userId");
      expect(xhr.response.body).to.have.property("messageId");
      expect(xhr.response.body).to.have.property("photoId");
      expect(xhr.response.body).to.have.property("photoPath");
      expect(xhr.response.body).to.have.property("createAt");

      cy.get("[data-testid=warning]")
        .contains(
          "Hvala sto ste nam se obratili. Pokusacemo da vam odgovorimo u sto kracem roku!"
        )
        .should("be.visible");
    });
  });

  it("Add a user and photo test bad extension", () => {
    cy.visit("/kontakt");

    cy.intercept("POST", "api/addUser", {
      fixture: "addUser.json",
    }).as("addUser");

    cy.intercept("POST", "api/uploadPhoto/**", {
      statusCode: 401,
      fixture: "BadResponsePicture.json",
    }).as("uploadPhoto");

    cy.get("[data-testid=name]").click().should("be.focused").type("name");

    cy.get("[data-testid=surname]")
      .click()
      .should("be.focused")
      .type("surname");

    cy.get("[data-testid=email]")
      .click()
      .should("be.focused")
      .type("email@email.com");

    cy.get("[data-testid=message]")
      .click()
      .should("be.focused")
      .type("New message");

    cy.get("[data-testid=fileInput]").attachFile(
      "beverage-computer-flower.gif"
    );

    cy.findByRole("button", {
      name: /posalji\.\.\./i,
    }).click();

    cy.wait("@addUser").then((xhr) => {
      expect(xhr.response.body[0]).to.have.property("userId");
      expect(xhr.response.body[0]).to.have.property("name");
      expect(xhr.response.body[0]).to.have.property("surname");
      expect(xhr.response.body[0]).to.have.property("email");
    });

    cy.wait("@uploadPhoto").then((xhr) => {
      cy.log(xhr);
      cy.get("[data-testid=warning]")
        .contains("Slike moraju biti u .jpg ili .png formatu!")
        .should("be.visible");
    });
  });
});
