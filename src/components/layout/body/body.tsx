"use client";
import React, { useState } from "react";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const Body = () => {
  const [selected, setSelected] = useState("Hundi mutton");

  const foodItems = [
    { name: "Chicken biryani", img: "/images/2.jpg" },
    { name: "Hundi mutton", img: "/images/2.jpg" },
    { name: "Kala bhuna", img: "/images/2.jpg" },
  ];

  const selectedItem =
    foodItems.find((item) => item.name === selected) || foodItems[0];

  const popularDishes = [
    {
      name: "Kala Bhuna",
      image: "/images/2.jpg",
      rating: 4.5,
      likes: "1.5k",
      price: 50.99,
    },
    {
      name: "Meat Cu",
      image: "/images/2.jpg",
      rating: 4.5,
      likes: "1.5k",
      price: 50.99,
    },
    {
      name: "Chose your Meals",
      image: "/images/2.jpg",
      rating: 4.5,
      likes: "1.5k",
      price: 50.99,
    },
  ];

  const steps = [
    {
      title: "Chose your Meals",
      icon: "/images/2.jpg",
      image: null,
      alt: "Choose meals",
    },
    {
      title: "Track Your Order",
      icon: null,
      image: "/images/2.jpg",
      alt: "Track order",
    },
    {
      title: "Collect Your Order",
      icon: "/images/2.jpg",
      image: null,
      alt: "Collect order",
    },
  ];

  const customerReactions = [
    {
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor",
      date: "23 Nov 2021",
      author: {
        name: "Md. Athik Foisal",
        role: "UI/UX Designer",
        avatar: "/images/2.jpg",
        rating: 4.5,
      },
    },
    // Add more reviews as needed
  ];

  return (
    <main className="relative pt-16 -z-10">
      <div className="container mx-auto px-4 py-4">
        {/* Header Section */}
        <div className="inline-flex items-center mb-8">
          <div className="bg-red-500 rounded-l-2xl p-2 flex items-center">
            <img src="/images/1.webp" alt="Logo" className="w-5 h-5" />
          </div>
          <h2 className="text-gray-800 text-base font-medium bg-red-100 px-3 py-2 rounded-r-2xl whitespace-nowrap">
            Eat healthy, Stay Healthy
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="space-y-8">
            <div className="space-y-4 relative mb-16">
              {/* Curved Arrow SVG */}
              <img
                src="/images/arrow.svg"
                alt="Curved arrow"
                className="absolute -right-48 top-48 w-64 h-64 pointer-events-none select-none hidden lg:block"
              />
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight mb-12">
                Be The <span className="text-red-500">First</span>
                <br />
                Delivery &<br />
                Easy Pick Up
              </h1>
              <p className="text-gray-600 max-w-md text-lg md:text-xl mb-12">
                Thưởng thức hương vị độc đáo của lẩu với hải sản tươi sống và
                thịt bò Úc thượng hạng. Cam kết hoàn tiền 100% nếu quý khách
                không hài lòng về chất lượng.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <button className="bg-red-500 text-white px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl hover:bg-red-600 transition flex items-center justify-center">
                  Order Now →
                </button>
                <button className="border-2 border-red-500 text-red-500 px-6 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl hover:bg-red-50 transition">
                  Book a Table
                </button>
              </div>
            </div>

            {/* Food Items */}
            <div className="flex justify-center sm:justify-start gap-6">
              {foodItems.map((item) => (
                <div
                  key={item.name}
                  className={`text-center p-4 pt-16 rounded-2xl transition cursor-pointer transform -skew-x-6 relative w-40 sm:w-48 h-32 ${
                    selected === item.name
                      ? "border-2 border-red-500 shadow-lg"
                      : "border"
                  }`}
                  onClick={() => setSelected(item.name)}
                >
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto transform skew-x-6 absolute -top-12 left-1/2 -translate-x-1/2">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="mt-2 text-red-500 font-medium transform skew-x-6">
                    {item.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Shorter Card */}
          <div className="max-w-sm lg:ml-auto relative mt-12 lg:mt-0">
            {/* White square in top-left corner */}
            <div className="absolute top-4 -left-8 w-36 h-32 bg-white rounded-lg z-10 shadow-xl flex items-center justify-center">
              {/* Circular jagged percentage icon */}
              <div
                className="absolute -top-2 -right-2 w-10 h-10 bg-red-500 flex items-center justify-center"
                style={{
                  clipPath: `polygon(
                     50% 0%, 63% 12%, 80% 10%, 87% 25%, 100% 30%, 95% 45%,
                     100% 60%, 87% 75%, 80% 90%, 63% 88%, 50% 100%, 37% 88%,
                     20% 90%, 13% 75%, 0% 60%, 5% 45%, 0% 30%, 13% 25%,
                     20% 10%, 37% 12%
                   )`,
                }}
              >
                <span className="text-white font-bold">%</span>
              </div>
              <p className="text-gray-800 font-medium text-left text-lg">
                <span className="text-red-500 text-xl">10%</span>
                <br />
                Discount
                <br />
                for two order
              </p>
            </div>
            <div className="relative flex justify-center">
              <img
                src="/images/Subtract.jpg"
                alt="Subtract"
                className="w-full max-w-md h-auto object-cover rounded-2xl"
              />
              {/* Add circular overlay food image */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img
                    src={selectedItem.img}
                    alt={selectedItem.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Buttons positioned at bottom of image */}
              <div className="absolute -bottom-8 left-1/4.5 -translate-x-1/2 flex gap-6">
                <button className="bg-red-500 text-white px-10 py-4 text-lg rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl hover:bg-red-600 transition flex items-center gap-2">
                  <HiArrowLeft />
                </button>
                <button className="bg-white border-2 border-red-500 text-red-500 px-10 py-4 text-lg rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl hover:bg-red-50 transition">
                  <HiArrowRight />
                </button>
              </div>
              {/* Added delivery message */}
              <div className="absolute -bottom-24 left-0 right-0 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-100 p-1 flex items-center justify-center">
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      src="/images/2.jpg"
                      alt="Delivery Person"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="flex-1">
                  <p className="text-gray-600 text-sm">
                    We will deliver your food within 30 minutes in your town.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popular Dishes Section */}
        <div className="mt-32">
          <h2 className="text-4xl font-bold text-center mb-16 relative">
            Our Popular Dishes
            <img
              src="/images/vector.svg"
              className="absolute left-1/2 ml-28 transform -translate-x-1/2 -bottom-2"
            />
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDishes.map((dish) => (
              <div key={dish.name} className="relative max-w-sm mx-auto w-full">
                <img
                  src="/images/card_order.png"
                  alt="Card background"
                  className="w-full h-auto xl:h-[600px] object-contain lg:py-24 xl:py-0"
                />

                {/* Content overlay */}
                <div className="absolute inset-0 p-4 sm:p-6 lg:p-8">
                  {/* Dish image and details */}
                  <div className="text-center">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-3 -mt-14 relative z-10 ">
                      <img
                        src={dish.image}
                        alt={dish.name}
                        className="w-full h-full object-cover rounded-full border-4 border-white shadow-lg mt-2"
                      />
                    </div>

                    {/* Rating and likes section */}
                    <div className="flex justify-between items-center mb-2 px-4 sm:px-8">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-lg">★</span>
                        <span className="text-gray-800 font-medium">
                          {dish.rating}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="text-red-500">
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </svg>
                        </button>
                        <span className="text-gray-500 text-sm">
                          {dish.likes}
                        </span>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
                    <p className="text-gray-500 text-sm mb-4">
                      We will deliver your food within 30 minutes in your town,
                      If we would.
                    </p>
                  </div>

                  {/* Price and add to cart */}
                  <div className="flex justify-between items-center px-4 sm:px-12">
                    <span className="text-xl font-bold">${dish.price}</span>
                    <button className="text-red-500 text-sm font-bold border border-red-500 px-4 py-1.5 rounded hover:text-red-600 hover:border-red-600">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4 flex justify-center">
            <button className="bg-red-500 text-white px-5 sm:px-8 py-2.5 sm:py-3.5 text-sm sm:text-base rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl hover:bg-red-600 transition flex items-center justify-center gap-2">
              See All Dishes
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* How it Works Section and Blog Section Container */}
        <div className="mt-24 relative">
          <img
            src="/images/rectangle.png"
            alt="Background"
            className="absolute inset-0 w-full h-full object-fit"
          />
          <div className="relative pt-32">
            {/* How it Works content */}
            <h2 className="text-3xl font-bold text-center mb-12">
              How dose it Works
              <div className="h-1 w-16 bg-red-500 mx-auto mt-2"></div>
            </h2>

            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                {steps.map((step, index) => (
                  <div key={index} className="relative">
                    <img
                      src="/images/card.png"
                      alt="Card background"
                      className="w-full h-auto max-w-[320px] mx-auto sm:max-w-[280px] lg:py-12 xl:py-0 md:-py-24"
                    />
                    <div className="absolute inset-0 flex flex-col items-center md:px-12 md:pt-0 md:pb-0 lg:px-12 lg:pt-0 lg:pb-0 xl:px-12 xl:pt-4 xl:pb-16 text-center ">
                      <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-lg mb-6">
                        {step.icon ? (
                          <img
                            src={step.icon}
                            alt={step.alt}
                            className="w-full h-full object-cover"
                          />
                        ) : step.image ? (
                          <img
                            src={step.image}
                            alt={step.alt}
                            className="w-full h-full object-cover"
                          />
                        ) : null}
                      </div>
                      <h3 className="font-semibold text-xl mb-3 text-red-500">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 max-w-[160px] mx-auto">
                        We will deliver your food within 30 minutes in your
                        town, if we would.
                      </p>
                      <div className="relative">
                        <button className="text-gray-800 flex items-center gap-2 mx-auto hover:text-gray-600">
                          Read More <span>→</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Blog Section */}
            <div className="mt-48 px-4 sm:px-8 pb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                {/* Left Blog Card */}
                <div className="rounded-2xl flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
                  {/* Left side with card */}
                  <div className="relative w-60 h-40 flex-shrink-0 mx-auto lg:ml-8 mb-8 lg:mb-0">
                    <img
                      src="/images/small_card.png"
                      alt="Card background"
                      className="w-full h-full object-contain rounded-2xl"
                      style={{ objectPosition: "center" }}
                    />
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/4 mt-2">
                      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                          src="/images/2.jpg"
                          alt="Chicken biryani"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-8 left-2 right-2 text-center">
                      <h3 className="text-red-500 font-semibold text-base">
                        Delicious Chicken Biryani
                      </h3>
                    </div>
                  </div>
                  {/* Right side with text */}
                  <div className="lg:pl-12">
                    <h2 className="text-4xl lg:text-5xl font-black text-gray-800 mb-4 whitespace-normal lg:whitespace-nowrap">
                      Eat Healthy, Stay <br /> Healthy
                    </h2>
                  </div>
                </div>

                {/* Right side with cards */}
                <div className="space-y-8 max-w-sm mx-auto lg:ml-72 mt-8">
                  {[1, 2].map((_, index) => (
                    <div
                      key={index}
                      className="rounded-lg p-4 flex items-center gap-4 w-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex-1">
                        <p className="text-gray-500 text-sm mb-1">2 days ago</p>
                        <h3 className="text-lg font-semibold mb-2 line-clamp-1">
                          Meet Deanna Cook, a Kids Cookbook Author
                        </h3>
                        <div className="flex items-center gap-3">
                          <div className="p-0.5 rounded-full border-2 border-red-500">
                            <img
                              src="/images/2.jpg"
                              alt="Author"
                              className="w-10 h-10 rounded-full object-cover"
                            />
                          </div>
                          <div className="w-px h-10 bg-gray-300"></div>
                          <div className="flex flex-col">
                            <span className="font-medium text-sm">
                              Md. Athik Foisal
                            </span>
                            <span className="text-gray-400 text-sm">
                              UI/UX Designer
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Text below blog section */}
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 mt-8 lg:-mt-48 text-center lg:text-left">
                <div className="lg:pl-10 lg:-mt-52 xl:-mt-0">
                  <h2 className="text-gray-600 text-lg max-w-xl">
                    The Standard Chunk Of Lorem Ipsum Used{" "}
                    <br className="hidden lg:block" />
                    Since The 1500s Is Reproduced Below For{" "}
                    <br className="hidden lg:block" />
                    Those Interested. Sections 1.10.32.
                  </h2>
                  <div className="relative">
                    <button className="bg-red-500 text-white px-16 py-3 text-base rounded-tl-none rounded-br-none rounded-tr-2xl rounded-bl-2xl hover:bg-red-600 transition flex items-center mt-8 mx-auto lg:mx-0">
                      Read More →
                    </button>
                    <img
                      src="/images/vector2.png"
                      alt="Vector decoration"
                      className="absolute -right-24 top-1/2 -translate-y-1/2 w-48 h-auto"
                    />
                  </div>
                </div>
                <img
                  src="/images/card.png"
                  alt="Card decoration"
                  className="w-72 lg:w-96 h-auto object-contain mt-8 lg:-mt-80 lg:-ml-10 xl:-mt-32 xl:ml-10"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 mb-16">
          <h2 className="text-4xl font-bold text-center mb-16">
            Customers{" "}
            <span className="relative">
              Reaction
              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-500"></div>
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left side image */}
            <div className="relative">
              <div className="w-96 h-96 rounded-full bg-red-100 relative overflow-hidden">
                <img
                  src="/images/2.jpg"
                  alt="Customer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right side content */}
            <div className="space-y-8">
              {customerReactions.map((reaction, index) => (
                <div key={index} className="max-w-xl">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        ✓ Verified Purchase
                      </div>
                    </div>
                    <span className="text-gray-500">{reaction.date}</span>
                  </div>

                  <p className="text-gray-700 text-lg mb-6">
                    {reaction.review}
                  </p>

                  <div className="flex items-center gap-4">
                    <img
                      src={reaction.author.avatar}
                      alt={reaction.author.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="border-l-2 pl-4">
                      <h4 className="font-medium">{reaction.author.name}</h4>
                      <p className="text-gray-500">{reaction.author.role}</p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-xl ${
                            i < Math.floor(reaction.author.rating)
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

              {/* Navigation buttons */}
              <div className="flex justify-end gap-4 mt-8">
                <button className="w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-50">
                  ←
                </button>
                <button className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600">
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Body;
