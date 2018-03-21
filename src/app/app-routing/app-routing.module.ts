import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { SearchComponent } from '../components/search/search.component';
import { ArtistComponent } from '../components/artist/artist.component';
export const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'artist/:id', component: ArtistComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
