package com.example.toGetAll.service;

import com.example.toGetAll.model.Chat;

import java.util.List;

public interface ChatService {
    Chat save(Chat chat);

    List<Chat> findChat(String location, String foodCategory);

    List<Chat> delete(Long chatNum);

    List<Chat> findAll();
}
