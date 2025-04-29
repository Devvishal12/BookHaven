import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Home, LogIn, UserPlus, User, Menu, Settings, Info, Star, DollarSign, Mail } from "lucide-react";

interface NavbarItem {
    href: string;
    children: React.ReactNode;
    icon?: React.ReactNode;
}

interface Props {
    items: NavbarItem[];
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ items, open, onOpenChange }: Props) => {
    const loginItem = { href: "/sign-in", children: "Log in", icon: <LogIn className="w-5 h-5 mr-2" /> };
    const signupItem = { href: "/sign-up", children: "Start Selling", icon: <UserPlus className="w-5 h-5 mr-2" /> };

    const getIconForItem = (name: string) => {
        const lowerName = name.toString().toLowerCase();
        if (lowerName.includes("home")) return <Home className="w-5 h-5 mr-2" />;
        if (lowerName.includes("profile") || lowerName.includes("user")) return <User className="w-5 h-5 mr-2" />;
        if (lowerName.includes("settings") || lowerName.includes("config")) return <Settings className="w-5 h-5 mr-2" />;
        if (lowerName.includes("about") || lowerName.includes("info")) return <Info className="w-5 h-5 mr-2" />;
        if (lowerName.includes("features")) return <Star className="w-5 h-5 mr-2" />;
        if (lowerName.includes("pricing")) return <DollarSign className="w-5 h-5 mr-2" />;
        if (lowerName.includes("contact")) return <Mail className="w-5 h-5 mr-2" />;
        return <Menu className="w-5 h-5 mr-2" />;
    };

    const handleLinkClick = () => {
        onOpenChange(false); // Close sidebar on link click
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            <SheetContent 
                side="left" 
                className={`
                    p-0 w-64 bg-white border-r border-gray-200 
                    transition-transform duration-300 ease-in-out
                    ${open ? 'translate-x-0' : '-translate-x-full'}
                `}
            >
                <SheetHeader className="p-6 border-b border-gray-200">
                    <div className="flex items-center">
                        <SheetTitle className="text-2xl font-bold text-gray-900">
                            Menu
                        </SheetTitle>
                    </div>
                </SheetHeader>
                <ScrollArea className="flex flex-col h-full pb-4">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={handleLinkClick}
                            className="w-full text-left p-4 hover:bg-gray-100 hover:text-gray-900 flex items-center text-base font-medium text-gray-700 transition-colors duration-200 rounded-md mx-2 my-1"
                        >
                            {item.icon || getIconForItem(item.children as string)}
                            {item.children}
                        </Link>
                    ))}
                    <Link
                        href={loginItem.href}
                        onClick={handleLinkClick}
                        className="w-full text-left p-4 hover:bg-gray-100 hover:text-gray-900 flex items-center text-base font-medium text-gray-700 transition-colors duration-200 rounded-md mx-2 my-1"
                    >
                        {loginItem.icon}
                        {loginItem.children}
                    </Link>
                    <Link
                        href={signupItem.href}
                        onClick={handleLinkClick}
                        className="w-full text-left p-4 hover:bg-blue-100 hover:text-blue-900 flex items-center text-base font-medium text-gray-700 transition-colors duration-200 rounded-md mx-2 my-1"
                    >
                        {signupItem.icon}
                        {signupItem.children}
                    </Link>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
};