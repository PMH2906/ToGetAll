package com.example.toGetAll.controller;

import com.example.toGetAll.model.LoginForm;
import com.example.toGetAll.model.Users;
import com.example.toGetAll.service.LoginService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

@RequestMapping(value="/login",method = {RequestMethod.GET, RequestMethod.POST})
@RestController

public class LoginController {
//    @PostMapping
//    public String Login(LoginForm loginForm, HttpServletRequest req)
    @Autowired
    private LoginService loginService;

    private static final String LOGIN_MEMBER = "LOGIN_MEMBER";


   @GetMapping("/login")
   public String loginForm(@ModelAttribute("loginForm") LoginForm form) {
       return "login/loginForm";
   }

   @PostMapping("/login")
   public String login(@Validated @ModelAttribute("loginForm") LoginForm form, BindingResult bindingResult, HttpServletRequest request) {

       if (bindingResult.hasErrors()) {
           return "login/loginForm";
       }
       Users user = loginService.findLoginUser(form.getUserId(), form.getPw()); //??? DB에서 확인

       if (user == null) {
           bindingResult.reject("loginFail", "아이디 또는 비밀번호가 맞지 않습니다.");

           return "login/loginForm";

       }
       // 로그인 성공 처리

       // 세션이 있으면 있는 세션 반환, 없으면 신규 세션 생성

       HttpSession session = request.getSession();

       // 세션에 로그인 회원 정보 보관
       session.setAttribute(LOGIN_MEMBER, user);

       return "redirect:/"; // main에 정보 저장장


   }
    @PostMapping("/logout")
    public String logout(HttpServletRequest request) {

        HttpSession session = request.getSession(false);

        if (session != null) {

            session.invalidate();

        }


        return "redirect:/";


    }

}