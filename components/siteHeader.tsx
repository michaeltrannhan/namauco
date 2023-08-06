// "use client";
import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SiteConfig, siteConfig } from "@/config/siteConfig";
import { ModeToggle } from "./modeToggler";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { MainNav } from "./headers/navbar";
import { CommandMenu } from "./searchBar";
import { MobileNav } from "./mobileNavigation";
import { Switch } from "./ui/switch";
import { ScrollingProgress } from "./scrollingProgress";
// import { useTheme } from "next-themes";

type Props = {};

const SiteHeader = (props: Props) => {
  // const { theme, setTheme } = useTheme();
  return (
    <header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-14 px-0 items-center ">
        <MainNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <CommandMenu />
          </div>
          <nav className="flex items-center">
            <ModeToggle />
            {/* <Switch
              onCheckedChange={() => {
                if (theme === "dark") {
                  setTheme("light");
                } else {
                  setTheme("dark");
                }
              }}
            /> */}
            <Link
              href={siteConfig.links.facebook}
              target="_blank"
              rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}>
                <Icons.gitHub className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            <Link href={siteConfig.links.zalo} target="_blank" rel="noreferrer">
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0"
                )}>
                <Icons.twitter className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link>
          </nav>
        </div>
        <MobileNav />
      </div>
      <ScrollingProgress />
    </header>
  );
};

export default SiteHeader;
