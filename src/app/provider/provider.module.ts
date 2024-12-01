import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderComponent } from '../provider/provider/provider.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProviderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: ProviderComponent } // Définir la route pour ProviderComponent
    ])
  ]
})
export class ProviderModule {}
