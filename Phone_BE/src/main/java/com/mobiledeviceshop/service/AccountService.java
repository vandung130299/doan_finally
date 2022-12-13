package com.mobiledeviceshop.service;

import com.mobiledeviceshop.converter.AccountConverter;
import com.mobiledeviceshop.entity.Product;
import com.mobiledeviceshop.entity.User;
import com.mobiledeviceshop.payload.AccountRequest;
import com.mobiledeviceshop.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AccountService {

    @Autowired
    private AccountRepository accountRepository;
    @Autowired
    private AccountConverter accountConverter;

    public User updateUser(AccountRequest user) {
        User oldUser = accountRepository.findById(user.getId()).get();
        User newUser = accountConverter.toEntity(user, oldUser);

        return accountRepository.save(newUser);
    }
}
