package com.arcreane.ldvelh.core.repository;

import com.arcreane.ldvelh.core.model.Book;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;


public interface IRepository extends CrudRepository<Book, Integer> {

    Book findBookByTitle(String bookTitle);

    //@Query("SELECT book from Book book inner join fetch book.author")

    @EntityGraph(value="book.author", type = EntityGraph.EntityGraphType.FETCH)
    Iterable<Book>findAll();

 /*   Book addBook(Book book);

    List<Book> listLibraryBooks();

    Book getBook(int index);

    void saveCover(Book book);*/
}
