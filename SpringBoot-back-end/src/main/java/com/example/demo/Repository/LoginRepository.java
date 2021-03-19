package com.example.demo.Repository;

import com.example.demo.model.Auth;
import com.example.demo.model.Login;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface LoginRepository extends JpaRepository<Login,Integer> {


    @Query("SELECT u.id,u.username ,u.role FROM Login u WHERE u.username = ?1 AND u.password = ?2 ")
    public List validateUser(String username, String password);

}
