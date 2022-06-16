package com.example.toGetAll.controller;

import com.example.toGetAll.dto.UserResponse;
import com.example.toGetAll.model.Users;
import com.example.toGetAll.service.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/user")
@CrossOrigin
public class UserController {

    @Autowired
    private UserServiceImpl userService;
    @Autowired
    private UserResponse userResponse;
    @Autowired
    private static final long serialVersionUID = 1L;

//    @PostMapping("/signup")
//    public Users save(@RequestBody Users user) {
//        return userService.save(user);
//    }

    @PostMapping("/signup")
    public UserResponse save(@RequestBody Users user) {
        System.out.println(user);
        return userService.save(user);
    }

    @GetMapping("/login")
    @ResponseBody
    public UserResponse findLoginUser(@RequestBody Users users) {
        String userId = users.getUserId();
        String pw = users.getPw();
        return userService.findLoginUser(userId, pw);
    }

}






