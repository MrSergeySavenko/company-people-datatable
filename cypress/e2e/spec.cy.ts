import { last } from 'cypress/types/lodash';
import { IData, IItemsData } from '../../src/__data__/models/coPeopleDataModels';

describe('template spec', () => {
    // it('1. проверка а наличие департаментов и скелетона до и после ответа от сервера ', () => {
    //     //вход на страницу /main
    //     cy.visit('http://localhost:3000/main');

    //     let exArrDepart: any[] = [];
    //     let exArrData = [];

    //     //проверка на наличие скелетона и отсутвие департаментов до получения данных
    //     cy.get('<ItemSkeleton/>');
    //     cy.contains('<SortingBlock/>', 'Все');
    //     cy.contains('<SortingBlock/>', 'HR').should('not.exist');
    //     cy.get('[db-name=test-sort-block]').children().should('have.length', 1);

    //     //после получения данных проверка на получение всех департаментов
    //     cy.wait(6000)

    //         .request('http://localhost:8000/items')
    //         .then((data) => {
    //             data.body.items.map((item: IItemsData) => {
    //                 return exArrDepart.push(item.department);
    //             });
    //             cy.get('[db-name=test-sort-block]')
    //                 .children()
    //                 .should('have.length', exArrDepart.length + 1);
    //             cy.get('[db-text=peple-info-block]').children().should('have.length', data.body.items.length);
    //         });

    //     //проверка API и получение масиввов для проверки

    //     //проверка на отсуствие скелетона после получения данных
    //     cy.get('[db-name=skeleton]').should('not.exist');
    // });

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

//     it('4. проверка деталки и поиска', () => {
//         //проверка открытия модального окна
//         cy.visit('http://localhost:3000/main');
//         cy.get('[db-test=modal-window-test]').should('not.exist');
//         cy.get('[db-test=modal-butt-test]').click();
//         cy.get('[db-test=modal-window-test]').should('exist');
//         cy.get('[db-test=all-sorting-wrapper]').children().should('have.length', 3);

//         //проверка сортировки по алфавиту в модальном окне
//         cy.wait(6000).get('[db-test=modal-window-test]').should('exist');
//         cy.contains('По алфавиту').should('exist').click();
//         cy.get('[db-test=clos-butt]').click().get('[db-test=modal-window-test]').should('not.exist');

//         let exArrData: Array<IItemsData> = [];

//         cy.request('http://localhost:8000/items').then((data) => {
//             exArrData = data.body.items.map((item: IItemsData) => {
//                 return item;
//             });
//             cy.get('[db-text=peple-info-block]')
//                 .children()
//                 .eq(0)
//                 .should('not.have.text', exArrData[0].firstName);
//             cy.get('[db-text=peple-info-block]')
//                 .children()
//                 .last()
//                 .should('not.have.text', exArrData[exArrData.length - 1].firstName);
//             cy.get('[db-text=peple-info-block]')
//                 .children()
//                 .eq(0)
//                 .should('have.text', 'Boby Jonesbjmanagement');
//             cy.get('[db-text=peple-info-block]')
//                 .children()
//                 .last()
//                 .should('have.text', 'Thomas LopezTech Leadbackend');
//         });

//         //проверка сортировки по дате в модальном окне
//         cy.get('[db-test=modal-butt-test]').click();
//         cy.get('[db-test=modal-window-test]').should('exist');
//         cy.contains('По дню рождения').should('exist').click();
//         cy.get('[db-test=clos-butt]').click().get('[db-test=modal-window-test]').should('not.exist');

//         cy.request('http://localhost:8000/items').then((data) => {
//             exArrData = data.body.items.map((item: IItemsData) => {
//                 return item;
//             });
//             cy.get('[db-text=peple-info-block]')
//                 .children()
//                 .eq(0)
//                 .should('not.have.text', exArrData[0].firstName);
//             cy.get('[db-text=peple-info-block]')
//                 .children()
//                 .last()
//                 .should('not.have.text', exArrData[exArrData.length - 1].firstName);
//             cy.get('[db-text=peple-info-block]')
//                 .children()
//                 .eq(0)
//                 .should('have.text', 'Christopher Taylorctanalytics24 ноя');
//             cy.get('[db-text=peple-info-block]')
//                 .children()
//                 .last()
//                 .should('have.text', '1973John Doejdandroid24 янв');
//         });

//         cy.get('[db-test=date-line-test]').should('exist');

//         //проверка деталки
//         cy.get('[db-text=peple-info-block]').children().eq(0).click();
//         cy.url().should('eq', 'http://localhost:3000/details');
//         cy.get('[db-test=details-name-test]').should('have.text', 'Christopher Taylor');
//         cy.get('[db-test=back-butt-test]').click();
//         cy.url().should('eq', 'http://localhost:3000/main');

//         //проверка на сохранение данных в том же виде
//         cy.get('[db-text=peple-info-block]')
//             .children()
//             .eq(0)
//             .should('have.text', 'Christopher Taylorctanalytics24 ноя');
//         cy.get('[db-text=peple-info-block]')
//             .children()
//             .last()
//             .should('have.text', '1973John Doejdandroid24 янв');

//         //проверка на оюратную сортировку юез каких-либо флагов
//         cy.get('[db-test=modal-window-test]').should('not.exist');
//         cy.get('[db-test=modal-butt-test]').click();
//         cy.get('[db-test=modal-window-test]').should('exist');
//         cy.contains('Без сортировки').should('exist').click();
//         cy.get('[db-test=clos-butt]').click().get('[db-test=modal-window-test]').should('not.exist');

//         cy.get('[db-text=peple-info-block]').children().eq(0).should('have.text', 'John Doejdandroid');
//         cy.get('[db-text=peple-info-block]')
//             .children()
//             .last()
//             .should('have.text', 'Christopher Taylorctanalytics');
//     });
// });

//вопросы к Илье почему если я не провожу операции в реквесте, то массив, который возвращаю,
//считается пустым? Типо я консольложу в реквесте операцию пуш, и он все отображает нормально,
//но стоит законсольложить после него, то это ноль, причем в сапресе код не идет дальше, пока не выполнит все что выше,
//следовательно и консоль лог после реквета не должен проходить раньше положенного, странно
