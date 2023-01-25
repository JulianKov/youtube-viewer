export interface IVideo {
  kind: string
  etag: string
  id: Id
  snippet: ISnippet
}

export interface Id {
  kind: string
  videoId: string
}

export interface ISnippet {
  publishedAt: string
  channelId: string
  title: string
  description: string
  thumbnails: IThumbnails
  channelTitle: string
  liveBroadcastContent: string
  publishTime: string
}

export interface IThumbnails {
  default: IPreview
  medium: IPreview
  high: IPreview
}

export interface IPreview {
  url: string
  width: number
  height: number
}
