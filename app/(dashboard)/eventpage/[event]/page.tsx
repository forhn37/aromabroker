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
  console.log('Params:', params);
  console.log('SearchParams:', searchParams);
  const event = params.event
  const urlpathname = searchParams.urlpathname

  console.log('Event:', event);
  console.log('URL Pathname:', urlpathname);

  const eventtable = await GetTable<MaineventProps>('mainimage_event', 'imageurl', urlpathname)

  console.log('Event table data:', eventtable);

  return (
    <div>
      <div>
        <Image
          src={searchParams.urlpathname}
          width={500}
          height={400}
          alt={`Slide `}
          className="w-screen"
        />
      </div>
      <article className="p-3">
        <h1 className="text-xl mb-2"> 커핑 클래스 안내</h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis aut numquam quas hic facere esse quaerat unde repudiandae quisquam voluptatem nam temporibus error, doloribus libero voluptate deleniti. Iste, voluptatibus quos!
        </p>
      </article>
    </div>
  )
}