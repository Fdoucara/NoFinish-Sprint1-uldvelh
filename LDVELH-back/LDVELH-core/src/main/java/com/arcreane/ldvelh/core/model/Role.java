package com.arcreane.ldvelh.core.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;

    @Column(nullable = false, length = 50)
    private String roleName;


    public Role(String roleName){
        this.roleName = roleName;

    }
}
