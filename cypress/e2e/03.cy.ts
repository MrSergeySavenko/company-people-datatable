describe('03 test', () => {
    it('3. проверка фильтров департаментов', () => {
        //зайти, нажать на таб
        cy.visit('http://localhost:3000/main');
        cy.wait(6000);
        cy.get('[db-name=test-sort-block]').children().contains('HR').click();

        //после нажатия проверка на отфильтровывание и клик на него
        cy.get('[db-text=peple-info-block]')
            .children()
            .eq(0)
            .should('have.text', 'Richard Davisstringhr')
            .click();

        //проверка на переход на новую страницу и контент в нем

        cy.url().should('eq', 'http://localhost:3000/details');
        cy.get('[db-test=details-name-test]').should('have.text', 'Richard Davis');
        cy.get('[db-test=back-butt-test]').click();
        cy.get('[db-text=peple-info-block]').children().eq(0).should('have.text', 'Richard Davisstringhr');

        //проверка на сброс фильтрации нажатием на Все
        cy.get('[db-name=test-sort-block]').children().contains('Все').click();
        cy.get('[db-text=peple-info-block]').children().eq(0).should('have.text', 'John Doejdandroid');
        cy.get('[db-text=peple-info-block]')
            .children()
            .last()
            .should('have.text', 'Christopher Taylorctanalytics');

        //проверка инпута
        cy.get('[db-test=input-test]').type('John');
        cy.get('[db-text=peple-info-block]').children().eq(0).should('have.text', 'John Doejdandroid');
    });
});
