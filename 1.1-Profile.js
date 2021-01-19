context('Profile', () => {
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
 cy.intercept('/profile').as('profile')


    cy.get(':nth-child(3) > .js-is-select').click()
    cy.get(':nth-child(3) > .js-dropdown > :nth-child(1) > a').click()

    cy.get(':nth-child(4) > .ng-untouched').click() //Name
      .type('{del}{selectall}{backspace}')
    cy.get('.footer-info > .btn').should('be.disabled') //Check button Disabled


    cy.get('.error-validate')
     .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal(" Required field ");
       //Check Text show
       })
    cy.get('.error').focus()
      .type('Quốc Đạt').should('have.value','Quốc Đạt')



    cy.get(':nth-child(5) > .ng-untouched').click() //Email
      .type('{del}{selectall}{backspace}')
    cy.get('.footer-info > .btn').should('be.disabled') //Check button Disabled

    cy.get('.error-validate')
     .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal(" Required field ");
       //Check Text show
       })
    cy.get(':nth-child(5) > .ng-dirty').focus()
      .type('dat.do@emandai.net').should('have.value','dat.do@emandai.net')


    cy.get(':nth-child(6) > .ng-untouched').click()
      .type('{del}{selectall}{backspace}')
    cy.get('.footer-info > .btn').should('be.disabled') //Check button Disabled

    cy.get('.error-validate')
     .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal(" Required field ");
       //Check Text show
       })
    cy.get('.error').focus()
      .type('dat.do@emandai.net').should('have.value','')

    cy.get('.error-validate')
     .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal(" Required field ");
       //Check Text show
       })

    cy.get('.error').focus()  //Phone Number
      .type('0769632239').should('have.value','0769632239')


    cy.get(':nth-child(7) > .ng-untouched').click()
      .type('{del}{selectall}{backspace}')
    cy.get('.footer-info > .btn').should('be.disabled') //Check button Disabled

    cy.get('.error-validate') //Address
     .invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal(" Required field ");
       //Check Text show
       })

    cy.get('.error').focus()
      .type('127 Nguyễn Thị Thập, Liên Chiểu, Đà Nẵng').should('have.value','127 Nguyễn Thị Thập, Liên Chiểu, Đà Nẵng')

    cy.get('.footer-info > .btn').click()
    cy.wait('@profile')
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationUpdate successfully");
       //Check noti when save successfully
      })

    })
  })  //Hiện tại đang có bug không có Thông báo khi sửa Profile