'use client'
import { useState } from "react";
import Link from "next/link";

export interface MenuItem {
  menuname: string;
  routeaddress: string;
}

export interface Menuitemstype {
  AROMABROKER: MenuItem[];
  BUSINESS: MenuItem[];
  CAFEMENU: MenuItem[];
  CLASS: MenuItem[];
  COMMUNITY: MenuItem[];
  SHOP: MenuItem[];
}

const menuItems: Menuitemstype = {
  AROMABROKER: [
    { menuname: "About", routeaddress: "about" },
    { menuname: "Profile", routeaddress: "profile" }
  ],
  SHOP: [
    { menuname: "Beans", routeaddress: "shop/beans" },
    { menuname: "DripBag", routeaddress: "shop/dripbag" },
  ],
  BUSINESS: [
    { menuname: "컨설팅", routeaddress: "business/consulting" },
    { menuname: "방문시연요청", routeaddress: "business/demonstrationrequest" },
    { menuname: "원두거래처리스트", routeaddress: "business/beandeliverylist" },
    { menuname: "디저트거래처리스트", routeaddress: "business/dessertdeliverylist" },
  ],
  CAFEMENU: [
    { menuname: "Coffee", routeaddress: "cafemenu/coffee" },
    { menuname: "Dessert", routeaddress: "cafemenu/dessert" },
  ],
  CLASS: [
    { menuname: "Barista", routeaddress: "class/barista" },
    { menuname: "Roasting", routeaddress: "class/roasting" },
    { menuname: "Cupping", routeaddress: "class/cupping" },
    { menuname: "OnedayClass", routeaddress: "class/onedayclass" },
  ],
  COMMUNITY: [
    { menuname: "Notice", routeaddress: "community/notice" },
    { menuname: "Recipe", routeaddress: "community/recipes" },
    { menuname: "Review", routeaddress: "community/review" },
    { menuname: "Q&A", routeaddress: "community/qna" },
    { menuname: "클래스신청", routeaddress: "community/classregister" },
  ],
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
        <button
          key={menu}
          className="relative sm:w-2/5 sm:flex sm:justify-center sm:items-center"
          onMouseEnter={() => handleMouseEnter(menu)}
          onMouseLeave={handleMouseLeave}
        >
          <span className="sm:p-4 sm:text-xs md:text-base">{menu}</span>
          {openDropdown === menu && (
            <div className="absolute top-full left-0 bg-white shadow-lg p-4 z-10 w-full">
              {(menuItems[menu as keyof Menuitemstype] as MenuItem[]).map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.routeaddress}`}
                  className="block py-4 sm:w-full sm:flex sm:justify-center sm:text-xs md:text-xs"
                >
                  {item.menuname}
                </Link>
              ))}
            </div>
          )}
        </button>
      ))}
    </>
  );
}
