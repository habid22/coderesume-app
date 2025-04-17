"use client";

import { cn } from "@/lib/utils";
import { useEffect, useState, useRef } from "react";

export function AnimatedBackground({ className }: { className?: string }) {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark that we're on the client side
    setIsClient(true);

    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Handle mouse move to update gradient position
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });
    };

    // Handle window resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={cn("fixed inset-0 -z-50", className)}>
      {/* Main gradient that follows mouse */}
      <div
        className="absolute inset-0 opacity-70 transition-all duration-300"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%,
            rgba(120, 70, 255, 0.3),
            rgba(60, 10, 120, 0.1),
            rgba(15, 10, 60, 0.05))`,
        }}
        suppressHydrationWarning
      />

      {/* Bottom gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[500px] bg-gradient-to-t from-purple-950/50 via-violet-900/20 to-transparent"
      />

      {/* Top-left accent */}
      <div
        className="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-pink-600/10 blur-[100px]"
      />

      {/* Top-right accent */}
      <div
        className="absolute top-[-100px] right-[-100px] h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[100px]"
      />

      {/* Static grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTYwIDYwTDAgNjAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMC41Ii8+CjxwYXRoIGQ9Ik0wIDMwTDYwIDMwIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjAuNSIvPgo8cGF0aCBkPSJNMzAgMEwzMCA2MCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KPC9zdmc+')]"
      />

      {/* Animated floating particles only render on client-side */}
      {/* {isClient && <FloatingParticles count={20} />} */}
    </div>
  );
}

function FloatingParticles({ count = 20 }: { count?: number }) {
  // Use a ref to store the generated particles
  const particlesRef = useRef<Array<{
    size: number;
    opacity: number;
    duration: number;
    initialX: string;
    initialY: string;
    delay: number;
    color: string;
    key: string;
  }>>([]);

  // Generate particles once on component mount
  useEffect(() => {
    particlesRef.current = Array.from({ length: count }).map((_, i) => {
      const size = Math.random() * 5 + 1;
      const opacity = Math.random() * 0.15 + 0.05;
      const duration = Math.random() * 25 + 15;
      const initialX = `${Math.random() * 100}%`;
      const initialY = `${Math.random() * 100}%`;
      const delay = Math.random() * -30;
      const color = Math.random() > 0.5 ? '255, 255, 255' : '180, 120, 255';

      return {
        size,
        opacity,
        duration,
        initialX,
        initialY,
        delay,
        color,
        key: `particle-${i}-${size}-${initialX}-${Date.now()}`
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particlesRef.current.map((particle) => (
        <div
          key={particle.key}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `rgba(${particle.color}, ${particle.opacity})`,
            left: particle.initialX,
            top: particle.initialY,
            animation: `float ${particle.duration}s ease-in-out infinite`,
            animationDelay: `${particle.delay}s`,
          }}
          suppressHydrationWarning
        />
      ))}
    </div>
  );
}
