
// pages/api/channelVideos.js
export async function GET() {
  const channelId = 'UCKgiZa1ZEwvtRqKeT3u9d4A'; // 여기에 유튜브 채널 ID를 입력하세요
  const apiKey = 'AIzaSyAV-9GHs1rSCmpPO2dsRPZqdBAtSR8Mvaw'; // 여기에 API 키를 입력하세요

  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=8&order=date&key=${apiKey}`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    
    return Response.json( data )
  } catch (error) {
    return Response.json({ error: 'Failed to fetch data' });
  }
}
