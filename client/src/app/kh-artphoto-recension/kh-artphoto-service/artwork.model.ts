export interface ArtphotoArtist {
  artphotoartist_id: number;
  artphotoartist_name: string;
}

export interface ArtWork {
  art_id: number;
  art_link: string;
  art_desc: string;
  artphotoartist: ArtphotoArtist;
  exhibition_id: number;
}
