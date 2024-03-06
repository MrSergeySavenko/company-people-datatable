import { IItemsData } from '../../src/__data__/models/coPeopleDataModels';

describe('template spec', () => {
    it('проверка а наличие департаментов и скелетона до и после ответа от сервера ', () => {
        //вход на страницу /main
        cy.visit('http://localhost:3000/main');

        let exArrDepart: any[] = [];

        //проверка на наличие скелетона и отсутвие департаментов до получения данных
        cy.get('<ItemSkeleton/>');
        cy.contains('<SortingBlock/>', 'Все');
        cy.contains('<SortingBlock/>', 'HR').should('not.exist');
        cy.get('[db-name=test-sort-block]').children().should('have.length', 1);

        //после получения данных проверка на получение всех департаментов
        cy.wait(6000)

            .request('http://localhost:8000/items')
            .then((data) => {
                data.body.items.map((item: IItemsData) => {
                    return exArrDepart.push(item.department);
                });
                cy.get('[db-name=test-sort-block]')
                    .children()
                    .should('have.length', exArrDepart.length + 1);
                cy.get('[db-text=peple-info-block]').children().should('have.length', data.body.items.length);
            });

        //проверка API и получение масиввов для проверки

        //проверка на отсуствие скелетона после получения данных
        cy.get('[db-name=skeleton]').should('not.exist');
    });
});

//вопросы к Илье почему если я не провожу операции в реквесте, то массив, который возвращаю,
//считается пустым? Типо я консольложу в реквесте операцию пуш, и он все отображает нормально,
//но стоит законсольложить после него, то это ноль, причем в сапресе код не идет дальше, пока не выполнит все что выше,
//следовательно и консоль лог после реквета не должен проходить раньше положенного, странно
