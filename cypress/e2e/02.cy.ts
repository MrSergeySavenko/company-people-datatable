describe('02 test', () => {
    it('отлов плохих данных', async () => {
        cy.intercept('GET', 'http://localhost:8000/items', {
            statusCode: 500,
        }).as('stop');

        cy.visit('http://localhost:3000/main');
        cy.wait('@stop');

        cy.get('[db-name=test-sort-block]').children().should('have.length', 1);
        cy.get('[db-text=peple-info-block]').children().should('have.length', 0);
        cy.get('[db-test=error-window-test]').should('exist');
    });
});
