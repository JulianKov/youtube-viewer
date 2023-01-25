export interface ICommentsResponse {
  kind: string
  etag: string
  nextPageToken: string
  pageInfo: IPageInfo
  items: IComment[]
}

export interface IPageInfo {
  totalResults: number
  resultsPerPage: number
}

export interface IComment {
  kind: string
  etag: string
  id: string
  snippet: ICommentSnippetData
}

export interface ICommentSnippetData {
  videoId: string
  topLevelComment: ITopLevelComment
  canReply: boolean
  totalReplyCount: number
  isPublic: boolean
}

export interface ITopLevelComment {
  kind: string
  etag: string
  id: string
  snippet: ICommentSnippet
}

export interface ICommentSnippet {
  videoId: string
  textDisplay: string
  textOriginal: string
  authorDisplayName: string
  authorProfileImageUrl: string
  authorChannelUrl: string
  canRate: boolean
  viewerRating: string
  likeCount: number
  publishedAt: string
  updatedAt: string
}
