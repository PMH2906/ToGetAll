package com.example.toGetAll.service;

import com.example.toGetAll.dto.LoginResponse;
import com.example.toGetAll.model.Users;

public interface UserService {
    Users save(Users user);

    LoginResponse findLoginUser(String userId, String pw);
}
