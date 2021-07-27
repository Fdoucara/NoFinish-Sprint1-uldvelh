package com.arcreane.LDVELH.controller;

import com.arcreane.LDVELH.form.BookForm;
import com.arcreane.ldvelh.core.controller.MenuType;
import com.arcreane.ldvelh.core.model.Author;
import com.arcreane.ldvelh.core.model.Chapter;
import com.arcreane.ldvelh.core.model.Tags;
import com.arcreane.ldvelh.core.service.IService;
import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;


@RequestMapping("/editor")
@Getter
@Setter
@Controller
public class EditorBookController {

    @Autowired
    private IService service;


    @GetMapping("/home")
    public String display(Model model) {
        System.out.println("On passe ici aussi");
        model.addAttribute("BookList",service.getExistingBookList());
        return "editor-home";
    }

    @GetMapping("/{title}")
    public String displayDetails( @PathVariable("title") String bookTitle, Model model){

        var book = service.getBookByTitle(bookTitle);
        if (book !=null) {
            model.addAttribute("book", book);
            return "editor-details";
        }
        else return "redirect: /editor/home";

    }

    @GetMapping("/create-form")
    public String displayForm(@ModelAttribute("bookToFill") BookForm bookToFill) {
        return "editor-create";
    }


    @PostMapping ()
    //relié au formulaire et dispo pour lui injecter les infos
    public String createBook(@Valid @ModelAttribute("bookToFill") BookForm bookToFill, BindingResult result) {
        if(result.hasErrors()) {
            return "editor-create";
        } else {
            Author author = new Author("toto");
//            Chapter intro = new Chapter();
            var book = BookForm.convertToBook(bookToFill);
//            book.addChapter(intro);
            book.setAuthor(author);
            service.addBookToLibrary(book);

            return "editor-validate-create";

        }
    }


    @GetMapping("/list")
    public String displayList() {
        return "book-list";
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

    }
}
