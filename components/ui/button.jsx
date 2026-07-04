"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

/**
 * Minimal shadcn-style Button, adapted for this JS project.
 *
 * Implements the variant/size API the shadcn components in this repo rely on
 * (e.g. the Carousel arrows use variant="ghost"/"outline", size="icon"),
 * mapped to the site palette (brand / navy / slate) instead of the shadcn CSS
 * variables that this project does not define.
 */
const VARIANTS = {
  default: "bg-brand text-white hover:bg-[#173C82]",
  ghost: "text-navy hover:bg-slate-100",
  outline: "border border-slate-200 bg-white text-navy hover:bg-slate-50",
};

const SIZES = {
  default: "h-10 px-4 py-2",
  icon: "h-10 w-10",
};

export const Button = forwardRef(function Button(
  { className, variant = "default", size = "default", type = "button", ...props },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        VARIANTS[variant] ?? VARIANTS.default,
        SIZES[size] ?? SIZES.default,
        className
      )}
      {...props}
    />
  );
});
