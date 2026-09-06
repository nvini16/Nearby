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

export type PlaceStatus = 'active' | 'closed';


export type Coordinates = {
  latitude: number;
  longitude: number;
};

export type Place = {
  id: string;
  name: string;
  description?: string;
  category: PlaceCategory;

  location: Coordinates;

  coverImageUrl?: string;
  avatarImageUrl?: string;
  status: PlaceStatus;

};


