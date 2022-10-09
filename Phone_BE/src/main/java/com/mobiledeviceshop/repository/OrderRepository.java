package com.mobiledeviceshop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobiledeviceshop.entity.Order;
import com.mobiledeviceshop.entity.User;

public interface OrderRepository extends JpaRepository<Order, Long>  {

	List<Order> findAllByUser(User u);
}
