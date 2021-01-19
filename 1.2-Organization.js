context('Organization', () => {
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

    cy.get(':nth-child(3) > .js-is-select').click()
    cy.get(':nth-child(3) > .js-dropdown > .ng-star-inserted > a').click()

    cy.get(':nth-child(1) > .ng-untouched').click()
      .type('{del}{selectall}{backspace}')
    cy.get('.mt-4 > .btn').should('be.disabled') //Check button Disabled

    cy.get('.error-validate')
     .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("name_required");
       //Check Text show
       })

    cy.get(':nth-child(1) > .ng-valid').focus()
      .type('#$@#$@#').should('have.value','#$@#$@#')

    cy.get('.error-validate')
     .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("wrong_pattern");
       //Check Text show
       })

    cy.get(':nth-child(1) > .ng-valid').focus() //Organization Name *
      .type('{del}{selectall}{backspace}')
      .type('1977').should('have.value','1977')
    cy.get('.mt-4 > .btn').should('be.enabled') //Check button Enabled


    cy.get(':nth-child(2) > .ng-pristine').focus() //Description
      .type('{del}{selectall}{backspace}')
      .type('Hide on Bush-Captain Jack-Captain Maclian').should('have.value','Hide on Bush-Captain Jack-Captain Maclian')


    cy.get(':nth-child(3) > .ng-untouched').focus() //Email
      .type('{del}{selectall}{backspace}')
      .type('ValidEmailgmail.com').should('have.value','ValidEmailgmail.com')
    cy.get('.mt-4 > .btn').should('be.disabled') //Check button Disabled
    cy.get('.error-validate')
     .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Invalid email");
       //Check Text show
       })
    cy.get(':nth-child(3) > .ng-valid').focus()
      .type('{del}{selectall}{backspace}')
      .type('ValidEmail@gmail.com').should('have.value','ValidEmail@gmail.com')
    cy.get('.mt-4 > .btn').should('be.enabled') //Check button Enabled



    cy.get(':nth-child(4) > .ng-valid').focus() //Phone Number
      .type('{del}{selectall}{backspace}')
      .type('PhoneNumber@gmail.com').should('have.value','PhoneNumber@gmail.com')

    cy.get('.mt-4 > .btn').should('be.disabled') //Check button Disabled

    cy.get('.error-validate')
     .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Invalid phone");
       //Check Text show
       })


    cy.get(':nth-child(4) > .ng-valid').focus() //Phone Number
      .type('{del}{selectall}{backspace}')
      .type('0769632239').should('have.value','0769632239')
    cy.get('.mt-4 > .btn').should('be.enabled') //Check button Disabled



    cy.get(':nth-child(5) > .ng-valid').focus()
      .type('{del}{selectall}{backspace}')
      .type('Marin - Sofm - Impact - Imp - Duke - Smeb - Madlife - Dandy - Mata - Looper - Faker - Ambition - Hai')
      .should('have.value','Marin - Sofm - Impact - Imp - Duke - Smeb - Madlife - Dandy - Mata - Looper - Faker - Ambition - Hai')

    cy.get('.mt-4 > .btn').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationUpdate successfully");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

    })
 })