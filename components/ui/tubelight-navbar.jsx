"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * "Tubelight" navbar — a floating pill nav with a spring-animated active
 * indicator (the glowing lamp on top). Fixed to the bottom-center on mobile
 * and the top-center on desktop. Shows an icon per item on small screens and
 * the text label on large screens.
 *
 * Adapted for this JS project:
 *   - Types stripped (.tsx -> .jsx).
 *   - shadcn theme tokens (primary/muted/foreground/border/background) mapped
 *     to this site's palette (brand / navy / slate / white).
 *   - Active state is derived from the current route via `usePathname` instead
 *     of a local click-only state, so the correct tab stays lit on navigation
 *     and page refresh.
 *
 * Props:
 *   items     {Array}  [{ name, url, icon }] — icon is a lucide-react component.
 *   className {string} Extra classes for the fixed wrapper.
 */
export function NavBar({ items, className }) {
  const pathname = usePathname();

  const isActive = (url) =>
    url === "/" ? pathname === "/" : pathname.startsWith(url);

  const activeName =
    items.find((item) => isActive(item.url))?.name ?? items[0].name;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-1/2 z-50 mb-6 -translate-x-1/2 lg:top-0 lg:mb-0 lg:pt-6",
        className
      )}
    >
      <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white/80 px-1 py-1 shadow-lg backdrop-blur-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const active = item.name === activeName;

          return (
            <Link
              key={item.name}
              href={item.url}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative cursor-pointer rounded-full px-4 py-2 text-sm font-semibold tracking-wide transition-colors xl:px-6",
                "text-navy/80 hover:text-brand",
                active && "bg-brand/10 text-brand"
              )}
            >
              <span className="hidden xl:inline">{item.name}</span>
              <span className="xl:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {active && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-brand/5"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-brand">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-brand/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-brand/20 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-brand/20 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
