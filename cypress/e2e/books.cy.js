describe('Books', () => {
  it('can list, show, create, edit and delete books', () => {
    // List books
    cy.visit('/')
      .get('[data-cy=link-to-books]').click()
    // Create books
    cy.get('[href="/livros/criar"]').click()
      .get('[data-cy=input-book-title]')
      .type('New book from Cypress')
      .get('[data-cy=btn-create-book]').click()
      .get('[data-cy=back-router]').click()
      .get('[data-cy=book-list]')
      .contains('New book from Cypress')
    // Show book
    cy.get('[data-cy^=link-to-visit-]').last().click()
      .get('h1').should('contain.text', 'New book from Cypress')
      .get('[data-cy=back-router]').click()
    // Edit book
    cy.get('[data-cy^=link-to-edit-book-]').last().click()
      .get('[data-cy=input-book-title]')
      .clear()
      .type('Book Edited from Cypress')
      .get('[data-cy=btn-update-book]').click()
      .get('[data-cy=book-list]')
      .contains('Book Edited from Cypress')
    // Delete Book
    cy.get('[data-cy^=link-to-delete-book]').last().click()
      .get('[data-cy=book-list]')
      .last().should('not.contain.text', 'Book Edited from Cypress')
  })
})