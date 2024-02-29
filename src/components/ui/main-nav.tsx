"use client";

import * as React from "react";
import Link from "next/link";
import { NavigationMenu, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "y/components/ui/navigation-menu";
import { siteConfig } from "y/config/site";
import { NavItem } from "y/types/nav";

const MainNav = React.memo(() => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  function renderNavItem(item: NavItem, index: number) {
    return (
      <Link key={index} href={item.href} passHref legacyBehavior>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>{item.label}</NavigationMenuLink>
      </Link>
    );
  }

  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden lg:block">{siteConfig.header.map(renderNavItem)}</NavigationMenuList>
    </NavigationMenu>
  );
});

MainNav.displayName = "MainNav";
export { MainNav };
