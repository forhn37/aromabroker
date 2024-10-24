import GetTable from "@/app/lib/supabase/gettable";
import { MaineventProps } from "@/app/types/types";
import Image from "next/image";
import Link from "next/link";
export interface paramsProps {
  params: event;
  searchParams: urlpathname;
}
export interface event {
  event: string;
}

export interface urlpathname {
  urlpathname: string;
  ismobileweb: string;
}

export default async function Event({ params, searchParams }: paramsProps) {
  const urlpathname = searchParams.urlpathname;
  const ismobileweb = searchParams.ismobileweb;
  console.log(ismobileweb)
  console.log(urlpathname)
  const eventtable = await GetTable<MaineventProps>('mainimage_event', ismobileweb, urlpathname);
  console.log(eventtable)
  const eventDetails = eventtable[0];

  const imageUrl = eventDetails[ismobileweb as keyof MaineventProps] as string;

  return (
    <div className="sm:flex sm:justify-around sm:p-6 ">
      <Image
        src='/cuppingclass.jpg'
        width={2400}
        height={1200}
        alt={`Slide`}
        className="w-3/2" />
      {eventDetails ? (
        <article className="p-2 sm:p-10 sm:w-2/5 sm:flex sm:justify-start sm:flex-col">
          <h1 className="sm:text-3xl mb-2 font-semibold">{eventDetails.title}</h1>
          <h2 className="text-2xl sm:mt-4">이달의 클래스</h2>
          <h2 className="text-2xl sm:mt-4">30,000원</h2>
          <div className="flex flex-col sm:text-xl sm:mt-4 mt-2">
            <div>클래스 수강료는 현장결제 및 계좌이체만 가능한 점 양해 부탁드립니다. </div>
            <div>
              클래스 날짜 및 시간은 당월 인원의 스케쥴에 따라 달라질수 있습니다.
            </div>
          </div>
          <div className="sm:mt-10 sm:w-full flex justify-center items-center sm:h-20 border border-black sm:px-10 mt-5 h-10">
            <Link href="/community/classregister " className="w-full h-full">
              <button className="sm:text-2xl w-full h-full text-xs ">클래스신청 바로가기</button>
            </Link>
          </div>
        </article>
      ) : (
        <p>Event details not available</p> // 대체 텍스트 또는 요소
      )}
    </div>
  );
}
