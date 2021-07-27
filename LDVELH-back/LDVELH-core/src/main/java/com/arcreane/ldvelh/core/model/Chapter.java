package com.arcreane.ldvelh.core.model;

import com.arcreane.ldvelh.core.repository.json.JsonChapterDeserializer;
import com.arcreane.ldvelh.core.repository.json.JsonChapterSerializer;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import org.apache.commons.lang3.ArrayUtils;


import javax.persistence.*;
import java.util.*;

/**
 * 
 */
@Data
@Entity
@JsonSerialize(using = JsonChapterSerializer.class)
@JsonDeserialize(using = JsonChapterDeserializer.class)
public class Chapter {
    //Warning, this index should be reseted when changing
    //book that will currently edited
    private static int globalIndex = 0;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String caption;
    private String text;

    @ElementCollection(targetClass = Chapter.class)
    @MapKeyColumn(name="Option_Id")
    private Map<Integer, Chapter> options;
    private boolean intro;
    private boolean end;

    /**
     * Default constructor
     */
    public Chapter() {
        this("","");
    }

    public Chapter(String text, String caption) {
        this.text = text;
        this.caption = caption;
        options = new HashMap<>();
        id = globalIndex++;
    }

  /*  public static int getGlobalIndex() {
        return globalIndex;
    }

    public static void setGlobalIndex(int globalIndex) {
        Chapter.globalIndex = globalIndex;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getCaption() {
        return caption;
    }

    public void setCaption(String caption) {
        this.caption = caption;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Map<Integer, Chapter> getOptions() {
        return options;
    }

    public void setOptions(Map<Integer, Chapter> options) {
        this.options = options;
    }

    public boolean isIntro() {
        return intro;
    }

    public void setIntro(boolean intro) {
        this.intro = intro;
    }

    public boolean isEnd() {
        return end;
    }

    public void setEnd(boolean end) {
        this.end = end;
    }

    public void addOption(Chapter chapter) {
        options.put(chapter.getId(),chapter);
    }

    public void addOption(int index) {
        options.put(index,null);
    }

    public int[] getIndexes() {
         return (int[]) ArrayUtils.toPrimitive(options.keySet().toArray(new Integer[0]));*/

    //}
/*
    public int[] getIndexes() {



        // return (int[]) ArrayUtils.toPrimitive(options.keySet().toArray(new Integer[0]));
    }*/
}