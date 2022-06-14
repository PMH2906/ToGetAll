package com.example.toGetAll.controller;

import com.example.toGetAll.model.Users;
import com.example.toGetAll.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("api/users")
@RestController
public class UserController {

    @Autowired
    private UserService userService;
    @GetMapping("/{userId}/{pw}")
    public Users findLoginUser(@PathVariable("userId") String userId, @PathVariable("pw") String pw ) {
    //public List<Users> findAll(@RequestBody Login lo) {
        return userService.findLoginUser(userId,pw);
    }
}
