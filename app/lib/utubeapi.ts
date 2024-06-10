// pages/api/channelVideos.js
export default async function handler(req, res) {
  const channelId = 'UCKgiZa1ZEwvtRqKeT3u9d4A'; // 여기에 유튜브 채널 ID를 입력하세요
  const apiKey = '206459967201-gl7ej7rjbl30gkoui2bmuikdv0ui4o1q.apps.googleusercontent.com'; // 여기에 API 키를 입력하세요

  try {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=10&order=date&key=${apiKey}`);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    res.status(200).json(data);
    console.log(data)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
