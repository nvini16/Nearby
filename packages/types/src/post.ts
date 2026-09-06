export type MediaType = 'photo' | 'video';

export type Media = {
  id: string;
  type: MediaType;
  url: string;
};


export type PostVisibility = 'public' | 'private';

export type Post = {
  id: string;
  authorId: string;
  media: Media[];
  caption?: string;
  createdAt: string;
  visibility: PostVisibility;
};


export type PostPlaceRelation = {
  postId: string;
  placeId: string;
};
