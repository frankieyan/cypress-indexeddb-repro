describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://google.ca')

    cy.window().then((win) => {
      return win.indexedDB.databases().then(db => {
        cy.log(db.toString())
      })
    })
  })
})
