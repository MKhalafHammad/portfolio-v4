"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GridBackgroundDemo = ({
  className,
}: {
  className?: string;
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  const size = 400;

  return (
    <div
      className={cn(
        "h-full w-full bg-black/[0.96] relative overflow-hidden flex items-center justify-center",
        className
      )}
    >
      <div className="grid grid-cols-10 grid-rows-10 gap-4">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="h-8 w-8"
            animate={{
              backgroundColor: `rgba(59, 130, 246, ${
                0.1 - mousePosition.x / window.innerWidth / 5
              })`,
            }}
          />
        ))}
      </div>
    </div>
  );
}; 