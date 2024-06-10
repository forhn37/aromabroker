'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


import { YoutubeAPIResponse, YoutubeVideo } from '../types/types'


export default function Utubevideo() {
  const [videos, setVideos] = useState<YoutubeVideo[]>([]);
  console.log(videos.length)

  useEffect(() => {
    async function fetchChannelVideos() {
      try {
        const res = await fetch('/api/utubeapi');
        console.log(res)
        if (!res.ok) {
          throw new Error('Failed to fetch videos');
        }

        const data : YoutubeAPIResponse = await res.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }

    fetchChannelVideos();
  }, []);

  return (
    <div>
      <h1 className='p-3 text-xl'>Utube</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {videos.length > 0 ? (
          videos.map((video) => (
            <div key={video.id.videoId} style={{ margin: '10px' }} className='w-28 h-28'>
              <Link
                href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={video.snippet.thumbnails.medium.url}
                  alt={video.snippet.title}
                  width={430}
                  height={180}
                  style={{ width: '100%' }}
                  className='p-1'
                />
                <h3 className='text-sm'>{video.snippet.title}</h3>
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