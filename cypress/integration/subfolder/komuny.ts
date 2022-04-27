describe('WEB & API', () => {

  type Url = string

  it('WEB', () => {

    const url: Url = 'http://143.198.117.99:88/login'
    cy.visit(url)
    cy.get('#default-01').type("test@user.com")
    cy.get('#password').type("123456")
    cy.get('.btn').click()
    cy.contains('Dashboard')
  })

})
