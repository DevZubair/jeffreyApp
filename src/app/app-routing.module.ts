import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pic-dictionary', loadChildren: './pic-dictionary/pic-dictionary.module#PicDictionaryPageModule' },
  { path: 'category-list/:categoryID', loadChildren: './category-list/category-list.module#CategoryListPageModule' },
  { path: 'product-detail', loadChildren: './product-detail/product-detail.module#ProductDetailPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
