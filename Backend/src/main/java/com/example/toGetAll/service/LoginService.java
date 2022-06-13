package com.example.toGetAll.service;

import com.example.toGetAll.model.Users;

public interface LoginService {
    Users findLoginUser(String userId, String pw );
}
