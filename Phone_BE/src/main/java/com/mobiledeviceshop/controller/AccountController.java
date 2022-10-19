package com.mobiledeviceshop.controller;

import com.mobiledeviceshop.entity.Brand;
import com.mobiledeviceshop.entity.User;
import com.mobiledeviceshop.repository.AccountRepository;
import com.mobiledeviceshop.repository.BrandRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/account")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getAllAccount() {
        List<User> users = accountRepository.findAll();
        Map<String, Object> response = new HashMap<>();
        response.put("users", users);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
