package com.example.toGetAll.controller;

import com.example.toGetAll.dto.LoginResponse;
import com.example.toGetAll.model.Users;
import com.example.toGetAll.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("login")
@CrossOrigin
public class UserController {

    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private LoginResponse loginResponse;
    @Autowired
    private static final long serialVersionUID = 1L;

    @PostMapping("/signup")
    public Users save(@RequestBody Users user) {
        return userService.save(user);
    }


    @GetMapping
    @ResponseBody
    public LoginResponse findLoginUser(@RequestBody Users users) {
        String userId = users.getUserId();
        String pw = users.getPw();
        return userService.findLoginUser(userId, pw);
    }

}






