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
    <div className="sm:flex sm:justify-around sm: p-6 ">
      <div className="sm:flex sm:justify-center sm: items-start sm:flex-col">
        {/* {eventDetails && eventDetails.webimageurl || eventDetails.mobileimageurl ? ( */}
        <Image
          src={imageUrl}
          width={3000}
          height={1200}
          alt={`Slide`}
          className="w-full"
        />
        <Image
          src='/cuppingclass.jpg'
          width={2400}
          height={1200}
          alt={`Slide`}
          className="w-full sm:p-10" />
        {/* // ) : (
        //   <p>Image not available</p> // 대체 텍스트 또는 요소
        // )} */}
      </div>
      {eventDetails ? (
        <article className="p-2 sm:p-10 sm:w-2/5 sm:flex sm:justify-center">
          <h1 className="text-xl mb-2">{eventDetails.title}</h1>
          <div>
            hi
          </div>
        </article>
      ) : (
        <p>Event details not available</p> // 대체 텍스트 또는 요소
      )}
    </div>
  );
}
