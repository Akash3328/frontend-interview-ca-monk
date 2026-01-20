import {
  NavigationMenuRoot,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full h-16 bg-white border-b z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between h-full px-4">
        
        {/* Left Logo */}
        <div className="flex items-center gap-2">
          <img src="/CAlogo.svg" alt="Brand Logo" className="h-10 w-10" />
          <span className="font-semibold text-lg tracking-tight">CA Monk</span>
        </div>

        {/* Middle Navigation using shadcn */}
        <NavigationMenuRoot className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#">Tools</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">Practice</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">Events</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">Blog</NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink href="#">Job Board</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenuRoot>

        {/* Right Button */}
        <button className="px-4 py-1.5 text-sm bg-teal-950 text-white rounded-md hover:bg-teal-700 transition-colors">
          Profile
        </button>
      </div>
    </header>
  )
}

export default Header
