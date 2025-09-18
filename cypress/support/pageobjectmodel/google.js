class GoogleLoginPage {
  visitLoginPage() {
    cy.visit('https://accounts.google.com/signin');
  }

  enterInvalidEmail(email) {
    cy.get("input[type='email']")
      .should('be.visible')
      .clear()
      .type(email)
      .then(() => {
        // Ensure input loses focus to trigger validation
        cy.get('body').click(0, 0);
      });
  }

  clickNextButton() {
    cy.get('#identifierNext', { timeout: 10000 })
      .scrollIntoView()
      .should('be.visible')
      .should('not.be.disabled')
      .click({ force: true });
  }

  getErrorMessage() {
    return cy.contains('Enter a valid email or phone number', { timeout: 10000 });
  }
}

export default new GoogleLoginPage();
