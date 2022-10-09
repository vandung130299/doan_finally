package com.mobiledeviceshop.payload;

import java.util.ArrayList;
import java.util.List;

public class ListOrderResponse {
	private List<OrderResponse> listOrder= new ArrayList<>();

	public List<OrderResponse> getListOrder() {
		return listOrder;
	}

	public void setListOrder(List<OrderResponse> listOrder) {
		this.listOrder = listOrder;
	};
	
}
