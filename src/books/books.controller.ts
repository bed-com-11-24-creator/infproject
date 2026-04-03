import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    @Get()
    getAll() {
        return this.booksService.getAllBooks();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
     return this.booksService.getBookById(Number(id));
    }

  @Get('author/:author')
  getBooksByAuthor(@Param('author') author: string) {
    return this.booksService.getBooksByAuthor(author);
  }
}

