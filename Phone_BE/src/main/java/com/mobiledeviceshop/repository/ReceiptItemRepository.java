package com.mobiledeviceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobiledeviceshop.entity.ReceiptItem;

public interface ReceiptItemRepository  extends JpaRepository<ReceiptItem, Long>  {

}
