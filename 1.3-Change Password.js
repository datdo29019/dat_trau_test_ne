context('Change password', () => {
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
//API
 cy.intercept('/change-password').as('change-password')



    cy.get(':nth-child(3) > .js-is-select').click()
    cy.get(':nth-child(3) > .js-dropdown > :nth-child(3) > a').click()


    cy.get('form.ng-untouched > :nth-child(1) > .ng-untouched').focus()
      .type('Nhap-sai-pass').should('have.value','Nhap-sai-pass')
    cy.get('.btn').should('be.disabled') //Check button Disabled


	cy.get(':nth-child(2) > .ng-untouched').focus()
		.type('taonemay1233').should('have.value','taonemay1233')
    cy.get('.btn').should('be.disabled') //Check button Disabled

	
	cy.get('.mb-3 > .ng-untouched').focus()
		.type('taonemay1233').should('have.value','taonemay1233')
    cy.get('.btn').should('be.enabled') //Check button Disabled

    cy.get('.btn').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationOld Password Not Correct");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

    cy.get('form.ng-dirty > :nth-child(1) > .ng-dirty').focus()
 	  .type('{del}{selectall}{backspace}')
      .type('taonemay123').should('have.value','taonemay123')


    cy.get(':nth-child(2) > .ng-dirty').focus()
      .type('{del}{selectall}{backspace}')
      .type('taonemay').should('have.value','taonemay')


    cy.get('.mb-3 > .ng-dirty').focus()
      .type('{del}{selectall}{backspace}')
      .type('taonemay111').should('have.value','taonemay111')    

    cy.get('.btn').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationPassword does not match");
       //Check noti when save successfully
      })

    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

cy.get('form.ng-dirty > :nth-child(1) > .ng-dirty').focus()
 	  .type('{del}{selectall}{backspace}')
      .type('taonemay123').should('have.value','taonemay123')


    cy.get(':nth-child(2) > .ng-dirty').focus()
      .type('{del}{selectall}{backspace}')
      .type('taonemay123').should('have.value','taonemay123')


    cy.get('.mb-3 > .ng-dirty').focus()
      .type('{del}{selectall}{backspace}')
      .type('taonemay123').should('have.value','taonemay123')    
cy.wait('@change-password')
    cy.get('.btn').click()
cy.wait('@change-password')
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("//");
       //Check noti when save successfully
      })


    

  })
})