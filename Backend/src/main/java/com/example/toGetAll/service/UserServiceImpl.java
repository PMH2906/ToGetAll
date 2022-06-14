package com.example.toGetAll.service;

import com.example.toGetAll.dto.LoginResponse;
import com.example.toGetAll.model.Users;
import com.example.toGetAll.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UsersRepository usersRepository;
    @Autowired
    private LoginResponse loginResponse;

    @Override
    public Users save(Users user) {
        return usersRepository.save(user);
    }



    public LoginResponse findLoginUser(String userId, String pw) {
        final Users loginUser;
        final List<Users> foundUsersById = usersRepository.findByUserId(userId);
        final Users foundUsersByIdAndPw = usersRepository.findByUserIdAndPw(userId, pw);

        System.out.println(userId + pw);
        System.out.println(foundUsersByIdAndPw);

        if (foundUsersById.isEmpty()){
            loginResponse.setMsg("아이디가 존재하지 않습니다.");
        } else {
            if (foundUsersByIdAndPw == null) {
                loginResponse.setMsg("비밀번호를 다시 입력하세요.");
            } else {
                System.out.println(foundUsersByIdAndPw);
                loginResponse.setUser(foundUsersByIdAndPw);
                String loginNickName = foundUsersByIdAndPw.getNickName();
                loginResponse.setMsg(loginNickName + "님 환영합니다!");
                return loginResponse;
            }
        }
        return loginResponse;

    }

}
