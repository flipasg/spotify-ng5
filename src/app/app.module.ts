import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { SearchComponent } from "./components/search/search.component";
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { SpotifyService } from "./services/spotify.service";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { NophotoPipe } from "./pipes/nophoto.pipe";
import { ArtistComponent } from "./components/artist/artist.component";
import { SafedomPipe } from "./pipes/safedom.pipe";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NophotoPipe,
    ArtistComponent,
    SafedomPipe
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
