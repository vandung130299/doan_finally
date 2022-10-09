
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;


CREATE TABLE `brand` (
  `id` bigint(20) NOT NULL,
  `brandname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `brand`
--

INSERT INTO `brand` (`id`, `brandname`) VALUES
(1, 'Apple'),
(2, 'SamSung'),
(3, 'Xiaomi'),
(4, 'Oppo'),
(5, 'Nokia'),
(6, 'Realme');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` bigint(20) NOT NULL,
  `totalmoney` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart_item`
--

CREATE TABLE `cart_item` (
  `id` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `cart_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` bigint(20) NOT NULL,
  `categoryname` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `categoryname`) VALUES
(1, 'Điện Thoại'),
(2, 'LapTop, PC'),
(3, 'Tablet'),
(4, 'Âm Thanh'),
(5, 'Đồng Hồ'),
(6, 'Nhà Thông Minh'),
(7, 'Phụ Kiện');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `delivery_date` datetime DEFAULT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `note` varchar(255) DEFAULT NULL,
  `order_date` datetime DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `totalmoney` bigint(20) NOT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `address`, `delivery_date`, `fullname`, `note`, `order_date`, `phone`, `status`, `totalmoney`, `user_id`) VALUES
(1, 'test diachi', '2021-12-09 09:37:00', 'Nguyen Anh Dung', 'giau co', '2021-11-21 13:02:00', '123456789', 'delivery', 61172225, 3),
(2, 'test diachi', NULL, 'Nguyen Anh Dung', 'giau co', '2021-11-21 13:02:00', '123245445', 'cancel', 61172225, 3),
(3, 'test diachi', NULL, 'Nguyen Anh Dung', 'giau co', '2021-11-21 13:02:00', '234234234234234', 'cancel', 61172225, 3),
(11, 'hiep phu thu duc', NULL, 'Anh Dũng Pro', 'lqwe', '2021-12-10 06:51:00', '0222333444', 'pending', 30300000, 3),
(12, 'dfsd', NULL, 'dfd', 'sdsd', '2021-12-10 07:50:00', '2323', 'pending', 75600000, 3);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_item`
--

CREATE TABLE `order_item` (
  `id` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `order_id` bigint(20) DEFAULT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `pricecurrent` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `order_item`
--

INSERT INTO `order_item` (`id`, `quantity`, `order_id`, `product_id`, `pricecurrent`) VALUES
(1, 5, 1, 8, 12233334),
(2, 5, 1, 3, 1111),
(3, 5, 2, 8, 12233334),
(4, 5, 2, 3, 1111),
(5, 5, 3, 8, 12233334),
(6, 5, 3, 3, 1111),
(22, 2, 11, 16, 10100000),
(23, 2, 12, 8, 25200000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `product`
--

CREATE TABLE `product` (
  `id` bigint(20) NOT NULL,
  `cpu` varchar(255) DEFAULT NULL,
  `imageurl` varchar(255) DEFAULT NULL,
  `infodesign` varchar(255) DEFAULT NULL,
  `infomation` varchar(255) DEFAULT NULL,
  `monitor` varchar(255) DEFAULT NULL,
  `pin` varchar(255) DEFAULT NULL,
  `price` bigint(20) NOT NULL,
  `productname` varchar(255) DEFAULT NULL,
  `ram` varchar(255) DEFAULT NULL,
  `sold` int(11) NOT NULL,
  `system` varchar(255) DEFAULT NULL,
  `thiet_ke` varchar(255) DEFAULT NULL,
  `total` int(11) NOT NULL,
  `brand_id` bigint(20) DEFAULT NULL,
  `category_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `product`
--

INSERT INTO `product` (`id`, `cpu`, `imageurl`, `infodesign`, `infomation`, `monitor`, `pin`, `price`, `productname`, `ram`, `sold`, `system`, `thiet_ke`, `total`, `brand_id`, `category_id`) VALUES
(2, 'A5', 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_11_white_4_.png', 'iPhone 11 I Chính hãng VN/A', 'sdsdsdss', '7.2 inches', '4000 mAh322', 20000000, 'iPhone 11 I Chính hãng VN/A', '8 gb', 2, 'test 123', 'test 123', 102, 1, 1),
(3, 'qwe', 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/r/e/redmi-note-10-5g.jpg', 'qwe', 'xin chào các cụ', '6.5 inches', '3500 mAh', 10000000, 'Xiaomi Redmi Note 10 5G', '4 GB', 42, 'qwe', 'qwe', 155, 3, 1),
(4, 'snapdragon', 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_12_blue.png', 'test 1234', '[ANH Dũng] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới 1.000.000đ', '6.1 inches', '3000 mAh', 20000000, 'iPhone 12 64GB I Chính hãng VN/A', '4GB', 1, 'test 1234', 'test 1234', 100, 1, 1),
(8, 'snapdragon', 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-s21-ultra-1_1.jpg', 'test 1234', 'test 1234', '6.8 inches', '2345 mAh', 25200000, 'Samsung Galaxy S21 Ultra 5G', '12 GB', 25, 'test 1234', 'test 1234', 74, 2, 1),
(9, 'snapdragon', 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/thumbnail/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_13-_pro-5_4_1.jpg', 'test 1234', 'test 1234', 'test 1234', 'test 1234', 35500000, 'iPhone 13 Pro Max 256GB I Chính hãng VN/A', 'test 1234', 1, 'test 1234', 'test 1234', 100, 1, 1),
(14, 'snapdragon', 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone_xr_red.png', 'test 1234', 'test 1234', 'test 1234', 'test 1234', 12500000, 'iPhone XR 64GB I Chính hãng VN/A', 'test 1234', 1, 'test 1234', 'test 1234', 100, 1, 1),
(15, 'dsds', 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-8-plus_4_009.jpg', 'sdsd', 'sdsd', 'sdsd', 'sdsds', 13000000, 'Apple iPhone 8 Plus 128GB I Chính hãng VN/A', 'sdsd', 0, 'sds', 'sdsd', 100, 1, 1),
(16, 'dsds', 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a72-30.jpg', 'sdsd', 'sdsd', 'sdsd', 'sdsds', 10100000, 'Samsung Galaxy A72', 'sdsd', 0, 'sds', 'sdsd', 5, 2, 1),
(17, '234234', 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/s/a/samsung-galaxy-a02s-1.jpg', '333', '343', '234', '423423', 3500000, 'Samsung Galaxy A02s', '2342', 0, '234', '3423423', 31, 2, 1),
(18, '7', 'https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/9df78eab33525d08d6e5fb8d27136e95/2/0/2026427-removebg-preview.png', '343', '4343', '7', '7', 11000000, 'Samsung Galaxy Note 10 Lite', '7', 0, '7', '7', 10, 2, 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt`
--

CREATE TABLE `receipt` (
  `id` bigint(20) NOT NULL,
  `address` varchar(255) DEFAULT NULL,
  `company` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `receipt_date` datetime DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL,
  `totalmoney` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `receipt`
--

INSERT INTO `receipt` (`id`, `address`, `company`, `phone`, `receipt_date`, `user_id`, `totalmoney`) VALUES
(1, '97 Man thien', '1 thanh vien', '1231231231', '2021-12-11 13:01:00', 4, 378017776),
(2, '97 Man thien', '1 thanh vien', '1231231231', '2021-12-11 13:01:00', 4, 554423331),
(3, '97 Man thien', '1 thanh vien', '1231231231', '2021-12-11 13:01:00', 4, 9555525),
(5, '97 man thien', 'cell phone s', '0123456789', '2021-12-10 06:50:00', 4, 2000000),
(6, 'erer', 'erer', '34343', '2021-12-10 07:51:00', 4, 6000);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `receipt_item`
--

CREATE TABLE `receipt_item` (
  `id` bigint(20) NOT NULL,
  `pricereceipt` bigint(20) NOT NULL,
  `quantity` int(11) NOT NULL,
  `product_id` bigint(20) DEFAULT NULL,
  `receipt_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `receipt_item`
--

INSERT INTO `receipt_item` (`id`, `pricereceipt`, `quantity`, `product_id`, `receipt_id`) VALUES
(1, 25200000, 15, 8, 1),
(2, 1111, 16, 3, 1),
(3, 25200000, 22, 8, 2),
(4, 1111, 21, 3, 2),
(5, 222222, 22, 8, 3),
(6, 222221, 21, 3, 3),
(10, 1000000, 1, 17, 5),
(11, 500000, 2, 16, 5),
(12, 1000, 2, 2, 6),
(13, 2000, 2, 3, 6);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) NOT NULL,
  `name` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'ROLE_ADMIN'),
(2, 'ROLE_USER');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `address` varchar(40) DEFAULT NULL,
  `email` varchar(40) DEFAULT NULL,
  `name` varchar(40) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `phone` varchar(40) DEFAULT NULL,
  `username` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `address`, `email`, `name`, `password`, `phone`, `username`) VALUES
(1, NULL, 'ad1235@gmail.com', 'anh dung', '$2a$10$d4EmW5Cpywu3n8XHfLmuou5xdrY.T521bVfvsEjfQ5Q1mZf.pnzW6', NULL, 'anhdung2'),
(3, NULL, 'qa@gmail.com', 'test11', '$2a$10$5p28HG4oUoO.R6/WEOAGKeTZqc0Gi07iuSQXBk8hkgB.u6N64ymUK', NULL, 'test11'),
(4, '97 Man Thien', 'qqq@gmail.com', 'test2', '$2a$10$lcHn6ni5uh/WPCXMOFSSj.XDOhcjZGhkMwXpkKn60Bsnb7apFolGC', '0377276515', 'test2');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `user_roles`
--

CREATE TABLE `user_roles` (
  `user_id` bigint(20) NOT NULL,
  `role_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `user_roles`
--

INSERT INTO `user_roles` (`user_id`, `role_id`) VALUES
(1, 1),
(3, 2),
(4, 1);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKg5uhi8vpsuy0lgloxk2h4w5o6` (`user_id`);

--
-- Chỉ mục cho bảng `cart_item`
--
ALTER TABLE `cart_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK1uobyhgl1wvgt1jpccia8xxs3` (`cart_id`),
  ADD KEY `FKjcyd5wv4igqnw413rgxbfu4nv` (`product_id`);

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK32ql8ubntj5uh44ph9659tiih` (`user_id`);

--
-- Chỉ mục cho bảng `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK551losx9j75ss5d6bfsqvijna` (`product_id`),
  ADD KEY `FKt4dc2r9nbvbujrljv3e23iibt` (`order_id`);

--
-- Chỉ mục cho bảng `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKs6cydsualtsrprvlf2bb3lcam` (`brand_id`),
  ADD KEY `FK1mtsbur82frn64de7balymq9s` (`category_id`);

--
-- Chỉ mục cho bảng `receipt`
--
ALTER TABLE `receipt`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK9llbb4mj9qe5l0krj2ro35u51` (`user_id`);

--
-- Chỉ mục cho bảng `receipt_item`
--
ALTER TABLE `receipt_item`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKadhg4s6y4syjwnexabmyxkuyn` (`product_id`),
  ADD KEY `FKsohgmt8ntavcgj10ha2duc8la` (`receipt_id`);

--
-- Chỉ mục cho bảng `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_nb4h0p6txrmfc0xbrd1kglp9t` (`name`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UKr43af9ap4edm43mmtq01oddj6` (`username`),
  ADD UNIQUE KEY `UK6dotkott2kjsp8vw4d0m25fb7` (`email`);

--
-- Chỉ mục cho bảng `user_roles`
--
ALTER TABLE `user_roles`
  ADD PRIMARY KEY (`user_id`,`role_id`),
  ADD KEY `FKh8ciramu9cc9q3qcqiv4ue8a6` (`role_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `brand`
--
ALTER TABLE `brand`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT cho bảng `cart_item`
--
ALTER TABLE `cart_item`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=940;

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `product`
--
ALTER TABLE `product`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT cho bảng `receipt`
--
ALTER TABLE `receipt`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT cho bảng `receipt_item`
--
ALTER TABLE `receipt_item`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FKg5uhi8vpsuy0lgloxk2h4w5o6` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `cart_item`
--
ALTER TABLE `cart_item`
  ADD CONSTRAINT `FK1uobyhgl1wvgt1jpccia8xxs3` FOREIGN KEY (`cart_id`) REFERENCES `cart` (`id`),
  ADD CONSTRAINT `FKjcyd5wv4igqnw413rgxbfu4nv` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`);

--
-- Các ràng buộc cho bảng `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `FK32ql8ubntj5uh44ph9659tiih` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `FK551losx9j75ss5d6bfsqvijna` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FKt4dc2r9nbvbujrljv3e23iibt` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

--
-- Các ràng buộc cho bảng `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `FK1mtsbur82frn64de7balymq9s` FOREIGN KEY (`category_id`) REFERENCES `category` (`id`),
  ADD CONSTRAINT `FKs6cydsualtsrprvlf2bb3lcam` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`);

--
-- Các ràng buộc cho bảng `receipt`
--
ALTER TABLE `receipt`
  ADD CONSTRAINT `FK9llbb4mj9qe5l0krj2ro35u51` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `receipt_item`
--
ALTER TABLE `receipt_item`
  ADD CONSTRAINT `FKadhg4s6y4syjwnexabmyxkuyn` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  ADD CONSTRAINT `FKsohgmt8ntavcgj10ha2duc8la` FOREIGN KEY (`receipt_id`) REFERENCES `receipt` (`id`);

--
-- Các ràng buộc cho bảng `user_roles`
--
ALTER TABLE `user_roles`
  ADD CONSTRAINT `FKh8ciramu9cc9q3qcqiv4ue8a6` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`),
  ADD CONSTRAINT `FKhfh9dx7w3ubf1co1vdev94g3f` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
