package com.arcreane.ldvelh.core.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Author {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false, length = 50)
    private String name;

    @ManyToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "ID_ROLE")
    private Role role;

    public Author(String name) {
        this.name = name;
        this.role = new Role("Grand chef");
    }

}
