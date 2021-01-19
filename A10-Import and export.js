context('Import and export', () => {
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
    cy.get(':nth-child(3) > .js-panel-title').click() //Open Conversations

    cy.get(':nth-child(10) > a').click()

    cy.get('.pt-3').should('have.contain','Import and export')

    cy.get('.note-title')
      .should($el => {
        expect($el[0].textContent).to.contain('Home / Conversations / Import and export')
      })

//Import Export NLP Dataset
cy.get(':nth-child(3) > .m-0').should('have.contain','Import Export NLP Dataset')
cy.get('.middle-content > :nth-child(3) > :nth-child(2) > .btn').click()
.should('be.visible')
cy.get(':nth-child(3) > :nth-child(2) > span').should('have.contain','Export a JSON backup file of the dataset.')
cy.get(':nth-child(3) > .mt-3 > .btn').should('be.visible') // Cần sửa lại thay Visible thành 1 cái khác...
cy.get(':nth-child(3) > .mt-3 > .btn').click().should('have.contain','Replace data from .zip file')
cy.get('.p-dialog-content > .ng-tns-c21-17 > :nth-child(1)')
  .should('have.contain','Replace the current dataset version with a new one. Note: All intents and entities in the older version will be deleted. File format: JSON')
cy.get('.width-100 > input').should('not.focus')
cy.get('.choosse-image').should('be.enabled')
cy.get('.p-dialog-content > .ng-tns-c21-17 > :nth-child(3)')
  .should('have.contain','The system accepts executables in .zip format. You can download the sample content here.(Click to download sample file)')
cy.get('.text-vnlp-1').should('be.visible')
cy.get('.p-dialog-header-close-icon').click()
cy.get(':nth-child(3) > .mt-3 > .btn').click()
cy.get('.btn-vnlp').should('be.disabled')
cy.get('.btn-common').click()

cy.get('#p-dialog-12-label > .ng-tns-c21-17')
cy.get(':nth-child(3) > .mt-3 > span').should('have.contain','Replace the current dataset version with a new one. Note: All intents and entities in the older version will be deleted. File format: JSON')

//import_export_dialog_flow_dataset
cy.get(':nth-child(4) > .m-0').should('have.contain','import_export_dialog_flow_dataset')
cy.get(':nth-child(4) > :nth-child(2) > .btn').click()
.should('be.visible')
cy.get(':nth-child(4) > :nth-child(2) > span').should('have.contain','Export a JSON backup file of the dataset.') 
cy.get(':nth-child(4) > .mt-3 > .btn').should('be.visible')
cy.get(':nth-child(4) > .mt-3 > .btn').click()
cy.get('.p-dialog-header').should('have.contain','Replace data from .zip file')
cy.get('.p-dialog-content > .ng-tns-c21-16 > :nth-child(1)')
  .should('have.contain','Replace the current dataset version with a new one. Note: All intents and entities in the older version will be deleted. File format: JSON')
cy.get('.width-100 > input').should('not.focus')
cy.get('.choosse-image').should('be.enabled')
cy.get('.p-dialog-content > .ng-tns-c21-16 > :nth-child(3)')
  .should('have.contain','The system accepts executables in .zip format. You can download the sample content here.(Click to download sample file)')
cy.get('.text-vnlp-1').should('be.visible')
cy.get('.p-dialog-header-close-icon').click()
cy.get(':nth-child(4) > .mt-3 > .btn').click()
cy.get('.btn-vnlp').should('be.disabled')
cy.get('.btn-common').click()


     })
  })