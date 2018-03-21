import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class SpotifyService {
  SPOTIFY_BASE_URL = "https://api.spotify.com/v1/";
  SPOTIFY_API_KEY = "BQD2dOFgg5deIWkCU2jltgnvtSSrUVLnPR-7humR9uICr6wEzc_zGNKUMW6eWcC_4_FG6QidpPkjBYz-5Ow";
  constructor(private _http: HttpClient) {}

  public getArtists(searchString: string): Observable<any> {
    const url =
      this.SPOTIFY_BASE_URL +
      `search?query=${searchString}&type=artist&offset=0&limit=20`;
    return this._http.get(url, { headers: this._getRequestHeaders() });
  }

  public getArtistById(artistId: string): Observable<any> {
    const url = this.SPOTIFY_BASE_URL + `artists/${artistId}`;
    return this._http.get(url, { headers: this._getRequestHeaders() });
  }

  public getArtistTopTracks(artistId: string): Observable<any> {
    const url = this.SPOTIFY_BASE_URL + `artists/${artistId}/top-tracks`;
    return this._http.get(url, {
      headers: this._getRequestHeaders(),
      params: {
        country: "ES"
      }
    });
  }

  private _getRequestHeaders(): HttpHeaders {
    return new HttpHeaders({
      authorization: `Bearer ${this.SPOTIFY_API_KEY}`
    });
  }
}
