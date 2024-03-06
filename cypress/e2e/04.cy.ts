import { IItemsData } from '../../src/__data__/models/coPeopleDataModels';

describe('04 test', () => {
    it('4. проверка деталки и поиска', () => {
        //проверка открытия модального окна
        cy.visit('http://localhost:3000/main');
        cy.get('[db-test=modal-window-test]').should('not.exist');
        cy.get('[db-test=modal-butt-test]').click();
        cy.get('[db-test=modal-window-test]').should('exist');
        cy.get('[db-test=all-sorting-wrapper]').children().should('have.length', 3);

        //проверка сортировки по алфавиту в модальном окне
        cy.wait(6000).get('[db-test=modal-window-test]').should('exist');
        cy.contains('По алфавиту').should('exist').click();
        cy.get('[db-test=clos-butt]').click().get('[db-test=modal-window-test]').should('not.exist');

        let exArrData: Array<IItemsData> = [];

        cy.request('http://localhost:8000/items').then((data) => {
            exArrData = data.body.items.map((item: IItemsData) => {
                return item;
            });
            cy.get('[db-text=peple-info-block]')
                .children()
                .eq(0)
                .should('not.have.text', exArrData[0].firstName);
            cy.get('[db-text=peple-info-block]')
                .children()
                .last()
                .should('not.have.text', exArrData[exArrData.length - 1].firstName);
            cy.get('[db-text=peple-info-block]')
                .children()
                .eq(0)
                .should('have.text', 'Boby Jonesbjmanagement');
            cy.get('[db-text=peple-info-block]')
                .children()
                .last()
                .should('have.text', 'Thomas LopezTech Leadbackend');
        });

        //проверка сортировки по дате в модальном окне
        cy.get('[db-test=modal-butt-test]').click();
        cy.get('[db-test=modal-window-test]').should('exist');
        cy.contains('По дню рождения').should('exist').click();
        cy.get('[db-test=clos-butt]').click().get('[db-test=modal-window-test]').should('not.exist');

        cy.request('http://localhost:8000/items').then((data) => {
            exArrData = data.body.items.map((item: IItemsData) => {
                return item;
            });
            cy.get('[db-text=peple-info-block]')
                .children()
                .eq(0)
                .should('not.have.text', exArrData[0].firstName);
            cy.get('[db-text=peple-info-block]')
                .children()
                .last()
                .should('not.have.text', exArrData[exArrData.length - 1].firstName);
            cy.get('[db-text=peple-info-block]')
                .children()
                .eq(0)
                .should('have.text', 'Christopher Taylorctanalytics24 ноя');
            cy.get('[db-text=peple-info-block]')
                .children()
                .last()
                .should('have.text', '1973John Doejdandroid24 янв');
        });

        cy.get('[db-test=date-line-test]').should('exist');

        //проверка деталки
        cy.get('[db-text=peple-info-block]').children().eq(0).click();
        cy.url().should('eq', 'http://localhost:3000/details');
        cy.get('[db-test=details-name-test]').should('have.text', 'Christopher Taylor');
        cy.get('[db-test=back-butt-test]').click();
        cy.url().should('eq', 'http://localhost:3000/main');

        //проверка на сохранение данных в том же виде
        cy.get('[db-text=peple-info-block]')
            .children()
            .eq(0)
            .should('have.text', 'Christopher Taylorctanalytics24 ноя');
        cy.get('[db-text=peple-info-block]')
            .children()
            .last()
            .should('have.text', '1973John Doejdandroid24 янв');

        //проверка на оюратную сортировку юез каких-либо флагов
        cy.get('[db-test=modal-window-test]').should('not.exist');
        cy.get('[db-test=modal-butt-test]').click();
        cy.get('[db-test=modal-window-test]').should('exist');
        cy.contains('Без сортировки').should('exist').click();
        cy.get('[db-test=clos-butt]').click().get('[db-test=modal-window-test]').should('not.exist');

        cy.get('[db-text=peple-info-block]').children().eq(0).should('have.text', 'John Doejdandroid');
        cy.get('[db-text=peple-info-block]')
            .children()
            .last()
            .should('have.text', 'Christopher Taylorctanalytics');
    });
});
