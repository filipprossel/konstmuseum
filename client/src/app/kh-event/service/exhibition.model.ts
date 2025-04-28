export interface Photo {
  art_link: string;
}

export interface Artist {
  artist_name: string;
}

export interface Exhibition {
  exhibition_id: number;
  exhibition_name: string;
  exhibition_desc: string;
  photos: Photo[];
  artist: Artist;
  place: string;
  exhibition_date_end: Date;
  exhibition_date_start: Date;
}
