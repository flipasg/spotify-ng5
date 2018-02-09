import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getArtists() {
    const url = 'https://api.spotify.com/v1/search?query=metallica&type=artist&offset=0&limit=20';

    this._http.get(url).subscribe((response) => {
      console.log(response);
    });

  }

}
