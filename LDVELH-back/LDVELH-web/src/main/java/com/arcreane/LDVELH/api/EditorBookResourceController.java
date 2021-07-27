package com.arcreane.LDVELH.api;

import com.arcreane.LDVELH.form.BookForm;
import com.arcreane.ldvelh.core.model.Book;
import com.arcreane.ldvelh.core.service.IService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RequestMapping("/api/book")
@Getter
@Setter
@RestController
public class EditorBookResourceController {

    @Autowired
    private IService service;


    @GetMapping()
    public Iterable<Book> list() {
        return service.getExistingBookList();
    }


    @GetMapping("/{title}")
    public Book displayDetails( @PathVariable("title") String bookTitle){

        return service.getBookByTitle(bookTitle);

    }

    /*@GetMapping("/create-form")
    public String displayForm(@ModelAttribute("bookToFill") BookForm bookToFill) {
        return "editor-create";
    }


    @PostMapping ()
    //relié au formulaire et dispo pour lui injecter les infos
    public String createBook(@Valid @ModelAttribute("bookToFill") BookForm bookToFill, BindingResult result) {
        if(result.hasErrors()) {
            return "editor-create";
        } else {
            service.addBookToLibrary(BookForm.convertToBook(bookToFill));
            return "editor-validate-create";
        }
    }


    public String getUserSelection() {
        return null;
    }


    public void startApp() {

    }

    public void showMenu(MenuType type) {

    }


    public void modifyBook() {

    }


    public void createNewChapter() {

    }


    public void saveChanges() {

    }


    public void linkOptions() {

    }


    public void setService(IService myService) {

    }*/
}
