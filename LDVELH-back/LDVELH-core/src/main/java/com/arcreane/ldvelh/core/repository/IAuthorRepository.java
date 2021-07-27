package com.arcreane.ldvelh.core.repository;

import com.arcreane.ldvelh.core.model.Author;
import com.arcreane.ldvelh.core.model.Book;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.repository.CrudRepository;


public interface IAuthorRepository extends CrudRepository<Author, Integer> {}


