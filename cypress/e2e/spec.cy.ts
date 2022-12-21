describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://google.ca')

    cy.window().then({ timeout: 12000 }, (win) => {
      return win.indexedDB.databases().then(db => {
        cy.log(db.toString())
      })
    })
  })
})
