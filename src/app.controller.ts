import { Controller, Delete, Post, Put, Get } from "@nestjs/common";


@Controller("book")
export class BookController {
    // Add Book
    @Post("/add")
    addBook() : string {
        return "This will add a book";
    }
    // Delete Book.
    @Delete("/delete")
    deleteBook() : string {
        return "This is for deleting book";
    }
    // Update Book.
    @Put("/update")
    updateBook() : string {
        return "This will update the book";
    }
    // Find Book.
    @Get("/findAll")
    findAllBooks() : string {
        return "This will find all books"
    }
}