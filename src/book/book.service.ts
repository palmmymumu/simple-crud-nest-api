import { Injectable, Inject } from '@nestjs/common';
import { Book } from './model/book.model';

@Injectable()
export class BookService {
  constructor(@Inject('bookRepo') private readonly book: typeof Book) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getBooks() {
    return await this.book.findAll();
  }

  async addBook(book: Book) {
    return await this.book.create(book);
  }

  async deleteBook(book_id: number) {
    const data = await this.book.findById(book_id);
    if (data) {
      return await data.destroy();
    }
    return false;
  }

  async updateBook(book_id: number, book: Book) {
    const data = await this.book.findById(book_id);
    if (data) {
      return await data.update(book);
    }
    return false;
  }
}
