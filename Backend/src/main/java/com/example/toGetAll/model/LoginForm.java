package com.example.toGetAll.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Column;

// 세션에 담을 정보
@Getter
@Setter
public class LoginForm {
    private String userId;
    private String pw;
//    private String name;
//    private String nickName;
}
