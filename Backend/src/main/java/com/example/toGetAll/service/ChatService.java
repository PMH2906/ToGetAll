package com.example.toGetAll.service;

import com.example.toGetAll.model.Chat;

import java.util.List;

public interface ChatService {
    List<Chat> findChat(String location, String foodCategory);
}
