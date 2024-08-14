import Image from "next/image"

const dessertmenuitems = [
  {
    dessertname: '스트로베리 초콜릿 생크림',
    dessertnameeng: 'Strawberry Chocolate Fresh Cream Cake',
    description: '한가득 올린 상큼한 딸기, 크런치 초코볼이 초콜릿 생크림 사이사이 씹히는 투썸 시그니처 케이크',
    src: '/dessertmenu1.jpg'
  },
  {
    dessertname: '마스카포네 티라미수',
    dessertnameeng: 'Mascarpone Tiramisu',
    description: '마스카포네 치즈 크림과 에스프레소 커피 시럽이 촉촉하게 어우러진 이탈리안 무스 케이크',
    src: '/dessertmenu2.jpg'
  },
  {
    dessertname: '레드벨벳',
    dessertnameeng: 'Red Velvet',
    description: '붉은 컬러 시트에 고소한 버터 크림치즈를 풍부하게 올려 볼륨감이 돋보이는 투썸 대표 구움 케이크',
    src: '/dessertmenu3.jpg'
  },
  {
    dessertname: '뉴욕 치즈 케이크',
    dessertnameeng: 'New York Cheese Cake',
    description: '부드럽고 촉촉한 식감과 진한 치즈의 맛을 느낄 수 있는 정통 뉴욕 스타일의 구움 치즈 케이크',
    src: '/dessertmenu4.jpg'
  }
]

export default function CafemenuDessert() {
  return (
    <div>
      <div className="relative w-full sm:h-96 h-52">
        <Image src="/dessertheader.jpg" className="object-cover w-full h-full" alt="Example Image" width={1920} height={593} />
        <div className="absolute inset-0 flex justify-center flex-col items-center">
          <div className="inset-0 flex  items-center sm:text-4xl text-2xl sm : mb-10">
            DESSERT
          </div>
          <div className="inset-0 flex items-center sm:text-2xl text-base text-gray-800 flex-col">
            <div>
              Until your life is filled with fragrance,
            </div>
            <div>
              Aromabroker will be with you.
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-start w-full sm:p-20 flex-wrap">
        {dessertmenuitems.map((dessertmenuitem, index) => (
          <div className="flex w-1/2 sm:w-1/4 p-5 flex-col" key={index}>
            <Image src={dessertmenuitem.src} alt={dessertmenuitem.dessertnameeng} width={1920} height={593} />
            <div className="text-base sm:text-xl mt-4">{dessertmenuitem.dessertname}</div>
            <div className="text-xs sm:text-base text-gray-600 mt-2">{dessertmenuitem.dessertnameeng}</div>
            <div className="text-xs sm:text-sm mt-2">{dessertmenuitem.description}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
