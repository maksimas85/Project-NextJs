import {FirstLevelMenuItem} from "../interfaces/menu.interface";
import {TopLevelCategory} from "../interfaces/page.interface";
import Courses from './icons/education.svg'
import Services from './icons/education.svg'
import Book from './icons/education.svg'
import Products from './icons/education.svg'

export const firstLevelMenu: FirstLevelMenuItem[] = [
    { route: 'courses', name: 'Курсы', icon: <Courses/>,
        id: TopLevelCategory.Courses },
    { route: 'services', name: 'Сервисы', icon: <Services/>,
        id: TopLevelCategory.Services },
    { route: 'book', name: 'Книги', icon: <Book/>,
        id: TopLevelCategory.Books },
    { route: 'products', name: 'Продукты', icon: <Products/>,
        id: TopLevelCategory.Products },
]

export const priceRu = (price: number): string => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ').concat(' ₽');

export const declOfNum = (number: number, titles: [string, string, string]): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    return number + ' ' + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
};