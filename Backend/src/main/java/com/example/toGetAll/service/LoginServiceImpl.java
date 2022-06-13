package com.example.toGetAll.service;

import com.example.toGetAll.model.Users;
import com.example.toGetAll.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LoginServiceImpl implements LoginService{
    @Autowired
    private UsersRepository repository;

    public Users findLoginUser(String userId, String pw ) {
        final Users loginUser;
        final List<Users> foundUsersById = repository.findByUserId(userId);
        if (foundUsersById.isEmpty()){
            System.out.println("아이디가 존재하지 않습니다. 회원가입 하세요.");
        } else {
            Users foundUsersByIdAndPw = repository.findByUserIdAndPw(userId, pw);
            if (foundUsersByIdAndPw==null) {
                System.out.println("비밀번호가 틀렸습니다.");
            } else {
                System.out.println("로그인 되었습니다.");
                return foundUsersByIdAndPw;
            }

        }
        return null;

    }


}
