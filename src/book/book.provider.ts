import { Book } from './model/book.model';

export const BookProviders = [
  {
    provide: 'bookRepo',
    useValue: Book,
  },
];


