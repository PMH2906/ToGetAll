package com.example.toGetAll.service;

import com.example.toGetAll.model.Chat;
import com.example.toGetAll.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatServiceImpl  implements ChatService{

    @Autowired
    private ChatRepository repository;
    public List<Chat> findChat(String location, String foodCategory){
        return repository.findByLocationAndFoodCategory(location,foodCategory);
    }
}
