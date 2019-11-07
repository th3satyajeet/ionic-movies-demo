import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'subcat', loadChildren: './subcat/subcat.module#SubcatPageModule' },
  { path: ':id', loadChildren: './subcategory/subcategory.module#SubcategoryPageModule' },
  { path: 'movie', loadChildren: './movie/movie.module#MoviePageModule' },
  { path: ':id/:title', loadChildren: './moviedetails/moviedetails.module#MoviedetailsPageModule' },
  { path: 'moreinfo', loadChildren: './moreinfo/moreinfo.module#MoreinfoPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
