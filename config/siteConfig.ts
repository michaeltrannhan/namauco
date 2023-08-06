export const siteConfig = {
  name: "Inox Nam Âu",
  url: "localhost:3000",
  ogImage: null,
  description: "Công ty TNHH Thương mại và Dịch vụ Nam Âu.",
  links: {
    facebook: "",
    zalo: "",
  },
};
export type SiteConfig = typeof siteConfig;

import { MainNavItem, SidebarNavItem } from "@/types/nav";

interface NavConfig {
  mainNav: MainNavItem[];
  sidebarNav?: SidebarNavItem[];
}

export const navConfig: NavConfig = {
  mainNav: [
    {
      title: "Trang chủ",
      href: "/",
    },
    {
      title: "Giới thiệu",
      href: "/gioi-thieu",
    },
    {
      title: "Inox 304",
      href: "/inox-304",
    },
    {
      title: "Inox 310",
      href: "/inox-310",
    },
    {
      title: "Inox 316",
      href: "/inox-316",
    },
    {
      title: "Inox 201",
      href: "/inox-201",
    },
  ],
};
