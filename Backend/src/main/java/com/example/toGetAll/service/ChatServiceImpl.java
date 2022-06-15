package com.example.toGetAll.service;

import com.example.toGetAll.model.Chat;
import com.example.toGetAll.repository.ChatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ChatServiceImpl  implements ChatService{

    @Autowired
    private ChatRepository chatRepository;

    @Override
    public Chat save(Chat chat) {
        return chatRepository.save(chat);
    }

    @Override
    public List<Chat> findChat(String location, String foodCategory){
        return chatRepository.findByLocationAndFoodCategory(location, foodCategory);
    }

    @Override
    public List<Chat> delete(Long chatNum) {
        final Optional<Chat> foundChat = chatRepository.findByChatNum(chatNum);

        foundChat.ifPresent(chat -> {
            chatRepository.delete(chat);
        });

        return chatRepository.findAll();
    }

    @Override
    public List<Chat> findAll() {
        return chatRepository.findAll();
    }
}
