package com.example.toGetAll.service;

import com.example.toGetAll.dto.UserResponse;
import com.example.toGetAll.model.Users;

public interface UserService {
    UserResponse save(Users user);

    UserResponse findLoginUser(String userId, String pw);


}