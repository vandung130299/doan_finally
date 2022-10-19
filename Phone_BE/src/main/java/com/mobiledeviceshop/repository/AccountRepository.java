package com.mobiledeviceshop.repository;

import com.mobiledeviceshop.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository  extends JpaRepository<User, Long> {
}
