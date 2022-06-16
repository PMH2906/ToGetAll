package com.example.toGetAll.service;

import com.example.toGetAll.dto.UserResponse;
import com.example.toGetAll.model.Users;

public interface UserService {
//    Users save(Users user);

    UserResponse save(Users user);

    UserResponse findLoginUser(String userId, String pw);


}
