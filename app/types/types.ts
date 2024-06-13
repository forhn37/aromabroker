// types.ts
export interface YoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface YoutubeThumbnails {
  default: YoutubeThumbnail;
  medium: YoutubeThumbnail;
  high: YoutubeThumbnail;
}

export interface YoutubeVideoSnippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: YoutubeThumbnails;
  channelTitle: string;
  liveBroadcastContent: string;
}

export interface YoutubeVideoId {
  kind: string;
  videoId: string;
}

export interface YoutubeVideo {
  id: YoutubeVideoId;
  snippet: YoutubeVideoSnippet;
}

export interface YoutubeAPIResponse {
  kind: string;
  etag: string;
  items: YoutubeVideo[];
}

export interface Bean {
  name: string;
  price: string;
  weight: string;
  strength: string;
  shippingcost: string;
  description: string;
}

export interface Data {
  beans: Bean[];
}

export interface Categories {
  category: string;
  description? : string;
}