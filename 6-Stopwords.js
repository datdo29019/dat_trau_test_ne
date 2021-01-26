context('Stopwords', () => {
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
    cy.wait(3500)  
//API
 cy.intercept('/bots').as('bot')
 
    cy.get(':nth-child(3) > .js-panel-title').click() //Open Conversations

    cy.get(':nth-child(7) > a').click()

    cy.get('.p-inputtext')
      .type('a').type('{enter}')
      .type('a').type('{enter}')  //Check xem trùng lặp 2 a được k
      .type('aa').type('{enter}')
      .type('aa').type('{enter}') //Check xem trùng lặp 2 aa được k
      .type('1@^&').type('{enter}')
      .type('1@^&').type('{enter}') //Check xem trùng lặp 2 1@^& được k
      .type('End').type('{enter}')  
      .type('End').type('{enter}')  //Check xem trùng lặp 2 End được k
      .should($el => {
        expect($el[0].textContent).to.contain('aaa1@^&End')
      })

    cy.get('.text-left > .btn').click()
      cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationUpdate Success");
       //Check noti when save successfully
      })


    cy.get(':nth-child(1) > .p-chips-token-icon').click()
    cy.get(':nth-child(1) > .p-chips-token-icon').click()
    cy.get(':nth-child(1) > .p-chips-token-icon').click()
    cy.get(':nth-child(1) > .p-chips-token-icon').click()

    cy.get('.text-left > .btn').click()
      cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationUpdate Success");
       //Check noti when save successfully
      })



      cy.get('.p-inputtext')
      .should($el => {
        expect($el[0].textContent).to.contain('')
      })
  }) 
}) 
