package com.example.toGetAll.controller;

import com.example.toGetAll.dto.LoginResponse;
import com.example.toGetAll.model.Chat;
import com.example.toGetAll.model.Users;
import com.example.toGetAll.service.ChatServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/products/main2")
@CrossOrigin
public class ChatController {

    @Autowired
    private ChatServiceImpl chatService;

    @PostMapping
    public Chat save(@RequestBody Chat chat) {
        return chatService.save(chat);
    }

    @GetMapping("/{location}/{foodCategory}")
    public List<Chat> findChat(@PathVariable("location") String location, @PathVariable("foodCategory") String foodCategory ) {
        return chatService.findChat(location, foodCategory);
    }

    @DeleteMapping("/{id}")
    public List<Chat> delete(@PathVariable("id") Long chatNum) {
        return chatService.delete(chatNum);
    }

    @GetMapping
    public List<Chat> findAll() {
        return chatService.findAll();
    }

}
