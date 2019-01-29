import {
  Controller,
  Get,
  HttpStatus,
  Res,
  Post,
  Body,
  Delete,
  Param,
  Patch,
} from '@nestjs/common';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async getBooks(@Res() res) {
    let status = HttpStatus.OK;
    let response = {};

    const books = await this.bookService.getBooks();
    response = { books };
    return res.status(status).json(response);
  }

  @Post()
  async addBook(@Body('book') data, @Res() res) {
    let status = HttpStatus.OK;
    let response = {};

    const book = await this.bookService.addBook(data);
    response = { book };
    return res.status(status).json(response);
  }

  @Delete(':id')
  async deleteBook(@Param('id') book_id, @Res() res) {
    let status = HttpStatus.OK;
    let response = {};

    const book = await this.bookService.deleteBook(book_id);
    if (book === false) {
      status = HttpStatus.BAD_REQUEST;
      response = {
        message: 'ไม่พบหนังสือดังกล่าว',
      };
    } else {
      response = { message: 'ลบหนังสือเรียบร้อยแล้ว' };
    }
    return res.status(status).json(response);
  }

  @Patch(':id')
  async updateBook(@Param('id') book_id, @Body('book') data, @Res() res) {
    let status = HttpStatus.OK;
    let response = {};

    const book = await this.bookService.updateBook(book_id, data);
    if (book === false) {
      status = HttpStatus.BAD_REQUEST;
      response = {
        message: 'ไม่พบหนังสือดังกล่าว',
      };
    } else {
      response = { book };
    }
    return res.status(status).json(response);
  }
}
