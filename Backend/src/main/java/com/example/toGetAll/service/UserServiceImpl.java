package com.example.toGetAll.service;

import com.example.toGetAll.dto.UserResponse;
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
    private UserResponse userResponse;

    @Override
    public UserResponse save(Users user) {
        String userId = user.getUserId();
        String nickName = user.getNickName();
        List<Users> foundUserById = usersRepository.findByUserId(userId);
        List<Users> foundUserByNickName = usersRepository.findByNickName(nickName);

        if (foundUserById.isEmpty() && foundUserByNickName.isEmpty() && user.getUserId() != null && user.getNickName() != null){
            userResponse.setUser(user);
            userResponse.setMsg("회원가입이 성공적으로 처리되었습니다.");
            usersRepository.save(user);
        } else {
            if(foundUserById.isEmpty() && user.getUserId() != null){
                userResponse.setMsg("중복된 닉네임입니다.");
            } else if (foundUserByNickName.isEmpty() && user.getNickName() != null){
                userResponse.setMsg("중복된 id입니다.");
            } else {
                userResponse.setMsg("정보를 입력해주세요.");
            }
        }

        return userResponse;
    }

    @Override
    public UserResponse findLoginUser(String userId, String pw) {
        final List<Users> foundUsersById = usersRepository.findByUserId(userId);
        final Users foundUsersByIdAndPw = usersRepository.findByUserIdAndPw(userId, pw);

        if (foundUsersById.isEmpty()){
            userResponse.setMsg("아이디가 존재하지 않습니다.");
        } else {
            if (foundUsersByIdAndPw == null) {
                userResponse.setMsg("비밀번호를 다시 입력하세요.");
            } else {
                System.out.println(foundUsersByIdAndPw);
                userResponse.setUser(foundUsersByIdAndPw);
                String loginNickName = foundUsersByIdAndPw.getNickName();
                userResponse.setMsg(loginNickName + "님 환영합니다!");
                return userResponse;
            }
        }
        return userResponse;
    }

}