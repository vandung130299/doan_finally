package com.mobiledeviceshop.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mobiledeviceshop.entity.Brand;
import com.mobiledeviceshop.repository.BrandRepository;


@RestController
@RequestMapping("/api/brand")
public class BrandController {

	@Autowired
	private BrandRepository brandRepository;

	
//	@GetMapping("/all")
//	public List<Brand> getListbrand() {
//		return brandRepository.findAll();
//	}
	
	@GetMapping("/all")
	public ResponseEntity<Map<String, Object>> getAllBrand() {
		List<Brand> brands =brandRepository.findAll();
		Map<String, Object> response = new HashMap<>();
		response.put("brands", brands);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}

}
