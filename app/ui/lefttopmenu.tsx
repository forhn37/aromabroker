'use client'
import { useState } from "react";
import Link from "next/link";

export interface MenuItem {
  menuname: string;
  routeaddress: string;
}

export interface Menuitemstype {
  ABOUT: MenuItem[];
  BUSINESS: MenuItem[];
  CAFEMENU: MenuItem[];
  CLASS: MenuItem[];
  COMMUNITY: MenuItem[];
}

const menuItems: Menuitemstype = {
  ABOUT: [{ menuname: "AROMABROKER", routeaddress: "about" }],
  BUSINESS: [
    { menuname: "컨설팅", routeaddress: "business/consulting" },
    { menuname: "방문시연요청", routeaddress: "business/demonstrationrequest" },
    { menuname: "원두납품 리스트", routeaddress: "business/beandeliverylist" },
    { menuname: "디저트납품 리스트", routeaddress: "business/dessertdeliverylist" },
  ],
  CAFEMENU: [
    { menuname: "Coffee", routeaddress: "cafemenu/coffee" },
    { menuname: "Dessert", routeaddress: "cafemenu/dessert" },
  ],
  CLASS: [
    { menuname: "바리스타 초급&심화", routeaddress: "class/barista" },
    { menuname: "로스팅 초급&심화", routeaddress: "class/roasting" },
    { menuname: "커핑", routeaddress: "class/cupping" },
    { menuname: "원데이클래스", routeaddress: "class/onedayclass" },
  ],
  COMMUNITY: [
    { menuname: "공지", routeaddress: "community/notice" },
    { menuname: "레시피", routeaddress: "community/recipes" },
    { menuname: "리뷰", routeaddress: "community/review" },
    { menuname: "Q&A", routeaddress: "community/qna" },
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
        <div
          key={menu}
          className="relative sm:w-1/5 sm:flex sm:justify-center sm:items-center "
          onMouseEnter={() => handleMouseEnter(menu)}
          onMouseLeave={handleMouseLeave}
        >
          <span className="text-3xl sm:p-4">{menu}</span>
          {openDropdown === menu && (
            <div className="absolute top-full left-0 bg-white shadow-lg p-4 z-10 w-full">
              {(menuItems[menu as keyof Menuitemstype] as MenuItem[]).map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.routeaddress}`}
                  className="block p-2 py-4 sm:w-full sm:flex sm:justify-center text-lg"
                >
                  {item.menuname}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
