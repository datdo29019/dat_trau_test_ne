context('VA Models', () => {
  beforeEach(() => {

    cy.visit('https://va-test.vnlp.ai/')

  })

 // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {

    //API
    cy.intercept('/auth/login').as('login')
    //API


    // https://on.cypress.io/type
    cy.get('#username')

      // Delay each keypress by 0.2 sec
      .type('dat.do')
      .should('have.value', 'dat.do')

    cy.get('#password')
      .type('taonemay123').should('have.value', 'taonemay123')

    cy.get('.btn').click()

 cy.wait('@login')
    //Get Home
    cy.get(':nth-child(2) > .bot-card > .bot-card--main').click()

    cy.get(':nth-child(7) > .js-panel-title').click()
    cy.get('.js-collapsed.active > .js-panel-body > :nth-child(1) > a').click()




    })
  })