describe('Random riddle display', () => {
    it('see airport details and random riddle', () => {
        // Random riddle id stub
        // /api/random-riddle
        // { id: 'RIDDLE_ID' }

        // Riddle details stub
        // /api/riddle/{RIDDLE_ID}
        // {
        //     id: 'RIDDLE_ID',
        //     contents: 'Riddle contents',
        //     answers: [
        //         { id: '1', text: 'A holding pattern' },
        //         { id: '2', text: 'An obstacle/tower' },
        //         { id: '3', text: 'A runway intersection' },
        //     ],
        // };

        cy.visit('/');

        cy.get('[data-test="work-interval"]').should('be.visible');
        cy.get('[data-test="timestamp"]').should('be.visible');

        cy.get('[data-test="entry-control"]').click();

        cy.url().contains('/riddle/RIDDLE_ID');
        cy.contains('Riddle contents').should('be.visible');
    });
});
