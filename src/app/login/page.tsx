"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Thêm mảng dữ liệu món ăn
const foodItems = [
  { id: 1, image: "/foods/salad.jpg", name: "Fresh Salad" },
  { id: 2, image: "/foods/smoothie-bowl.jpg", name: "Smoothie Bowl" },
  { id: 3, image: "/foods/avocado-toast.jpg", name: "Avocado Toast" },
  { id: 4, image: "/foods/kebab.jpg", name: "Kebab Plate" },
  { id: 5, image: "/foods/pizza.jpg", name: "Veggie Pizza" },
  { id: 6, image: "/foods/buddha-bowl.jpg", name: "Buddha Bowl" },
];

export default function LoginPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const radius = 200; // Adjust this value to control the circle size

  const handleItemClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Tính toán góc offset để item được chọn luôn ở vị trí tây nam (225 độ)
  const getTargetRotation = (index: number) => {
    const itemAngle = 360 / foodItems.length;
    const currentAngle = index * itemAngle;
    const targetAngle = 200; // Thay đổi từ 225 xuống 200 độ
    return targetAngle - currentAngle;
  };

  return (
    <div className="flex min-h-screen relative">
      {/* Background image */}
      <Image
        src="/images/bg_login.jpg"
        alt="Background"
        fill
        sizes="100vw"
        quality={100}
        className="object-cover"
        priority
      />

      {/* Overlay to ensure content is readable - reduced opacity */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Content container - now relative */}
      <div className="relative flex w-full">
        {/* Left side - Login form */}
        <div className="w-1/2 flex flex-col justify-center items-center p-8">
          <div className="w-full max-w-md">
            {/* Logo */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold flex items-center justify-center">
                <span className="mx-2 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                  NexRestaurant
                </span>
              </h1>
              <p className="text-center text-gray-500 mt-2 italic">
                Taste the Excellence
              </p>
            </div>

            {/* Sign In Form */}
            <h2 className="text-4xl font-bold mb-3 text-center">Sign In</h2>
            <p className="text-gray-500 mb-8 text-center">
              <span className="font-semibold text-xl">Sign in</span> to stay
              connected.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-600 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-3 border rounded-lg"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input type="checkbox" className="mr-2" />
                  <span className="text-gray-600">Remember me?</span>
                </label>
                <Link href="/forgot-password" className="text-orange-500">
                  Forgot Password
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600"
              >
                Sign in
              </button>
            </form>

            {/* Social Login */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 mb-4">
                or sign in with other accounts?
              </p>
              <div className="flex justify-center space-x-4">
                <button className="p-2 border rounded-full">
                  <Image
                    src="/icons/google-icon.png"
                    alt="Google"
                    width={24}
                    height={24}
                  />
                </button>
                <button className="p-2 border rounded-full">
                  <Image
                    src="/icons/facebook-icon.png"
                    alt="Facebook"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>

            {/* Sign Up Link */}
            <p className="text-center mt-6">
              Don't have an account?{" "}
              <Link
                href="/signup"
                style={{ color: "#f97316" }}
                className="hover:text-orange-600 font-medium"
              >
                Click here to sign up.
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Image carousel */}
        <div className="w-1/2 bg-orange-50/80 flex items-center justify-center">
          <div className="relative w-[600px] h-[600px]">
            <div className="absolute inset-0">
              {foodItems.map((item, index) => {
                const rotationOffset = getTargetRotation(currentIndex);
                const angle =
                  (index * (360 / foodItems.length) + rotationOffset) *
                  (Math.PI / 180);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                const isActive = index === currentIndex;

                return (
                  <motion.div
                    key={item.id}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      width: 150,
                      height: 150,
                    }}
                    animate={{
                      x: x - 50, // Thêm offset -50px để dịch sang trái
                      y: y,
                      scale: isActive ? 1.4 : 1,
                      zIndex: isActive ? 10 : 1,
                      rotate: rotationOffset,
                    }}
                    transition={{
                      duration: 0.8,
                      type: "spring",
                      stiffness: 45,
                      damping: 25,
                    }}
                    whileHover={{ scale: isActive ? 1.4 : 1.1 }}
                    onClick={() => handleItemClick(index)}
                  >
                    <div className="w-full h-full p-2 bg-white rounded-full shadow-lg">
                      <Image
                        src={item.image}
                        alt={item.name}
                        width={150}
                        height={150}
                        className={`w-full h-full rounded-full object-cover cursor-pointer border-4 ${
                          isActive ? "border-red-400" : "border-orange-100"
                        }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
