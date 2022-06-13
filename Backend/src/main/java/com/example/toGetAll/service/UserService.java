package com.example.toGetAll.service;

import com.example.toGetAll.model.Users;

public interface UserService {
    Users findLoginUser(String userId,String pw );
}
