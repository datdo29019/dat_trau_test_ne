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
//API
 cy.intercept('/bots').as('bot')
    cy.wait('@bot')

  cy.get('.side-left > :nth-child(4) > a').click()
  cy.get('.mb-2 > .btn').click()
  cy.get('.p-dialog-header').should('be.contain','Create version')


  cy.get('.ng-tns-c21-15 > .btn').click().then(e => {
    cy.get('.error-validate').should('be.exist').and('have.contain','Please enter content')   
  }) //Khi bấm Save. check class .erro-validate. //


    cy.get('.mt-2 > .ng-untouched').focus()
    .type('   ').should('have.value','   ')
  cy.get('.error-validate').should('have.contain','Please enter content')
  cy.get('.mt-2 > .ng-untouched').focus()
    .type('{del}{selectall}{backspace}')
    .type('11').should('have.value','11')
 
  cy.get('.ng-tns-c21-15 > .btn').click()
        cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationSaved successfully");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

  cy.get('.mb-2 > .btn').click()
cy.get('.p-dialog-header').should('be.contain','Create version')


  cy.get('.ng-tns-c21-15 > .btn').click().then(e => {
    cy.get('.error-validate').should('be.exist').and('have.contain','Please enter content')   
  }) //Khi bấm Save. check class .erro-validate. //



    cy.get('.mt-2 > .ng-valid').focus()
    .type('   ').should('have.value','   ')
  cy.get('.error-validate').should('have.contain','Please enter content')
  cy.get('.mt-2 > .ng-valid').focus()
    .type('{del}{selectall}{backspace}')
    .type('11').should('have.value','11')
 
  cy.get('.ng-tns-c21-15 > .btn').click()
        cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notification VERSION_NAME_IS_EXISTED");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    cy.get('.p-dialog-header-close-icon').click()

    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)').click()
    cy.get('.mt-2 > .ng-valid').focus()
      .type('{del}{selectall}{backspace}')

      cy.get('.ng-tns-c21-15 > .btn').click().then(e => {
    cy.get('.error-validate').should('be.exist').and('have.contain','Please enter content')   
  }) //Khi bấm Save. check class .erro-validate. //

    cy.get('.mt-2 > .ng-valid').focus()
      .type('1_2_3_Model').should('have.value','1_2_3_Model')

    cy.get('.ng-tns-c21-15 > .btn').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationUpdate successfully");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

  cy.wait(2000)
    cy.get('.side-left > :nth-child(2) > .js-single-menu > a').click()

    //Check Total Sample,Intents,entity 94 > 121
 cy.wait(2000)
   cy.get('[routerlink="../../../conversation/samples"] > .content-box > :nth-child(2)')
      .invoke('text')
      .then((text)=>{
       const toastText = text;

       expect(toastText).to.equal("23"); //TOTAL SAMPLES
       //Check Text show
       })

  cy.get('[routerlink="../../../contexts"] > .content-box > :nth-child(2)')
    .invoke('text')
          .then((text)=>{
           const toastText = text;

           expect(toastText).to.equal("17"); //TOTAL INTENTS
           //Check Text show
           })

  cy.get('[routerlink="../../../conversation/entity-types"] > .content-box > :nth-child(2)')
    .invoke('text')
          .then((text)=>{
           const toastText = text;

           expect(toastText).to.equal("1"); //TOTAL ENTITY TYPES
           //Check Text show
           }) 

  cy.get('.side-left > :nth-child(4) > a').click()
  cy.get(':nth-child(5) > .table-quick-action > .btn').click()
  cy.get('.p-dialog-content > :nth-child(4) > .btn-vnlp').click()

  cy.wait(5000)
  cy.get('.progressbar-training > .ng-star-inserted').invoke('text')
      .then((text)=>{
       const toastText = text;

       expect(toastText).to.equal("Restore successfully");
       //Check Text show
       })

  cy.wait(2000)
    cy.get('.side-left > :nth-child(2) > .js-single-menu > a').click()

    //Check Total Sample,Intents,entity 94 > 121
 cy.wait(2000)
   cy.get('[routerlink="../../../conversation/samples"] > .content-box > :nth-child(2)')
      .invoke('text')
      .then((text)=>{
       const toastText = text;

       expect(toastText).to.equal("3"); //TOTAL SAMPLES
       //Check Text show
       })

  cy.get('[routerlink="../../../contexts"] > .content-box > :nth-child(2)')
    .invoke('text')
          .then((text)=>{
           const toastText = text;

           expect(toastText).to.equal("3"); //TOTAL INTENTS
           //Check Text show
           })

  cy.get('[routerlink="../../../conversation/entity-types"] > .content-box > :nth-child(2)')
    .invoke('text')
          .then((text)=>{
           const toastText = text;

           expect(toastText).to.equal("1"); //TOTAL ENTITY TYPES
           //Check Text show
           }) 

  


  })    
})