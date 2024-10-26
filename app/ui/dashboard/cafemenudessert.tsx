import Image from "next/image"

const dessertmenuitems = [
  {
    dessertname: '아몬드초코비스코티',
    dessertnameeng: 'Amond Chocolate Biscotti',
    description: '한번 구워 낸 다음 살짝 식혀서 먹기 좋게 자른 다음 다시 오븐에서 완전히 건조될 때 까지 구워 낸 비스킷',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Amond%20Choco%20Biscotti.jpg'
  },
  {
    dessertname: '아몬드비스코티',
    dessertnameeng: 'Amond Biscotti',
    description: '한번 구워 낸 다음 살짝 식혀서 먹기 좋게 자른 다음 다시 오븐에서 완전히 건조될 때 까지 구워 낸 비스킷',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Amond%20Biscotti.jpg'
  },
  {
    dessertname: '발로나초코휘낭시에',
    dessertnameeng: 'Valrhona Chocolate Financier',
    description: '천연버터의 풍미에 코코아, 진한 발로나초코스틱으로 깊은맛을 낸 초코휘낭시에',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Valrhona%20Chocolate%20Financier.jpg'
  },
  {
    dessertname: '바닐라빈휘낭시에',
    dessertnameeng: 'Vanilla bean Financier',
    description: '천연버터의 풍미에 바닐라빈의 풍미를 느낄 수 있는 휘낭시에',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Vanilla%20bean%20Financier.jpg'
  },
  {
    dessertname: '솔티드아몬드휘낭시에',
    dessertnameeng: 'Salted Amond Financier',
    description: '달콤한 아몬드와 솔티드한 카라멜이 조화가 된 휘낭시에',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Salted%20Amond%20Financier.jpg'
  },
  {
    dessertname: '고메버터쿠키',
    dessertnameeng: 'Gourmet Butter Cookie',
    description: '프랑스 고메버터에서 느낄 수 있는 풍미를 그대로 담은 고소한 쿠키',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Gourmet%20Butter%20Cookie.jpg'
  },
  {
    dessertname: '촉촉한초코칩쿠키',
    dessertnameeng: 'Soft Chocolate Chip Cookie',
    description: '겉은 바삭하고 속은 쫀득한 식감의 초코칩이 가득한 쿠키',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Soft%20Chocolate%20Chip%20Cookie.jpg'
  },
  {
    dessertname: '감태오란다',
    dessertnameeng: 'Ecklonia cava Oranda',
    description: '감태 특유의 싱그러운 향과 부드러운 식감의 오란다를 함께 즐길 수 있는 전통디저트',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Ecklonia%20cava%20Oranda.jpg'
  },
  {
    dessertname: '흑임자오란다',
    dessertnameeng: 'Black Sesame Oranda',
    description: '부드러운 식감의 오란다와 흑임자의 조합으로 남녀노소 함께 즐길 수 있는 전통디저트',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Black%20Sesame%20Oranda.jpg'
  },
  {
    dessertname: '씨앗오란다',
    dessertnameeng: 'Seed Oranda',
    description: '씨앗 특유의 고소함과 부드러운 식감의 오란다의 조합으로 탄생한 전통디저트',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Seed%20Oranda.jpg'
  },
  {
    dessertname: '플레인오란다',
    dessertnameeng: 'Plain Oranda',
    description: '남녀노소 좋아하는 부드러운 식감의 오란다',
    src: 'https://qblzpggxwtpkzdhsxtxh.supabase.co/storage/v1/object/public/aromabrokerbucket/dessert/Plain%20Oranda.jpg'
  },
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
