export interface VOImage {
  id: string;
  albumID: string;
  personID: string;
  thumb: string;
  url: string
}

export interface VOAlbum {
  id: string;
  personID: number;
  name: string;
}

export interface VOPerson {
  id: string;
  name: string;
}
