package com.mobiledeviceshop.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mobiledeviceshop.payload.ListProductResponse;
import com.mobiledeviceshop.repository.ProductRepository;
import com.mobiledeviceshop.service.ProductService;

@RestController
@RequestMapping("/api/product")
public class SearchController {
	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private ProductService productService;

//	@GetMapping
//	public ListProductResponse showProduct(@RequestParam(value = "page", required = false) Integer page,
//			@RequestParam(value = "limit", required = false) Integer limit) {
//		ListProductResponse result = new ListProductResponse();
//		if (page != null && limit != null) {
//			result.setPage(page);
//			Pageable pageable =  PageRequest.of(page-1,limit);
//			result.setListResult(newService.findAll(pageable));
//			result.setTotalPage((int) Math.ceil((double) (newService.totalItem()) / limit));
//		} else {
//			result.setListResult(newService.findAll());
//		}
//		return result;
//	}
}
