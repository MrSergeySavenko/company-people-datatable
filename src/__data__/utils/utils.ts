import { IData, IItemsData } from '../models/coPeopleDataModels';

// export const findInObj = (query: string, data: IItemsData) => {
//     const arr: any = [];
//     let counter = 0;
//     data.forEach((item: IItemsData) => {
//         counter = 1;
//         Object.values(item).map((strItem: string) => {
//             if (
//                 strItem !== ('true' || 'false') &&
//                 typeof strItem === 'string' &&
//                 strItem.length < 15 &&
//                 counter === 1
//             ) {
//                 if (strItem?.indexOf(query) !== -1 || undefined) {
//                     counter = 0;
//                     arr.push(item);
//                 }
//             }
//         });
//     });
//     console.log(arr);
//     return arr;
// };
