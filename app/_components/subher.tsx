"use client";

import Image from "next/image";
import header from "@/public/foter.png";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Subhero() {
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
      className="px-4"
    >
      <section className="container  xl:max-w-[1400px] mx-auto bg-gradient-to-r from-[#e1f0ff] to-[#fde8d2] rounded-xl my-6  overflow-y-visible md:h-[calc(100vh-10rem)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6">
          {/* Left Text Content */}
          <div className="max-w-xl space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Subscribe our Newsletter
            </h1>
            <p className="text-gray-600">
              Your will have everything nearby supermarket, buses, <br />
              station, the carmen neighborhood, etc
            </p>

            {/* Email form */}
            <form className="flex max-w-md mt-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 p-3 rounded-l-full border border-gray-300 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-black text-white px-6 rounded-r-full font-semibold"
              >
                Get a Quote
              </button>
            </form>
          </div>

          {/* Right Image */}

          <Image
            src={header}
            alt="Modern House"
            width={600}
            height={1700}
            className=" rounded-lg  "
          />
        </div>
      </section>
    </motion.div>
  );
}
