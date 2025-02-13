"use client";

import { useState } from "react";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState("Tất cả");

  // Dữ liệu mẫu - sau này có thể thay thế bằng API call
  const menuItems: MenuItem[] = [
    {
      id: 1,
      name: "Phở Bò",
      description: "Phở bò truyền thống với nước dùng đậm đà",
      price: 55000,
      image: "/images/pho-bo.jpg",
      category: "Món chính",
    },
    // Thêm các món ăn khác vào đây
  ];

  const categories = [
    "Tất cả",
    "Món chính",
    "Món phụ",
    "Đồ uống",
    "Tráng miệng",
  ];

  const filteredItems =
    activeCategory === "Tất cả"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <div className="pt-20 px-4 min-h-screen bg-gray-50">
      {/* Danh mục */}
      <div className="container mx-auto mb-8">
        <div className="flex overflow-x-auto gap-4 pb-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full whitespace-nowrap ${
                activeCategory === category
                  ? "bg-red-500 text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Danh sách món ăn */}
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-red-500 font-medium">
                    {item.price.toLocaleString("vi-VN")}đ
                  </span>
                  <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors">
                    Thêm vào giỏ
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
