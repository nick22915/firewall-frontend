"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import {
  Menu as MenuIcon,
  X as XIcon,
  ChevronDown,
  Shield,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { navigationItems, NavLink } from "@/lib/navigation";
import { cn } from "@/lib/utils";
import TrafficComponent from "@/components/layout/trafficHeader"; // Import the traffic component

export function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const loaderClass = isLoading
    ? "fixed inset-0 w-full h-screen bg-black bg-opacity-50 flex items-center justify-center z-[9999]"
    : "hidden";

  const renderNavLink = (link: NavLink, isMobile: boolean = false) => {
    const Icon = link.icon;
    const isActive = pathname === link.href;

    return (
      <Link
        href={link.href}
        passHref
        // Updated for mobile
      >
        {isMobile ? (
          <SheetClose asChild>
            <a
              className={cn(
                "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                isActive
                  ? "bg-accent text-accent-foreground"
                  : "text-foreground"
              )}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {Icon && <Icon className="h-5 w-5" />}
              {link.label}
            </a>
          </SheetClose>
        ) : (
          <DropdownMenuItem
            className={cn(
              "flex cursor-pointer items-center gap-2 text-sm",
              isActive && "bg-accent text-accent-foreground"
            )}
            onSelect={() => handleNavigationClick()}
          >
            {Icon && <Icon className="h-4 w-4" />}
            {link.label}
          </DropdownMenuItem>
        )}
      </Link>
    );
  };

  const handleNavigationClick = () => {
    setIsLoading(true); 

    setTimeout(() => {
      setIsLoading(false); 
    }, 3000);
  };

  const desktopNav = (
    <nav className="hidden md:flex items-center space-x-1">
      {navigationItems.map((item) => {
        const MainIcon = item.icon;
        const isParentActive = pathname.startsWith(item.basePath);
        return (
          <DropdownMenu key={item.label}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "px-3 py-2 text-sm font-medium hover:bg-primary/80 hover:text-primary-foreground rounded-md",
                  isParentActive
                    ? "bg-primary/70 text-primary-foreground"
                    : "text-primary-foreground"
                )}
              >
                <MainIcon className="mr-2 h-5 w-5" />
                {item.label}
                <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="start"
              className="w-56 bg-card text-card-foreground shadow-lg rounded-md"
            >
              {item.subLinks.map((link) => (
                <React.Fragment key={link.href}>
                  {renderNavLink(link)}
                </React.Fragment>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        );
      })}
    </nav>
  );

  const mobileNav = (
    <div className="md:hidden">
      <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-primary-foreground hover:bg-primary/80"
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="w-full max-w-xs bg-background p-0 sm:max-w-sm"
        >
          <div className="flex justify-between items-center p-4 border-b">
            <Link href="/" passHref>
              <Shield className="h-7 w-7" />
              <span>Dashboard Nav</span>
            </Link>
            <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <XIcon className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </SheetClose>
          </div>
          <div className="p-4">
            <Accordion type="single" collapsible className="w-full">
              {navigationItems.map((item) => {
                const MainIcon = item.icon;
                return (
                  <AccordionItem
                    value={item.label}
                    key={item.label}
                    className="border-b-0"
                  >
                    <AccordionTrigger className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium hover:bg-muted hover:no-underline">
                      <div className="flex items-center gap-3">
                        <MainIcon className="h-5 w-5 text-primary" />
                        {item.label}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-1 pb-2 pl-4">
                      <div className="flex flex-col space-y-1">
                        {item.subLinks.map((link) => (
                          <React.Fragment key={link.href}>
                            {renderNavLink(link, true)}
                          </React.Fragment>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );

  if (!isMounted) {
    return (
      // Skeleton or minimal header during SSR/hydration mismatch prevention phase
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary shadow-sm">
        <div className={loaderClass}>
          {/* Loader Spinner */}
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" passHref>
            <div className="flex items-center gap-2 text-white 2xl:text-2xl font-bold">
              <Shield className="h-7 w-7" />
              <span>Firewall Dashboard</span>
            </div>
          </Link>
          <div className="h-8 w-8 rounded-md bg-primary/50 md:hidden"></div>
          <div className="hidden md:flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-8 w-24 rounded-md bg-primary/50"></div>
            ))}
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-primary shadow-md backdrop-blur supports-[backdrop-filter]:bg-primary/60">
      <div className={loaderClass}>
        {/* Loader Spinner */}
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" passHref>
          <div className="flex items-center gap-2 text-white font-bold 2xl:text-2xl">
            <Shield className="h-9 w-9" />
            <span>Firewall Dashboard</span>
          </div>
        </Link>
        {desktopNav}
        {mobileNav}
      </div>
      <TrafficComponent />
    </header>
  );
}
