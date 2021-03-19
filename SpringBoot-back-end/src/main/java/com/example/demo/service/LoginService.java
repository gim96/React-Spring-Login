package com.example.demo.service;


import com.example.demo.Repository.LoginRepository;
import com.example.demo.model.Auth;
import com.example.demo.model.Login;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional

public class LoginService {

    @Autowired
    private LoginRepository loginRepository;

    public List LoginUser(String username, String password) {
        return loginRepository.validateUser(username,password);
    }

    public List<Login> listAllUser(){
        return  loginRepository.findAll();
    }

}
