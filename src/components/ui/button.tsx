"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "link" | "navy";
  size?: "sm" | "md" | "lg" | "icon";
  animateScale?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      asChild = false,
      animateScale = true,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const baseStyles =
      "inline-flex items-center justify-center rounded-lg text-sm font-semibold tracking-wide ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer";

    const variants = {
      primary:
        "bg-primary text-white hover:bg-primary-hover shadow-md shadow-primary/20",
      secondary:
        "bg-secondary text-white hover:bg-secondary/90 shadow-md shadow-secondary/15",
      navy:
        "bg-navy text-white hover:bg-navy/90 shadow-md shadow-navy/20",
      outline:
        "border border-border-gray bg-transparent text-foreground hover:bg-slate-100 hover:text-foreground",
      ghost: "hover:bg-slate-100 hover:text-foreground",
      link: "text-primary underline-offset-4 hover:underline bg-transparent shadow-none p-0 h-auto",
    };

    const sizes = {
      sm: "h-9 px-3 rounded-md text-xs",
      md: "h-11 px-5 py-2.5",
      lg: "h-13 px-8 rounded-xl text-base",
      icon: "h-11 w-11 rounded-lg",
    };

    const MotionComp = motion.create(Comp as any);

    return (
      <MotionComp
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={animateScale ? { scale: 1.02, y: -1 } : {}}
        whileTap={animateScale ? { scale: 0.98 } : {}}
        {...(props as any)}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
