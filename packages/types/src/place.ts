export type PlaceCategory =
  | 'restaurant'
  | 'cafe'
  | 'bar'
  | 'park'
  | 'beach'
  | 'store'
  | 'school'
  | 'university'
  | 'gym'
  | 'club'
  | 'event_space'
  | 'landmark'
  | 'other';

export type PlaceStatus =
  | 'active'
  | 'temporarily_closed'
  | 'permanently_closed'
  | 'archived'
  | 'merged';

export type PlaceModerationStatus = 'visible' | 'hidden';

export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Place = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  category: PlaceCategory;

  location: Coordinates;
  address?: string;
  neighborhood?: string;
  city?: string;
  state?: string;
  country?: string;

  coverImageUrl?: string;
  avatarImageUrl?: string;
  gallery: string[];

  status: PlaceStatus;
  moderationStatus: PlaceModerationStatus;
  verified: boolean;

  createdAt: string;
  updatedAt: string;
};

export type MapPlace = Pick<
  Place,
  'id' | 'name' | 'category' | 'location' | 'avatarImageUrl'
> & {
  nCount: number;
};
