package com.mobiledeviceshop.converter;

import com.mobiledeviceshop.entity.User;
import com.mobiledeviceshop.payload.AccountRequest;
import org.springframework.stereotype.Component;

@Component
public class AccountConverter {
    public User toEntity(AccountRequest dto, User entity) {
        entity.setName(dto.getName());
        entity.setEmail(dto.getEmail());
        entity.setAddress(dto.getAddress());
        entity.setPhone(dto.getPhone());
        return entity;
    }

}
