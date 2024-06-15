'use client'
import Card from "@/app/ui/dashboard/card";
import { listImages } from "@/app/lib/supabase/listImages";
import { getImageUrl } from "@/app/lib/supabase/getImageUrl";
import { useState } from "react";

export default function Beans() {
  const [confirmedurl, setConfirmedurl] =useState([''])

  const fetchImages = async () => {
    const beansImageFilePaths = await listImages("beans")
    console.log(beansImageFilePaths)
    if (!beansImageFilePaths) return


    const urls = await Promise.all(beansImageFilePaths.map(path => getImageUrl(path)))
    console.log(urls)

    const checkedUrls = urls.filter((url): url is string => url !== null)
    setConfirmedurl(checkedUrls)
  }
  fetchImages();

  return (
    <main>
      <Card category={"Aromabroker Signiture Beans"} description ={"아로마브로커만의 특유한 풍미가 담겨있는 시그니처 원두"} confirmedurl={confirmedurl}/>
    </main>
  );
}