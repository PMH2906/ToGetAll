package com.example.toGetAll.model;

import lombok.*;

import javax.persistence.*;


@Getter
@Setter
@ToString
@AllArgsConstructor
@RequiredArgsConstructor
@Builder
@Entity
public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String userId;

    @Column(nullable = false)
    private String pw;

    @Column(nullable = false)
    private String name;

    @Column(name = "nickname", unique = true, nullable = false)
    private String nickName;

    @Column(name = "prefer_food_category")
    private String preferFoodCategory;

    private String location;

    @Column(name = "caution_count")
    private final int cautionCount = 0;

    @ManyToOne
    @JoinColumn(name = "CHAT_NUM")
    private Chat chat;

}
