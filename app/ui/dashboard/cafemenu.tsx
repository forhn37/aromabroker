import Image from "next/image"

const coffeemenuitems = [
  {
    coffeename: '스페니쉬 연유라떼',
    coffeenameeng: 'Spanish Condensed Milk Café Latte',
    description: '평화로운 유럽 초원의 감성을 담은 부드럽고 달콤한 스페니쉬 연유라떼',
    src: '/coffeemenu1.png'
  },
  {
    coffeename: '롱블랙',
    coffeenameeng: 'Long Black',
    description: '아메리카노보다 진하고 부드러운 플레이버를 느낄 수 있는 에스프레소 음료',
    src: '/coffeemenu2.png'
  },
  {
    coffeename: '허니 레몬티',
    coffeenameeng: 'Honey Lemon Tea',
    description: '진한 TWG 프렌치 얼그레이의 향과 달콤한 꿀, 상큼한 레몬이 녹아든 향긋한 티',
    src: '/coffeemenu3.png',
  },
  {
    coffeename: '스트로베리 피치 프라페',
    coffeenameeng: 'Strawberry Peach Frappe',
    description: '딸기와 복숭아의 상큼함이 조화롭게 어우러져 달콤하고 시원하게 즐길 수 있는 과일 프라페',
    src: '/coffeemenu4.png'
  }

]

export default function CafemenuCoffee() {
  return (
    <div>
      <div className="relative w-full sm:h-96 h-52">
        <Image src="/rowlongimage.jpg" className="object-cover w-full h-full" alt="Example Image" width={1920} height={593} />
        <div className="absolute inset-0 flex justify-center items-center sm:text-4xl text-2xl">
          Coffee
        </div>
      </div>
      <div className="flex justify-start w-full sm:p-20 flex-wrap">
        {coffeemenuitems.map((coffeemenuitem, index) => (
          <div className="flex w-1/2 sm:w-1/4 p-5 flex-col" key={index}>
            <Image src={coffeemenuitem.src} alt={coffeemenuitem.coffeenameeng} width={1920} height={593} />
            <div className="text-base sm:text-xl mt-4">{coffeemenuitem.coffeename}</div>
            <div className="text-xs sm:text-base text-gray-600 mt-2">{coffeemenuitem.coffeenameeng}</div>
            <div className="text-xs sm:text-sm mt-2">{coffeemenuitem.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
