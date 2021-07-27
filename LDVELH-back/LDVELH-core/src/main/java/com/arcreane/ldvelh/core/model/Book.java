package com.arcreane.ldvelh.core.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashMap;
import java.util.Map;


/**
 *
 */

@Entity
@Getter
@Setter

@NamedEntityGraph(name = "book.author", attributeNodes = @NamedAttributeNode("author"))
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "ID_Author", nullable = false)
    private Author author;

//    //    private Set<Tags> types;
//    @OneToMany(cascade = CascadeType.PERSIST)
//    @ElementCollection(targetClass = Chapter.class)
//    @MapKeyColumn(name = "Chapter_Id")
//    private Map<Integer, Chapter> chapters;
////    private int globalIndexValue;


    public Book() {
        this("");
    }

    public Book(String title) {
        this.title = title;
//        chapters = new HashMap<>();
//        types = new HashSet<>();
//        types.add(Tags.CONTEMPORARY);
//        globalIndexValue = 0;
//        Chapter.setGlobalIndex(0);
    }


    public void addChapter(Chapter chapter) {
//        chapters.put(chapter.getId(), chapter);
        //globalIndexValue = Chapter.getGlobalIndex();
    }

    /*@Override
    public String toString() {
        return "Book{" +
                "title='" + title + '\'' +
                ", nb chapters= " + chapters.size() +
                '}';
    }*/

    public Chapter getChapterById(int parseInt) {
//        return chapters.get(parseInt);
return null;
    }

}