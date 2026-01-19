"use client";

import { motion } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef } from "react";

interface AnimatedButtonProps extends ButtonProps {
  animationType?: "scale" | "lift" | "shine" | "pulse";
}

export const AnimatedButton = forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ animationType = "scale", children, className, ...props }, ref) => {
    const animations = {
      scale: {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { type: "spring", stiffness: 400, damping: 17 }
      },
      lift: {
        whileHover: { y: -4, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)" },
        whileTap: { y: 0 },
        transition: { duration: 0.2 }
      },
      shine: {
        whileHover: {
          boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
          scale: 1.02
        },
        whileTap: { scale: 0.98 },
        transition: { duration: 0.3 }
      },
      pulse: {
        animate: {
          scale: [1, 1.05, 1],
          transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }
        },
        whileTap: { scale: 0.95 }
      }
    };

    return (
      <motion.div
        {...animations[animationType]}
        className="inline-flex"
      >
        <Button ref={ref} className={className} {...props}>
          {children}
        </Button>
      </motion.div>
    );
  }
);

AnimatedButton.displayName = "AnimatedButton";
