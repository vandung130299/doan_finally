package com.mobiledeviceshop.converter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.mobiledeviceshop.entity.Product;
import com.mobiledeviceshop.payload.ProductRequest;
import com.mobiledeviceshop.repository.BrandRepository;
import com.mobiledeviceshop.repository.CategoryRepository;

@Component
public class ProductConverter {
	
	@Autowired
	private CategoryRepository categoryRepository;
	
	@Autowired
	private BrandRepository brandRepository;
	// DTO -> NewEntity
	public Product toEntity(ProductRequest dto) {
		Product entity = new Product();
		if (entity.getId() != null) {
			dto.setId(entity.getId());
		}
		entity.setProductname(dto.getProductname());
		entity.setPrice(dto.getPrice());
		entity.setTotal(dto.getTotal());
		entity.setSold(dto.getSold());
		entity.setInfodesign(dto.getInfodesign());
		entity.setInfomation(dto.getInfomation());
		entity.setMonitor(dto.getMonitor());
		entity.setSystem(dto.getSystem());
		entity.setCpu(dto.getCpu());
		entity.setRam(dto.getRam());
		entity.setThietKe(dto.getThietKe());
		entity.setPin(dto.getPin());
		entity.setImageurl(dto.getImageurl());
		entity.setCategory(categoryRepository.findById(dto.getCategoryId()).get());
		entity.setBrand(brandRepository.findById(dto.getBrandId()).get());
		return entity;
	}
	
	public Product toEntity(ProductRequest dto,Product entity) {
		entity.setProductname(dto.getProductname());
		entity.setPrice(dto.getPrice());
		entity.setTotal(dto.getTotal());
		entity.setSold(dto.getSold());
		entity.setInfodesign(dto.getInfodesign());
		entity.setInfomation(dto.getInfomation());
		entity.setMonitor(dto.getMonitor());
		entity.setSystem(dto.getSystem());
		entity.setCpu(dto.getCpu());
		entity.setRam(dto.getRam());
		entity.setThietKe(dto.getThietKe());
		entity.setPin(dto.getPin());
		entity.setImageurl(dto.getImageurl());
		entity.setCategory(categoryRepository.findById(dto.getCategoryId()).get());
		entity.setBrand(brandRepository.findById(dto.getBrandId()).get());
		return entity;
	}
	
//	// NewEntity -> NewDTO
//		public NewDTO toDTO(NewEntity entity) {
//			NewDTO dto = new NewDTO();
//			if (entity.getId() != null) {
//				dto.setId(entity.getId());
//			}
//			dto.setTitle(entity.getTitle());
//			dto.setContent(entity.getContent());
//			dto.setShortDescription(entity.getShortDescription());
//			dto.setThumbnail(entity.getThumbnail());
//			dto.setCategoryCode(entity.getCategory().getCode());
//			dto.setCreatedDate(entity.getCreatedDate());
//			dto.setCreatedBy(entity.getCreatedBy());
//			dto.setModifiedDate(entity.getModifiedDate());
//			dto.setModifiedBy(entity.getModifiedBy());
////			System.out.print("wwww" + entity.getCategory().getCode());
//			return dto;
//		}
}
