describe('Slider Test', () => {

  it('Drag slider from 15 to 95', () => {

    cy.visit('https://www.testmuai.com/selenium-playground/')

    cy.contains('Drag & Drop Sliders').click()

    cy.get("input[value='15']")
      .invoke('val', 15)
      .trigger('change', { force: true })

    cy.get('#rangeSuccess')
      .should('be.visible')
      .and('have.text', '15')

  })

})