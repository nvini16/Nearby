export type MediaType = 'photo' | 'video';

export type Media = {
  id: string;
  type: MediaType;
  url: string;
  width?: number;
  height?: number;
  durationSeconds?: number;
};

export type PostContext = 'place' | 'activity' | 'general';

export type PostVisibility = 'public' | 'followers' | 'private';

export type PostLocation = {
  latitude: number;
  longitude: number;
  accuracyMeters?: number;
  capturedAt: string;
};

export type Post = {
  id: string;
  authorId: string;
  media: Media[];
  caption?: string;
  musicId?: string;

  context: PostContext;
  location?: PostLocation;

  createdAt: string;
  visibility: PostVisibility;
};

export type PostPlaceRelationType = 'host' | 'mentioned';

export type PostPlaceRelation = {
  id: string;
  postId: string;
  placeId: string;
  type: PostPlaceRelationType;
  createdBy: string;
  createdAt: string;
};
