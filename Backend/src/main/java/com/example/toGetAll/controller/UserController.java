package com.example.toGetAll.controller;

import com.example.toGetAll.model.Users;
import com.example.toGetAll.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping
    public Users save(@RequestBody Users user) {
        System.out.println(user);
        return userService.save(user);
    }

}
