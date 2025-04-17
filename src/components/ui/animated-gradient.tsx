"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AnimatedGradientProps {
  className?: string;
  children?: React.ReactNode;
  containerClassName?: string;
}

export function AnimatedGradient({
  className,
  children,
  containerClassName,
}: AnimatedGradientProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const x = clientX / window.innerWidth;
      const y = clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className={cn("relative", containerClassName)}>
      <div
        className={cn(
          "absolute inset-0 opacity-70 blur-3xl -z-10 transition-all duration-300",
          className
        )}
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(120, 70, 255, 0.5), rgba(60, 10, 120, 0.3), rgba(30, 10, 60, 0.1))`,
        }}
      />
      {children}
    </div>
  );
}



export function GlowingCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative rounded-xl p-px overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(120,_70,_255,_0.4)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-700 animate-rotate-gradient opacity-70" />
      <div className="relative rounded-xl bg-slate-950/90 p-5 h-full">{children}</div>
    </div>
  );
}
