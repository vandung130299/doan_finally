package com.mobiledeviceshop.controller;

import com.mobiledeviceshop.entity.Brand;
import com.mobiledeviceshop.entity.User;
import com.mobiledeviceshop.payload.AccountRequest;
import com.mobiledeviceshop.payload.ApiResponse;
import com.mobiledeviceshop.repository.AccountRepository;
import com.mobiledeviceshop.repository.UserRepository;
import com.mobiledeviceshop.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.mobiledeviceshop.payload.SignUpRequest;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/account")
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    private AccountService accountService;

    @GetMapping("/all")
    public ResponseEntity<Map<String, Object>> getAllAccount() {
        List<User> users = accountRepository.findAll();
        Map<String, Object> response = new HashMap<>();
        response.put("users", users);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
    @RequestMapping("/{id}")
    public ResponseEntity findById(@PathVariable(value = "id") Long id) {
        return new ResponseEntity<>(accountRepository.findById(id).get(), HttpStatus.OK);
    }
    @RequestMapping(value = "/update", method = RequestMethod.POST)
    public ResponseEntity update(@RequestBody AccountRequest user) {
        User userCurrent = accountService.updateUser(user);
        return new ResponseEntity<>(userCurrent, HttpStatus.OK);
    }
}
