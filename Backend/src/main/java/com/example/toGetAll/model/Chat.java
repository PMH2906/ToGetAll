package com.example.toGetAll.model;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@ToString
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Entity
public class Chat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "CHAT_NUM")
    private Long chatNum;

    @Column(nullable = false)
    private String location;

    @Column(name = "food_category", nullable = false)
    private String foodCategory;

    @Column(nullable = false)
    private String title;

    @Column(name = "limited_person", nullable = false)
    private final int limitedPerson = 2;

}
