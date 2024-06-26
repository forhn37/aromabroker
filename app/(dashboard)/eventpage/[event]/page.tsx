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
  // console.log('Params:', params);
  // console.log('SearchParams:', searchParams);
  const urlpathname = searchParams.urlpathname

  // console.log('Event:', event);
  // console.log('URL Pathname:', urlpathname);

  const eventtable = await GetTable<MaineventProps>('mainimage_event', 'imageurl', urlpathname)

  // console.log('Event table data:', eventtable);

  const eventDetails = eventtable[0];

  return (
    <div>
      <div>
        <Image
          src={eventDetails.imageurl}
          width={500}
          height={400}
          alt={`Slide `}
          className="w-screen"
        />
      </div>
      <article className="p-3">
        <h1 className="text-xl mb-2">{eventDetails.title}</h1>
        <div className="whitespace-pre-wrap">
          {eventDetails.content}
        </div>
      </article>
    </div>
  )
}