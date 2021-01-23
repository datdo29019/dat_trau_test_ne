context('Histories-Testing history', () => {
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
    cy.get(':nth-child(6) > .js-panel-title').click()
    cy.get('.js-collapsed.active > .js-panel-body > :nth-child(1) > a').click()
    cy.get('.pt-3').should('have.contain','Testing history')
    cy.get('.breadcrumb-description')
      .should($el => {
      expect($el[0].textContent).to.contain('Home / Histories / Testing')
      })


    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(1)').should('have.contain','@$#Ư%Ẻgert ')
    cy.get('.p-datatable-tbody > :nth-child(2) > :nth-child(1)').should('have.contain','Start')
    cy.get('.p-datatable-tbody > :nth-child(3) > :nth-child(1)').should('have.contain','Start')
    cy.get('.p-datatable-tbody > :nth-child(4) > :nth-child(1)').should('have.contain','Tôi muốn ăn cơm chiên')
    cy.get('.p-datatable-tbody > :nth-child(5) > :nth-child(1)').should('have.contain','Tôi muốn ăn bún mắm')
    cy.get('.p-datatable-tbody > :nth-child(6) > :nth-child(1)').should('have.contain','Tôi muốn đi Cần Thơ')
    cy.get('.p-datatable-tbody > :nth-child(7) > :nth-child(1)').should('have.contain','Tôi muốn đi Hà Nội')
    cy.get('.p-datatable-tbody > :nth-child(8) > :nth-child(1)').should('have.contain','Tôi muốn đi Đà nẵng')
    cy.get('.p-datatable-tbody > :nth-child(9) > :nth-child(1)').should('have.contain','Quick')
    cy.get('.p-datatable-tbody > :nth-child(10) > :nth-child(1)').should('have.contain','Bực quá')
    cy.get(':nth-child(11) > :nth-child(1)').should('have.contain','Khó chịu thật')
    cy.get(':nth-child(12) > :nth-child(1)').should('have.contain','Delay')
    cy.get(':nth-child(13) > :nth-child(1)').should('have.contain','Card')
    cy.get(':nth-child(14) > :nth-child(1)').should('have.contain','cac')
    cy.get(':nth-child(15) > :nth-child(1)').should('have.contain','button')

    

    })
  })