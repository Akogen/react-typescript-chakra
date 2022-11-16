export interface IRoomPhotoPhoto {
  pk: string;
  file: string;
  description: string;
}

export interface IRoomList {
  pk: number;
  name: string;
  country: string;
  city: string;
  price: number;
  review_rating: number;
  is_host: boolean;
  photos: IRoomPhotoPhoto[];
}

export interface IRoomHost {
  name: string;
  avatar: string;
  username: string;
}

export interface IAmenity {
  name: string;
  description: string;
}

export interface IRoomDetail extends IRoomList {
  created_at: string;
  updated_at: string;
  bedrooms: number;
  bathrooms: number;
  description: string;
  address: string;
  pet_friendly: true;
  kind: string;
  is_host: boolean;
  is_liked: boolean;
  category: {
    name: string;
    kind: string;
  };
  host: IRoomHost;
  amenities: IAmenity[];
}

export interface IReview {
  payload: string;
  rating: number;
  user: IRoomHost;
}

export interface IUser {
  last_login: string;
  username: string;
  email: string;
  date_joined: string;
  avatar: string;
  name: string;
  is_host: boolean;
  gender: string;
  language: string;
  currency: string;
}
