context('Teen codes', () => {
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
    cy.wait(3500)  
//API
 cy.intercept('/bots').as('bots')

    cy.get(':nth-child(3) > .js-panel-title').click() //Open Conversations

    cy.get('.js-panel-body > :nth-child(8) > a').click()

    cy.get('td > .m-0')
      .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal(" No data available ");
       //Check Text show
       })
cy.wait(700)

    cy.get('.p-paginator-current')
      .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Showing 0 to 0 of 0 entries");
       //Check Text show
       })
cy.wait('@bots')
    cy.get('.justify-content-between > .btn').click()
    cy.get('.height-33px').focus()
      .type('Không').should('have.value','Không')

    cy.get('.p-inputtext')
      .type('hông').type('{enter}')
      .type('hông').type('{enter}') //Check xem trùng lặp 2 'hông' được k

      .type('hok').type('{enter}')
      .type('hok').type('{enter}') //Check xem trùng lặp 2 'hok' được k

      .type('hong').type('{enter}')
      .type('hong').type('{enter}') //Check xem trùng lặp 2 'hong' được k
    cy.wait(700)
      cy.get('.p-inputtext')
      .should($el => {
        expect($el[0].textContent).to.contain('hônghokhong')
      })

    cy.get('.ng-tns-c21-16 > .btn-vnlp').click()
      cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationCreate Successfully");
       //Check noti when save successfully
      })

//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

cy.get('.p-dialog-content > :nth-child(1) > .height-33px').focus()
      .type('Không').should('have.value','Không')
    cy.wait(700)
    cy.get('.mt-2 > .ng-valid > .input-chips > .p-inputtext > .p-chips-input-token')
      .type('hông').type('{enter}')
      .type('hông').type('{enter}') //Check xem trùng lặp 2 'hông' được k

      .type('hok').type('{enter}')
      .type('hok').type('{enter}') //Check xem trùng lặp 2 'hok' được k

      .type('hong').type('{enter}')
      .type('hong').type('{enter}') //Check xem trùng lặp 2 'hong' được k
    cy.wait(700)
      cy.get('.p-inputtext')
      .should($el => {
        expect($el[0].textContent).to.contain('')
      })

    cy.get('.ng-tns-c21-16 > .btn-vnlp').click() //Button 'Add'

    cy.get('.error-validate')
      .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal(" Required codes");
       //Check Text show
       })

    cy.get('.mt-2 > .ng-valid > .input-chips > .p-inputtext > .p-chips-input-token').click()
      .type('Khong').type('{enter}')
      cy.wait(700)
      cy.get('.mt-2 > .ng-valid > .input-chips > .p-inputtext')
      .should($el => {
        expect($el[0].textContent).to.contain('Khong')
      })

    cy.get('.ng-tns-c21-16 > .btn-vnlp').click()

    cy.get('.error-validate')
     .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal(" existed_value");
       //Check Text show
       })

    cy.get('.p-dialog-content > :nth-child(1) > .height-33px').focus()
      .type('{del}{selectall}{backspace}')
      .type('Có').should('have.value','Có')

    cy.get('[style=""] > .p-chips-token-icon').click()
    cy.get('.mt-2 > .ng-valid > .input-chips > .p-inputtext > .p-chips-input-token').click()
      .type('cok').type('{enter}')
      .type('cok').type('{enter}')
cy.wait(700)
      cy.get('.mt-2 > .ng-valid > .input-chips > .p-inputtext')
      .should($el => {
        expect($el[0].textContent).to.contain('cok')
      })


    cy.get('.ng-tns-c21-16 > .btn-vnlp').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationCreate Successfully");
       //Check noti when save successfully
      })

    cy.get('.btn-common').click()
    cy.get('.input-search > .ng-untouched').focus()
      .type('Check')

  }) 
}) 
