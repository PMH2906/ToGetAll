package com.example.toGetAll.controller;


import com.example.toGetAll.model.Chat;
import com.example.toGetAll.service.ChatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("api/chat")
@RestController
public class ChatController {

    @Autowired
    private ChatService chatService;
    @GetMapping("/{location}/{foodCategory}")
    public List<Chat> findChat(@PathVariable("location") String location, @PathVariable("foodCategory") String foodCategory ) {

        return chatService.findChat(location,foodCategory);
    }
}
