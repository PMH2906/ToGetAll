package com.example.toGetAll.controller;

import com.example.toGetAll.model.Chat;
import com.example.toGetAll.service.ChatServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/chat")
@CrossOrigin("*")
public class ChatController {

    @Autowired
    private ChatServiceImpl chatService;

    @PostMapping("/register")
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
}