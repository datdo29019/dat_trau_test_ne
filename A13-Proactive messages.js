context('Proactive messages', () => {
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

    cy.get('.side-left > :nth-child(5) > a').click()
    cy.get('.justify-content-between > .btn').click()


//Create fail when empty value
    cy.get('.text-right > .btn').click({ force: true })
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notificationcreate_message_fail");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()


//Create Success
	cy.get('.row > :nth-child(1) > div > .ng-untouched').focus()
	  .type('Proactive messages').should('have.value','Proactive messages')
	 cy.get('.text-right > .btn').click({ force: true })
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notificationcreate_message_success");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()  


//Duplicate
    cy.get('.justify-content-between > .btn').click()
	cy.get('.row > :nth-child(1) > div > .ng-untouched').focus()
	  .type('Proactive messages').should('have.value','Proactive messages')
	 cy.get('.text-right > .btn').click({ force: true })
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notificationmessage_existed");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()  

    cy.get('.row > :nth-child(1) > div > .ng-valid').focus()
	  .type('{del}{selectall}{backspace}')
	  .type('Proactive messages111').should('have.value','Proactive messages111')
	cy.get('.text-right > .btn').click({ force: true })
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notificationcreate_message_success");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()


    cy.get('.justify-content-between > .btn').click()
    cy.get('.p-inputswitch-slider').click()
	cy.get('.row > :nth-child(1) > div > .ng-untouched').focus()
	  .type('Check active Button').should('have.value','Check active Button')
	cy.get('.p-inputswitch-slider').click()
		.then(ele => {
		ele[0].click() //Click cái thứ 2 Ele1 là từ 0-1
	})
	cy.get('.color-green').should('be.exist').and('have.contain','Enabled') 


	cy.get('.text-right > .btn').click({ force: true }).then(e => {
	cy.get('.row > :nth-child(2) > :nth-child(1) > .error-validate').should('be.exist').and('have.contain','expired_time_required')
    cy.get('.section-main > :nth-child(1) > :nth-child(6)').should('be.exist').and('have.contain','at_least_one_value')
    cy.get('.section-main > :nth-child(3)').should('be.exist').and('have.contain','at_least_one_value')
  }) //Khi bấm Save. check class .erro-validate. //


	cy.get('[placeholder="second"]').focus().type('1')	
	cy.get('.p-dropdown-label > .ng-star-inserted').click({ force: true })
	cy.get(':nth-child(1) > .p-dropdown-item > .ng-star-inserted').click({ force: true })

	cy.get('.p-dropdown-label',{ delay: 200 }).click()
	cy.get(':nth-child(1) > .p-dropdown-item', { delay: 200 }).click()
	cy.get('.list-drag-drop > :nth-child(3) > .pi').click()

	cy.get('.text-right > .btn').click({ force: true })
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notificationcreate_message_success");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()


    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)').should('have.contain','1s')

   	  cy.get('.box-small-positive')    .invoke('text')
          .then((text)=>{
           const toastText = text;

           expect(toastText).to.equal(" Active "); //TOTAL INTENTS
           //Check Text show
           })

    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(4)').click()
    cy.wait(1000)
    cy.get('.row > :nth-child(1) > div > .ng-untouched').focus()
	  .type('{del}{selectall}{backspace}')
  	  .type('Active').should('have.value', 'Active')

  	cy.get('[placeholder="Day"]').focus().type('1')
  	cy.get('[placeholder="Hour"]').focus().type('1')
  	cy.get('[placeholder="minute"]').focus().type('1')
  	cy.get('[placeholder="second"]').focus()
  	  .type('{del}{selectall}{backspace}').type('2')

  	cy.get('.p-autocomple > .p-autocomplete-multiple-container').click()
  	  .type('VIP').type('{enter}')
  	cy.get('.p-autocomplete-item').click({ force: true })
  	cy.get('.p-autocomplete-token')
  	  .should('have.contain', 'VIP')

  	cy.get('.p-dropdown-label > .ng-star-inserted').click({ force: true })
	cy.get(':nth-child(2) > .p-dropdown-item').click({ force: true })

	cy.get(':nth-child(5) > .ng-untouched > .p-autocomplete > .p-autocomplete-multiple-container')
	  .type('Quick1').type('{enter}')
	cy.get('.p-autocomplete-item').click({ force: true })
  	cy.get('.p-autocomplete-token')
  	  .should('have.contain', 'Quick1')



    
    cy.get(':nth-child(2) > .list-drag-drop > .row-proactive > .pi').click()
	cy.wait(500)
    cy.get(':nth-child(2) > .list-drag-drop').find('li').should('have.length', 0)

    cy.get('.list-drag-drop > :nth-child(1) > .pi').click()
    cy.wait(500)
    cy.get(':nth-child(2) > .list-drag-drop').find('li').should('have.length', 1)

    cy.get(':nth-child(1) > .list-drag-drop > :nth-child(1) > .pi').click()
    cy.wait(500)
    cy.get(':nth-child(2) > .list-drag-drop').find('li').should('have.length', 2)


	cy.get('.text-right > .btn').click({ force: true })
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notificationedit_message_success");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(1)').should('have.contain','Active')
    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(3)').should('have.contain','Quick1')
    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(4)').should('have.contain','')
    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(5)').should('have.contain','VIP')
   	  cy.get('.box-small-positive')    .invoke('text')
          .then((text)=>{
           const toastText = text;

           expect(toastText).to.equal(" Active "); //TOTAL INTENTS
           //Check Text show
           })

cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(4)').click()
    cy.wait(1000)


  	cy.get('[placeholder="Day"]').focus().type('{del}{selectall}{backspace}').type('0')
  	cy.get('[placeholder="Hour"]').focus().type('{del}{selectall}{backspace}').type('0')
  	cy.get('[placeholder="minute"]').focus().type('{del}{selectall}{backspace}').type('0')
	cy.get('.p-autocomple > .p-autocomplete-multiple-container > .p-autocomplete-token > .p-autocomplete-token-icon')
	  .click()
	cy.get('.text-right > .btn').click({ force: true })
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("Notificationedit_message_success");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()


    cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(2)').should('have.contain','2s')

    cy.get(':nth-child(3) > .table-quick-action > a > .vnlp-icon').click()
    cy.get(':nth-child(4) > .btn-vnlp').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationDeleted successfully");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()

    cy.get(':nth-child(2) > .table-quick-action > a > .vnlp-icon').click()
    cy.get(':nth-child(4) > .btn-vnlp').click()
    cy.get('.p-toast-message-content').invoke('text')
      .then((text)=>{
       const toastText = text;
       expect(toastText).to.equal("NotificationDeleted successfully");
       //Check noti when save successfully
      })
    //Tắt nút X khi thông báo Successfully
    cy.get('.p-toast-icon-close-icon').click()


    cy.get('#vnlp-chat-icon > img').click()

    cy.get('#vnlp-chat-input').focus()
      .type()

   })
})