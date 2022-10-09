package com.mobiledeviceshop.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.mobiledeviceshop.entity.Receipt;

public interface ReceiptRepository  extends JpaRepository<Receipt, Long> {

}
