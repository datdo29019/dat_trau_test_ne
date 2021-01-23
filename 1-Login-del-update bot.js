context('Login-Del-Update', () => {
  beforeEach(() => {

    cy.visit('https://va-test.vnlp.ai/')

  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {

    //API
    cy.intercept('/auth/login').as('login')

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
cy.wait('@login')
    cy.get('.new-content').click()
    cy.get(':nth-child(1) > .ng-untouched').type('Faker')
    cy.get('.mb-3').type('Auto')

    cy.get('.btn-vnlp').click()
    cy.get('.p-toast-message-content').invoke('text') //get . hiển thị popup, thông báo toast
     .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationCREATE_BOT_FAIL"); //notifica.... tên thông báo hiển thị
       //Check noti when save Fail Responses
      })

//API
 cy.intercept('/bots').as('bot')

    cy.get('.p-toast-icon-close-icon').click()
    cy.get('.p-dialog-header-close-icon').click()
    cy.get(':nth-child(2) > .bot-card > .action').click()
    cy.get(':nth-child(2) > .bot-card > .action > .action-icon > .js-dropdown > :nth-child(1) > a').click()
    cy.get(':nth-child(1) > .ng-valid')
      .type('{del}{selectall}{backspace}',{ delay: 500 })
      .type('Hide on Bush')
      .should('have.value','Hide on Bush')

    cy.get('.mb-3')
      .type('{del}{selectall}{backspace}',{ delay: 300 })
      .type('KOREAN_N/A')
      .should('have.value','KOREAN_N/A')

    cy.get('.btn-vnlp').click() //Button
    cy.get('.p-toast-message-content').invoke('text') //get . hiển thị popup, thông báo toast
     .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notification bot_name_existed"); //notifica.... tên thông báo hiển thị
       //Check noti when save fail Responses
      })

    cy.get('.btn-common').click()
//API
 cy.intercept('/auth/login').as('login')

    //Get Home
    cy.get(':nth-child(2) > .bot-card > .bot-card--main').click()
cy.wait(1500)
    cy.get(':nth-child(3) > .js-panel-title').click()

    cy.get('.js-collapsed.active > .js-panel-body > :nth-child(1) > a').click()

    cy.get(':nth-child(1) > .btn').click()
cy.wait('@bot')
    cy.get('#p-accordiontab-0-content > .p-accordion-content > :nth-child(2) > .ng-pristine')
      .type('Hello').should('have.value', 'Hello')

    cy.get('.p-accordion-content > :nth-child(3) > .ng-untouched')
      .type('Xin chao').should('have.value','Xin chao')

    cy.get('#p-accordiontab-5').click()
    cy.get('.justify-content-between > :nth-child(1) > .btn').click()



        cy.get('#autoSuggestion')
      .type('Hello').should($el => {
        expect($el[0].textContent).to.contain('Hello')
      })
    cy.get('.ng-tns-c21-38 > .text-right > .btn').click()

    cy.get('#autoSuggestion')
      .type('Hi').should($el => {
        expect($el[0].textContent).to.contain('Hi')
      })
    cy.get('.ng-tns-c21-38 > .text-right > .btn').click()

    cy.get('#autoSuggestion')
      .type('Bonjur').should($el => {
        expect($el[0].textContent).to.contain('Bonjur')
      })
    cy.get('.ng-tns-c21-38 > .text-right > .btn').click()


    cy.get('.p-dialog-header-close-icon').click()


    cy.get('#p-accordiontab-8').click()
    cy.get('.btn-common-small').click()
    cy.get('.col.mb-3 > .ng-untouched').click()
      .type('Text').should('have.value','Text')

    cy.get(':nth-child(2) > .p-inputwrapper-filled > .p-dropdown > .p-dropdown-label').click()
      cy.get(':nth-child(1) > .p-dropdown-item').click()


    cy.get('.position-relative > .mb-3 > .ng-untouched').click()
      .type('Hello.What do you want me to do?').should('have.value','Hello.What do you want me to do?')

    cy.get('app-response-create > .middle-content > .section-main > .text-right.mt-3 > .btn').click()
    // cy.wait(500)
    cy.get('.p-toast-message-content').invoke('text')
     .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationSaved successfully");
       //Check noti when save successfully Responses
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()
    
    cy.get('.p-dialog-header-icon').click() //Nút X
    cy.wait(1000) //Thêm s đợi để đỡ conflict khi click quá nhanh 
    cy.get('.text-right > .btn').click()
    cy.get('.p-toast-message-content').invoke('text')
     .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationSaved successfully");
       //Check noti when save successfully
      })
//Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

     cy.wait('@bot')
     cy.wait(1000)
     cy.get('.js-collapsed.active > .js-panel-body > :nth-child(2) > a').click()
     cy.wait(2000)
     cy.get('.js-collapsed.active > .js-panel-body > :nth-child(1) > a').click()
     cy.wait(2000)
     cy.get('[tooltipposition="top"] > .vnlp-icon').then(ele => {
        ele[0].click() // 2Button Submit if choose [1] = Button 2 - [0] = Button 1
        })

     cy.get(':nth-child(4) > .btn-vnlp').click()

     cy.get('.p-toast-message-content').invoke('text')
       .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationDeleted successfully");
       //Check noti when Deleted successfully
      })

    cy.get('.js-collapsed.active > .js-panel-body > :nth-child(3) > a').click()
    cy.wait(2000)
    cy.get('.table-quick-action > .ng-star-inserted > .vnlp-icon').click()
    cy.get(':nth-child(4) > .btn-vnlp').click()
      cy.get('.p-toast-message-content').invoke('text')
       .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationDeleted successfully");
       //Check noti when Deleted successfully
      })



  })
})  

