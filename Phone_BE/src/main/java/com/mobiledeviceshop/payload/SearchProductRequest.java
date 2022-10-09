package com.mobiledeviceshop.payload;

public class SearchProductRequest {

	private String categoryId;
	private String hangSXId;
	private String donGia;
	
	// sap xep theo gia
	private String sapXepTheoGia;
	private String[] keyword;
	private String sort;
	
	// sap xep theo danhmuc va hangsx
	private String brand;
	private String category;
	
	// theo ram, pin, OS
	private String system;
	private String ram;
	private String pin;
}
