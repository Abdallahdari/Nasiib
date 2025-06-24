"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import mon from "@/public/mon.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
export default function Testimonials() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 👈 unobserve after first entry
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto xl:max-w-[1200px] bg-white"
    >
      {/* Main Content */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            We are a global, boutique real estate brokerage
          </h1>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                The transfer of real estate
              </h2>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                We are a global, boutique real estate brokerage committed to
                connecting discerning buyers and sellers with the world’s finest
                properties. With a personalized, client-first approach, we
                specialize in luxury residences, investment properties, and
                unique estates across key international markets. Whether you're
                looking to purchase your dream home, sell a prized asset, or
                explore strategic opportunities, our experienced agents provide
                exceptional service, deep market insights, and trusted expertise
                every step of the way
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gray-900 cursor-pointer  hover:bg-blue-600 transition-all duration-200 text-white px-8 py-3 rounded-full"
              >
                Book Now!
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 cursor-pointer  hover:bg-blue-600 transition-all duration-200 text-gray-700 hover:text-white  px-8 py-3 rounded-full bg-white"
              >
                Read More
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  12+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Customers
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  14+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Offices
                </div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  10+
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  Students
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={mon}
                alt="Professional real estate agents working together"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
