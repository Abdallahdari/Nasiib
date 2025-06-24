"use client";

import { MessageSquare, MailOpen, PencilLine } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Steps() {
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
  const steps = [
    {
      title: "Answer questions",
      icon: <MessageSquare className="text-green-500 w-10 h-10" />,
      description:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.",
    },
    {
      title: "Select a quote",
      icon: <MailOpen className="text-orange-500 w-10 h-10" />,
      description:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.",
    },
    {
      title: "Get registered",
      icon: <PencilLine className="text-indigo-500 w-10 h-10" />,
      description:
        "Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum.",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="py-20 px-4 text-center"
    >
      <p className="text-gray-500 mb-2">Three steps. Three minutes.</p>
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Everything should be this easy.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-center">{step.icon}</div>
            <h3 className="font-semibold text-lg">{step.title}</h3>
            <p className="text-gray-500 text-sm">{step.description}</p>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
