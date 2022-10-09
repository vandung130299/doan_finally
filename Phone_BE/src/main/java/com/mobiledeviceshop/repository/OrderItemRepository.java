package com.mobiledeviceshop.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobiledeviceshop.entity.Order;
import com.mobiledeviceshop.entity.OrderItem;
import com.mobiledeviceshop.entity.User;

public interface OrderItemRepository extends JpaRepository<OrderItem, Long>  {
	List<OrderItem> findAllByOrder(Order o);
}
