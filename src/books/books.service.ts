import { Injectable } from '@nestjs/common';
import { title } from 'process';

@Injectable()
export class BooksService {

    private books = [
        {id: 1, title: 'The Hobbit', author: 'J.R.R. Tolkien', year: 1937 },
        {id: 2, title: '1984', author: 'George Orwell', year: 1949 },
        {id: 3, title: 'Harry potter', author: 'J.K. Rowling', year: 1997 },
        {id: 4, title: 'The alchemist', author: 'paulo coelho', year: 1988 },
    ];

  getAllBooks() {
    return this.books;
  }

  getBookById(id: number) {
    const book = this.books.find(book => book.id === id);

    if (!book) {
        return { message: 'Book wainvera fungo sulipeza' };
    }

    return book;
  }

  getBooksByAuthor(author: string) {
    const result = this.books.filter(
      book => book.author.toLowerCase() === author.toLowerCase()
    );

    return result.length > 0
      ? result
      : { message: 'No books found for this author' };
  }
}



