context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://va-test.vnlp.ai/')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('#username')
      .type('fake@email.com').should('have.value', 'fake@email.com')

      // .type() with special character sequences
      .type('{leftarrow}{rightarrow}{uparrow}{downarrow}')
      .type('{del}{selectall}{backspace}')

      // .type() with key modifiers
      .type('{alt}{option}') //these are equivalent
      .type('{ctrl}{control}') //these are equivalent
      .type('{meta}{command}{cmd}') //these are equivalent
      .type('{shift}')

      // Delay each keypress by 0.3 sec
      .type('dat.do', { delay: 200 })
      .should('have.value', 'dat.do')

    cy.get('#password')
      .type('taonemay123').should('have.value', 'taonemay123')

    cy.get('.btn').click()
    cy.get('.new-content').click()
    cy.get(':nth-child(1) > .ng-untouched').type('faker')
    cy.get('.mb-3').type('Auto')
    cy.get('.btn-vnlp').click()
        cy.wait(2000)
    cy.location().should((loc) => {
      expect(loc.href).to.eq('https://va-test.vnlp.ai/#/bots')
    })
  })
})