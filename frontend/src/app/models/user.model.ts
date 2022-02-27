export class User {
  constructor(
    public id: string,
    public username: string
  ) {}
}

export interface UserData {
  [key: string]: any;
  username: string;
}

export interface ApiArtistData {
  _id: string,
  username: string,
}
