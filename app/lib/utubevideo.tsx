import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


import { YoutubeAPIResponse, YoutubeVideo } from '../types/types'

export default async function Utubevideo() {

  const UtubechannelId = process.env.UtubechannelId as string;
  const UtubeapiKey = process.env.UtubeapiKey as string;


  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${UtubechannelId}&maxResults=8&order=date&key=${UtubeapiKey}`);

  if (!response.ok) {
    throw new Error('Failed to fetch videos');
  }

  const data: YoutubeAPIResponse = await response.json();
  const videos = data.items;


  return (
    <div className='overflow-hidden'>
      <div className='flex justify-start items-center px-4'>
        <Image
          src={`/utubeimage.png`}
          width={30}
          height={10}
          alt="Picture of the author"
          className='ml-3'
        />
        <h1 className='p-3 text-2xl sm:text-3xl'>YouTube</h1>
      </div>
      <div className='w-screen flex flex-wrap sm:px-5'>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id.videoId} className='w-1/2 sm:w-1/4 p-4'>
              <Link
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  width={1920}
                  height={1200}
                  style={{ width: '100%' }}
                  className='p-1'
                />
                <h3 className='text-base p-1'>{video.snippet.title}</h3>
              </Link>
            </div>
          ))
        ) : (
          <p>동영상을 불러오는 중입니다...</p>  // 빈 배열일 경우 로딩 메시지 표시
        )}
      </div>
    </div>
  );
}