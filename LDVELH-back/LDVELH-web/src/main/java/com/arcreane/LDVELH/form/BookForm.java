package com.arcreane.LDVELH.form;

import com.arcreane.ldvelh.core.model.Book;
import com.arcreane.ldvelh.core.model.Chapter;
import com.arcreane.ldvelh.core.model.Tags;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

/**
 * 
 */
@Getter
@Setter
public class BookForm {

    @NotBlank(message="Ce champs ne doit pas être vide !") // msg non traduit + texte par default ds javafx.validation
    private String title;
    @NotEmpty
    private Set<Tags> types;
    private Map<Integer, Chapter> chapters;
    private int globalIndexValue;

    public BookForm(){
        this(null);
    }

    public BookForm(String title) {
        this.title = title;
        chapters = new HashMap<>();
        types = new HashSet<>();
        globalIndexValue = 0;
//        Chapter.setGlobalIndex(0);
   }

    public static Book convertToBook(BookForm bookToFill) {
        Book book = new Book(bookToFill.getTitle());
        //book.setTypes((bookToFill.getTypes()));
        return book;
    }

}