'use client'
import { useState } from "react";
import Link from "next/link";

export interface Menuitemstype {
  ABOUT: string[];
  BUSINESS: string[];
  CAFEMENU: string[];
  CLASS: string[];
  COMMUNITY: string[];
}

const menuItems: Menuitemstype = {
  ABOUT: ["About Menu 1", "About Menu 2", "About Menu 3"],
  BUSINESS: ["Business Menu 1", "Business Menu 2", "Business Menu 3"],
  CAFEMENU: ["Cafe Menu 1", "Cafe Menu 2", "Cafe Menu 3"],
  CLASS: ["Class Menu 1", "Class Menu 2", "Class Menu 3"],
  COMMUNITY: ["Community Menu 1", "Community Menu 2", "Community Menu 3"],
};

export default function LeftTopMenu() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  return (
    <>
      {Object.keys(menuItems).map((menu) => (
        <div
          key={menu}
          className="relative"
          onMouseEnter={() => handleMouseEnter(menu)}
          onMouseLeave={handleMouseLeave}
        >
          <span className="p-8 text-2xl sm:ml-4">{menu}</span>
          {openDropdown === menu && (
            <div className="absolute top-full left-0 bg-white shadow-lg p-4 z-10">
              {menuItems[menu as keyof Menuitemstype].map((item, index) => (
                <Link key={index} href={`/${menu.toLowerCase()}/${item.toLowerCase().replace(/\s+/g, '-')}`} className="block p-2">
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  )
}
