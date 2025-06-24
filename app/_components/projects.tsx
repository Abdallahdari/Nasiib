"use client";

import Image from "next/image";
import { Star, StarOff } from "lucide-react";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import data from "@/app/data";

export default function PropertyCards() {
  const properties = data;

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Intersection Observer
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
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-16 px-4 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {properties.map(({ id, title, description, image, rating }) => {
        const stars = Array.from({ length: 5 }, (_, i) =>
          i < Math.round(rating) ? (
            <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
          ) : (
            <StarOff key={i} className="w-4 h-4 text-gray-300" />
          )
        );

        return (
          <Link
            href={`/${id}`}
            key={id}
            className="bg-white group rounded-xl overflow-hidden border border-gray-200 hover:shadow-2xl hover:border-pink-600 transition-all duration-200 shadow-sm"
          >
            <div className="relative w-full h-64">
              <div className="absolute h-full w-full opacity-5 bg-red-400 z-20" />
              <Image
                src={image}
                alt={title}
                fill
                className="object-cover z-10 group-hover:scale-105 transition-all duration-200"
              />
            </div>
            <div className="p-5 space-y-2">
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm text-gray-500">{description}</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex">{stars}</div>
                <span className="text-sm font-medium text-gray-700">
                  {rating}
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </motion.section>
  );
}
