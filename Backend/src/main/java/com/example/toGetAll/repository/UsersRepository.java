package com.example.toGetAll.repository;

import com.example.toGetAll.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long> {

    List<Users> findByUserId(String userId);

    Users findByUserIdAndPw(String userId, String pw);
}
