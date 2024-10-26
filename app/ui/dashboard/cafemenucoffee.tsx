import Image from "next/image"

const coffeemenuitems = [
  {
    coffeename: '아메리카노',
    coffeenameeng: 'Americano',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/coffee/americano.jpg?t=2024-10-26T06%3A28%3A02.260Z'
  },
  {
    coffeename: '아이스아메리카노',
    coffeenameeng: 'Ice Americano',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/coffee/iceamericano.jpg?t=2024-10-26T06%3A29%3A39.827Z'
  },
  {
    coffeename: '까페라떼',
    coffeenameeng: 'Caffe Latte',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/coffee/caffelatte.jpg?t=2024-10-26T06%3A28%3A29.141Z'
  },
  {
    coffeename: '까페모카',
    coffeenameeng: 'Caffe Mocha',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/coffee/caffemocha.jpg'
  },
  {
    coffeename: '에스프레소',
    coffeenameeng: 'Espresso',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/coffee/espresso.jpg?t=2024-10-26T06%3A29%3A07.608Z'
  },
  {
    coffeename: '에스프레소마키아토',
    coffeenameeng: 'Espresso Macchiato',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/coffee/espressomachiatto.jpg'
  },
  {
    coffeename: '보네펠트루이보스크림오렌지',
    coffeenameeng: 'Ronnefeldt Rooibos Cream Orange',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/coffee/luibosorage.jpg'
  },
  {
    coffeename: '너트크림콜드브루라떼',
    coffeenameeng: 'Nut Cream Coldbrew Latte',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/coffee/nut%20cream%20coldbrewlatte.jpg?t=2024-10-26T06%3A31%3A58.665Z'
  },
  {
    coffeename: '바닐라라떼',
    coffeenameeng: 'Vanilla Latte',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/coffee/vanillalatte.jpg'
  },
]

export default function CafemenuCoffee() {
  return (
    <div>
      <div className="relative w-full sm:h-96 h-52">
        <Image src="/rowlongimage.jpg" className="object-cover w-full h-full" alt="Example Image" width={1920} height={593} />
        <div className="absolute inset-0 flex justify-center flex-col items-center">
          <div className="inset-0 flex  items-center sm:text-4xl text-2xl sm : mb-10">
            COFFEE
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
        {coffeemenuitems.map((coffeemenuitem, index) => (
          <div className="flex w-1/2 sm:w-1/4 p-5 flex-col" key={index}>
            <Image src={coffeemenuitem.src} alt={coffeemenuitem.coffeenameeng} width={1920} height={593} />
            <div className="text-base sm:text-xl mt-4">{coffeemenuitem.coffeename}</div>
            <div className="text-xs sm:text-base text-gray-600 mt-2">{coffeemenuitem.coffeenameeng}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
