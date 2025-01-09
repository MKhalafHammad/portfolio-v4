"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors = ["#1d4ed8", "#2563eb", "#3b82f6"],
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  offsetFactor = 10,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  offsetFactor?: number;
}) => {
  const noise = createNoise3D();
  let w: number,
    h: number,
    nt: number,
    i: number,
    x: number,
    y: number,
    v: number;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const init = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d")!;
    const scale = window.devicePixelRatio || 1;
    
    w = ctx.canvas.width = window.innerWidth * scale;
    h = ctx.canvas.height = window.innerHeight * scale;
    ctx.scale(scale, scale);
  };

  const animate = () => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d")!;

    ctx.fillStyle = backgroundFill;
    ctx.fillRect(0, 0, w, h);

    nt = 0;
    for (i = 0; i < colors.length; i++) {
      ctx.beginPath();
      ctx.moveTo(0, h);

      for (x = 0; x < w; x += waveWidth) {
        v =
          noise(
            x / 1000,
            x / 1000,
            nt + i * offsetFactor + (speed === "fast" ? Date.now() / 2000 : Date.now() / 5000)
          ) * 100;
        y = v + h * 0.5;
        ctx.lineTo(x, y);
      }

      ctx.lineTo(w, h);
      ctx.fillStyle = colors[i];
      ctx.globalAlpha = waveOpacity;
      ctx.fill();
    }

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={cn(
        "h-full w-full flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className={cn("absolute inset-0 z-0", className)}
        ref={canvasRef}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}; 