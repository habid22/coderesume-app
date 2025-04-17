"use client";

import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

interface AnimatedBorderProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  containerClassName?: string;
  borderClassName?: string;
  duration?: string;
  animate?: boolean;
  direction?: "tl-to-br" | "tr-to-bl" | "bl-to-tr" | "br-to-tl";
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
}

export function AnimatedBorderCard({
  children,
  className,
  as: Component = "div",
  containerClassName,
  borderClassName,
  duration = "4s",
  animate = true,
  direction = "tl-to-br",
  containerProps,
}: AnimatedBorderProps) {
  const directionMap = {
    "tl-to-br": "top left",
    "tr-to-bl": "top right",
    "bl-to-tr": "bottom left",
    "br-to-tl": "bottom right",
  };

  const [hovered, setHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={cn("relative p-px rounded-lg overflow-hidden", containerClassName)}
      style={{
        background: animate && isClient
          ? `linear-gradient(to ${directionMap[direction]}, rgba(120, 70, 255, 0.7), rgba(60, 10, 120, 0.3), rgba(170, 85, 235, 0.6))`
          : "rgba(120, 70, 255, 0.3)",
        backgroundSize: "400% 400%",
        animation: animate && isClient ? `gradient-shift ${duration} ease infinite` : undefined,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      {...containerProps}
      suppressHydrationWarning
    >
      <Component
        className={cn(
          "relative border border-border/60 bg-gradient-to-b from-background/80 to-background/30 backdrop-blur-sm rounded-lg transition-all h-full p-6",
          hovered ? "from-background/60 to-background/20 border-border/80" : "",
          className
        )}
      >
        {children}
      </Component>
    </div>
  );
}

export function GlowingBorderCard({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div
      className={cn(
        "relative rounded-2xl p-px overflow-hidden group transition-all duration-300",
        containerClassName,
        isHovered ? "shadow-[0_0_25px_rgba(120,_70,_255,_0.2)]" : ""
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-violet-500 via-purple-500 to-violet-500 opacity-70 transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-70"
        )}
        style={{
          backgroundSize: "200% 100%",
          animation: isClient ? "background-shine 2s linear infinite" : undefined,
        }}
        suppressHydrationWarning
      />

      {/* Inner content */}
      <div
        className={cn(
          "relative h-full bg-slate-950/90 backdrop-blur-sm rounded-2xl p-6 transition-all duration-300",
          className,
          isHovered ? "bg-slate-950/80" : "bg-slate-950/90"
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function ShimmerButton({
  children,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <button
      className={cn(
        "relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
      {...props}
    >
      {isClient && <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a463f2_0%,#6e47d9_50%,#a463f2_100%)]" suppressHydrationWarning />}
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <span
      className={cn(
        "bg-gradient-to-r from-violet-500 via-purple-400 to-violet-500 bg-clip-text text-transparent",
        className
      )}
      style={{
        backgroundSize: "200% auto",
        animation: isClient ? "text-gradient 4s ease infinite" : undefined,
      }}
      suppressHydrationWarning
    >
      {children}
    </span>
  );
}
