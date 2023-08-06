"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  const pathname = usePathname();

  return (
    <div className="mr-4 md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-4">
        <Icons.logo className="h-16 w-16" />
        <span className=" font-bold sm:inline-block">{siteConfig.name}</span>
      </Link>
      <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
        <Link
          href="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80 hover:scale-110",
            pathname === "/contact" ? "text-foreground" : "text-foreground/60"
          )}>
          Giới thiệu
        </Link>
        <Link
          href="/inox-304"
          className={cn(
            "transition-colors hover:text-foreground/80 hover:scale-110",
            pathname?.startsWith("/inox-304")
              ? "text-foreground"
              : "text-foreground/60"
          )}>
          Inox 304
        </Link>
        <Link
          href="/inox-201"
          className={cn(
            "transition-colors hover:text-foreground/80 hover:scale-110",
            pathname?.startsWith("/inox-201")
              ? "text-foreground"
              : "text-foreground/60"
          )}>
          Inox 201
        </Link>
        <Link
          href={siteConfig.links.facebook}
          className={cn(
            "hidden text-foreground/60 transition-colors hover:text-foreground/80 lg:block hover:scale-110"
          )}>
          GitHub
        </Link>
      </nav>
    </div>
  );
}
