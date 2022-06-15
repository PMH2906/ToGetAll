package com.example.toGetAll.dto;

import com.example.toGetAll.model.Users;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Repository
@Setter
@Getter
@Component
public class LoginResponse {
    private String msg;
    private Users user;
}
