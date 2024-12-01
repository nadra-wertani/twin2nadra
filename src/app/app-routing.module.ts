import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },  // Page d'accueil par défaut
  { path: 'home', component: HomeComponent },
  { path: 'user-management', loadChildren: () => import('./user/user.module').then(m => m.UserModule) },  // Chargement du module UserModule
  { path: 'product-management', loadChildren: () => import('./product/product.module').then(m => m.Product) },  // Chargement du module ProductModule
  { path: 'provider-management', loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule) },  // Chargement du module ProviderModule
  { path: '**', component: NotFoundPageComponent }  // Page NotFound pour les chemins invalides
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
