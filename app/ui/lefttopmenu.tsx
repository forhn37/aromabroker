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
  ABOUT: [{ menuname: "ABOUT AROMABROKER", routeaddress: "about" }],
  BUSINESS: [
    { menuname: "사업자 컨설팅", routeaddress: "business/consulting" },
    { menuname: "사업자 방문 시연 요청", routeaddress: "business/demonstrationrequest" },
    { menuname: "사업자 원두 납품 리스트", routeaddress: "business/beansupply" },
    { menuname: "사업자 디저트 납품 리스트", routeaddress: "business/dessertsupply" },
  ],
  CAFEMENU: [
    { menuname: "Coffee", routeaddress: "cafemenu/coffee" },
    { menuname: "Dessert", routeaddress: "cafemenu/dessert" },
  ],
  CLASS: [
    { menuname: "바리스타 초급 & 심화", routeaddress: "class/barista-basic" },
    { menuname: "로스팅 초급 & 심화", routeaddress: "class/roasting-basic" },
    { menuname: "커핑", routeaddress: "class/cupping" },
    { menuname: "원데이클래스", routeaddress: "class/oneday" },
  ],
  COMMUNITY: [
    { menuname: "공지", routeaddress: "community/notice" },
    { menuname: "레시피", routeaddress: "community/recipe" },
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
          className="relative"
          onMouseEnter={() => handleMouseEnter(menu)}
          onMouseLeave={handleMouseLeave}
        >
          <span className="p-8 text-2xl sm:ml-4">{menu}</span>
          {openDropdown === menu && (
            <div className="absolute top-full left-0 bg-white shadow-lg p-4 z-10">
              {(menuItems[menu as keyof Menuitemstype] as MenuItem[]).map((item, index) => (
                <Link
                  key={index}
                  href={`/${item.routeaddress}`}
                  className="block p-2"
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
