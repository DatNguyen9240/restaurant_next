"use client";
import React from "react";
import Link from "next/link";

const Footer = () => {
  const productLinks = [
    { name: "Home", href: "/", highlight: true },
    { name: "Products", href: "/products", badge: "New" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
    { name: "Releases", href: "/releases" },
  ];

  const socialLinks = [
    { name: "Twitter", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Facebook", href: "#" },
    { name: "GitHub", href: "#" },
    { name: "AngelList", href: "#" },
    { name: "Dribbble", href: "#" },
  ];

  const legalLinks = [
    { name: "Terms", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Cookies", href: "#" },
    { name: "Licenses", href: "#" },
    { name: "Settings", href: "#" },
  ];

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-3">
            <Link href="/" className="flex items-center mb-4">
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
                FF
              </div>
            </Link>
            <p className="text-gray-600 text-lg leading-relaxed">
              Design amazing digital experiences that create more happy in the
              world.
            </p>
          </div>

          {/* Product Links */}
          <div className="md:col-span-3">
            <h3 className="text-gray-400 font-medium mb-4">Product</h3>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={`flex items-center ${
                      link.highlight ? "text-red-500" : "text-gray-600"
                    } hover:text-gray-900`}
                  >
                    {link.name}
                    {link.badge && (
                      <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {link.badge}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3">
            <h3 className="text-gray-400 font-medium mb-4">Social</h3>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3">
            <h3 className="text-gray-400 font-medium mb-4">Legal</h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-gray-900"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 mb-4 md:mb-0">
            © 2022 Falcon Thought. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Twitter", "LinkedIn", "Facebook", "GitHub"].map((platform) => (
              <Link
                key={platform}
                href="#"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{platform}</span>
                {/* You can add platform-specific icons here */}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
