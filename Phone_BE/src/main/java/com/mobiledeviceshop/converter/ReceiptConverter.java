package com.mobiledeviceshop.converter;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.mobiledeviceshop.entity.Receipt;
import com.mobiledeviceshop.entity.ReceiptItem;
import com.mobiledeviceshop.payload.ReceiptResponse;
import com.mobiledeviceshop.payload.ReceiptResponse.ReceiptItemResponse;

@Component
public class ReceiptConverter {
	// NewEntity -> NewDTO
		public ReceiptResponse toDTO(Receipt entity, List<ReceiptItem> listReceiptItem) {
			ReceiptResponse dto = new ReceiptResponse();

			dto.setId(entity.getId());
			dto.setAddress(entity.getAddress());
			dto.setPhone(entity.getPhone());
			dto.setCompany(entity.getCompany());
			dto.setReceiptDate(entity.getReceiptDate());
			
			dto.setTotalmoney(entity.getTotalmoney());
			List<ReceiptItemResponse> listReceiptItemResponse = new ArrayList<>();

			for (int i = 0; i < listReceiptItem.size(); i++) {
				listReceiptItemResponse.add(toDTOItem(listReceiptItem.get(i)));
			}
			dto.setReceiptItems(listReceiptItemResponse);
			return dto;
		}

		//
		public ReceiptItemResponse toDTOItem(ReceiptItem entity) {
			ReceiptItemResponse dto = new ReceiptItemResponse();
			dto.setProductname(entity.getProduct().getProductname());
			dto.setImageurl(entity.getProduct().getImageurl());
			dto.setQuantity(entity.getQuantity());
			dto.setPricereceipt(entity.getPricereceipt());
			return dto;
		}
}
