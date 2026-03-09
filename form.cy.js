describe('Input Form Test', () => {

  it('Submit form successfully', () => {

    cy.visit('https://www.testmuai.com/selenium-playground/')

    cy.viewport(414,846)

	cy.contains('Input Form Submit').click()

    cy.intercept('GET', '**/country-details').as('countries')
    cy.wait('@countries')

    cy.get('#name').should('be.visible').type('Mohammad Saleem')
    cy.get('#inputEmail4').type('test@test.com')
    cy.get('#inputPassword4').type('Test123')
    cy.get('#company').type('QA Automation')
    cy.get('#websitename').type('example.com')

    cy.get('select[name="country"]')
      .should('be.visible')
      .select('United States')

    cy.get('#inputCity').type('Amman')
    cy.get('#inputAddress1').type('Street 1')
    cy.get('#inputAddress2').type('Building 3')
    cy.get('#inputState').type('Amman')
    cy.get('#inputZip').type('11181')

    cy.contains('button','Submit')
      .scrollIntoView()
      .click({force:true})

    cy.contains('Thanks for contacting us')
      .should('be.visible')

  })

})