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

// export interface Bean {
//   name: string;
//   price: string;
//   weight: string;
//   strength: string;
//   shippingcost: string;
//   description: string; 
// }

export interface Categories {
  category: string;
  description?: string;
  datatables: Bean[] | Dripbag[];
}
// 원두 관련 데이터타입 
export interface BeanDatas {
  datatables: Bean[];
}
export interface DripbagDatas {
  datatables: Dripbag[];
}
export interface Bean {
  id: number;
  created_at: string;
  name: string;
  description: string;
  price: number;
  weight: string;
  shippingcost: number;
  strength: string;
  category: string;
  imageurl: string;
  englishname: string;
}

export interface Dripbag {
  id: number;
  created_at: string;
  productname: string;
  description: string;
  price: number;
  weight: string;
  shippingcost: number;
  category: string;
  issinggle: boolean;
  imageurl: string;
  englishname: string;
}

export interface Posts {
  id : number;
  created_at: string;
  title : string;
  content : string;
  author : string;
  views : number;

}

