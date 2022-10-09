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

import com.mobiledeviceshop.entity.Category;
import com.mobiledeviceshop.repository.CategoryRepository;

@RestController
@RequestMapping("/api/category")
public class CategoryController {
	@Autowired
	private CategoryRepository categoryRepository;

//	@Autowired
//	private CategoryService categoryService;

	@GetMapping("/all")
	public ResponseEntity<Map<String, Object>> getAllCategory() {
		List<Category> cat =categoryRepository.findAll();
		Map<String, Object> response = new HashMap<>();
		response.put("categories", cat);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}


}
