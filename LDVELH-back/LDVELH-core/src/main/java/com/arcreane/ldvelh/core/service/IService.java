package com.arcreane.ldvelh.core.service;

import com.arcreane.ldvelh.core.model.Book;
import com.arcreane.ldvelh.core.model.Chapter;
import com.arcreane.ldvelh.core.repository.IRepository;
import java.util.*;

public interface IService {
    void addBookToLibrary(Book book);

    Iterable<Book> getExistingBookList();

    Book getBookByTitle(String bookTitle);

    void update(Book book);

    void parseBookForMissingChapter(Book book);

    void addBookCover(Book scannedBook);

    Chapter addChapter(Book currentBook);

    void setRepository(IRepository myRepository);
}
