
context('Keywords', () => {
  beforeEach(() => {

    cy.visit('https://va-test.vnlp.ai/')

  })

 // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('#username')

      // Delay each keypress by 0.2 sec
      .type('dat.do')
      .should('have.value', 'dat.do')

    cy.get('#password')
      .type('taonemay123').should('have.value', 'taonemay123')

    cy.get('.btn').click()

//API
 cy.intercept('/auth/login').as('login')
    //Get Home
    cy.get(':nth-child(2) > .bot-card > .bot-card--main').click()

    cy.get(':nth-child(3) > .js-panel-title').click() //Open Conversations

    cy.get(':nth-child(6) > a').click()
    cy.get('.flex-wrap > .btn-vnlp').click()
    cy.get(':nth-child(1) > .ng-untouched').focus()
      .type('Key').should('have.value','Key')

    cy.get('.p-chips-input-token > input').focus()
      .type('Sym').should('have.value','Sym')
      .type('{enter}')
      .type('Sym').should('have.value','Sym')
.type('{enter}')
    cy.wait(10000)


    cy.get('.side-right-footer > .btn-vnlp').click()
      cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationEntitytype required");
       //Check noti when save successfully
      })

//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

      cy.get('.p-dropdown-label').click()
      cy.get(':nth-child(1) > .p-dropdown-item').click()
      
      cy.get('.side-right-footer > .btn-vnlp').click()
      	cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationCreated successfully");
       //Check noti when save successfully
      })



  })   
}) 
