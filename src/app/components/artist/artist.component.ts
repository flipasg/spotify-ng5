import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from "../../services/spotify.service";
import "rxjs/add/operator/map";
import "rxjs/add/observable/fromPromise";
import "rxjs/add/observable/of";
import "rxjs/add/observable/timer";
import "rxjs/add/observable/race";
import "rxjs/add/operator/bufferTime";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/do";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/first";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/skip";
import "rxjs/add/operator/take";

@Component({
  selector: "app-artist",
  templateUrl: "./artist.component.html",
  styles: []
})
export class ArtistComponent implements OnInit {
  artist: any;
  constructor(
    private _activatedRouter: ActivatedRoute,
    private _spotifyService: SpotifyService
  ) {}

  ngOnInit() {
    this._activatedRouter.params
      .map((params: any) => params.id)
      .subscribe((artistId: any) => {
        this._spotifyService
          .getArtistById(artistId)
          .subscribe((artistInformation: any) => {
            this.artist = artistInformation;
            this._spotifyService
              .getArtistTopTracks(artistId)
              .map(resp => resp.tracks)
              .subscribe((artistTopTracks: any) => {
                this.artist["topTracks"] = artistTopTracks;
                console.log(this.artist);
              });
          });
      });
  }
}
