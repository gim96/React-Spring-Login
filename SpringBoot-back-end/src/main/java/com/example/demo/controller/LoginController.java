package com.example.demo.controller;

import com.example.demo.model.Auth;
import com.example.demo.model.Credencials;
import com.example.demo.model.Login;
import com.example.demo.service.LoginService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@ComponentScan
@RequestMapping("/login")
public class LoginController {
    @Autowired
    LoginService loginService;

    @PostMapping("/")
    public List<Auth> add(@RequestBody Credencials login){

        System.out.println(login.getUsername());
        return loginService.LoginUser(login.getUsername(),login.getPassword());

    }

    @GetMapping("/users")
    public List<Login> list(){
        return  loginService.listAllUser();
    }

//    @GetMapping("/{id}")
//    public ResponseEntity<Login> get (@PathVariable Integer id){
//        try{
//            Login user =loginService.getUser(id);
//            return  new ResponseEntity<Ven>(user, HttpStatus.OK);
//        }catch(Exception e){
//            return  new ResponseEntity<Ven>(HttpStatus.NOT_FOUND);
//
//        }
//    }
}
