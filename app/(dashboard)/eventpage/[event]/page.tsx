import GetTable from "@/app/lib/supabase/gettable";
import { MaineventProps } from "@/app/types/types";
import Image from "next/image";
export interface paramsProps {
  params: event;
  searchParams: urlpathname;
}
export interface event {
  event: string;
}

export interface urlpathname {
  urlpathname: string;
}

export default async function Event({ params, searchParams }: paramsProps) {
  const urlpathname = searchParams.urlpathname;
  console.log(urlpathname)
  const eventtable = await GetTable<MaineventProps>('mainimage_event', 'imageurl', urlpathname);
  console.log(eventtable)
  const eventDetails = eventtable[0];

  return (
    <div className="sm:flex sm:justify-around sm: p-12">
      <div className="sm:flex sm:justify-center sm: items-start">
        {eventDetails && eventDetails.imageurl ? (
          <Image
            src={eventDetails.imageurl}
            width={500}
            height={400}
            alt={`Slide`}
            className="w-full"
          />
        ) : (
          <p>Image not available</p> // 대체 텍스트 또는 요소
        )}
      </div>
      {eventDetails ? (
        <article className="p-2 sm:p-10">
          <h1 className="text-xl mb-2">{eventDetails.title}</h1>
          <div className="whitespace-pre-wrap">
            {eventDetails.content}
          </div>
        </article>
      ) : (
        <p>Event details not available</p> // 대체 텍스트 또는 요소
      )}
    </div>
  );
}
