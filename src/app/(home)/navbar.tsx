"use client"

import Link from "next/link";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}

const NavbarItem = ({ href, children, isActive }: NavbarItemProps) => {
  return (
    <Button asChild variant={isActive ? "default" : "ghost"}>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  { href: "/", children: "Home" },
  { href: "/about", children: "About" },
  { href: "/features", children: "Features" },
  { href: "/pricing", children: "Pricing" },
  { href: "/contact", children: "Contact" },
];

export const Navbar = () => {
      const pathname = usePathname();
      const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <nav className="h-20 flex border-b justify-between font-medium bg-white">
      <Link href="/" className="pl-6 flex items-center">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          BookHaven
        </span>
      </Link>

      <NavbarSidebar 
      items={navbarItems}
      open={isSidebarOpen}
      onOpenChange={setSidebarOpen}
      />

      <div className="items-center gap-4 hidden lg:flex pr-6">
        {navbarItems.map((item) => (
          <NavbarItem
            key={item.href}
            href={item.href}
            isActive={pathname === item.href} // You can add logic to set isActive based on the current route
          >
            {item.children}
          </NavbarItem>
        ))}
      </div>
       
       <div className="hidden lg:flex">
        <Button
        asChild
        variant="elevated"
        className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-white hover:bg-pink-400 transition-colors text-lg"
        >
          <Link href="/sign-in">
          login
          </Link>
        </Button>
        <Button
        asChild
        variant="elevated"
        className="border-l border-t-0 border-b-0 border-r-0 px-12 h-full rounded-none bg-black text-white hover:bg-pink-400 hover:text-black transition-colors text-lg "
        >
          <Link href="/sign-up">
          Start selling
          </Link>
        </Button>
       </div>

       <div className="flex lg:hidden items-center justify-center" >
            <Button
            variant="ghost"
            className="size-12 border-transparent bg-white"
            onClick={ () => setSidebarOpen(true)}
            >
              <MenuIcon />
            </Button>
       </div>
      
    </nav>
  );
};