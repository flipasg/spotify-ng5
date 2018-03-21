import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  searchString = '';
  artists: any[] = [];
  constructor(private _spotifyService: SpotifyService) {

  }

  ngOnInit() {
  }

  findArtist() {
    if (this.searchString.length > 0) {
      this._spotifyService.getArtists(this.searchString).map((resp: any) => {
        return resp.artists.items;
      }).subscribe(resp => {
        this.artists = resp;
      });
    }
  }

}
