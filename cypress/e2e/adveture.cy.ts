describe('Adventure', () => {
    it('should visit CarvedRock home page', () => {
        cy.visit('/')
    });

    it('should open the Breithorn adventure', () => {
        cy.visit('/');
        cy.get('a[href*="/adventure/1"]').click();
        cy.get('#title').should('have.text', 'Breithorn, Pennine Alps');
    });

    it('should post a comment', () => {
        cy.visit('/');
        cy.get('a[href*="/adventure/1"]').click();

        cy.contains('Reset Comments').click()
        cy.contains('Add Comment').click();

        cy.get('#name').type('Wod')
        cy.get('#comment-text').type('What a great adventure!')
        cy.get('#add-comment-button').click();

        cy.get('div[data-test-automation="user-comments"] blockquote:last-child p')
            .should('have.text', 'What a great adventure!')

        cy.get('div[data-test-automation="user-comments"] blockquote:last-child footer')
            .should('have.text', 'Wod')

        cy.get('div[data-test-automation="user-comments"] blockquote:last-child')
            .then($el => {
                cy.wrap($el).find('p').should('have.text', 'What a great adventure!');
                cy.wrap($el).find('footer').should('have.text', 'Wod');
            })
    });

    it('should not post a comment if the comment text is missing', () =>{
        cy.visit('/');
        cy.get('a[href*="/adventure/1"]').click();
        cy.contains('Add Comment').click();
        cy.get('#name').type('Wod')
        cy.get('#add-comment-button').click();

        cy.get('div[data-test-automation="comment-text"] .text-danger').should('have.text', 'Comment is required.');
    });
})