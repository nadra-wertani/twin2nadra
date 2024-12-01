import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UserComponent], // Déclarez UserComponent uniquement ici
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: UserComponent } // Route pour UserComponent
    ])
  ]
})
export class UserModule { 
  firstName!: string;
  lastName!: string;
  email!: string;
  category: string = 'Customer'; // Valeur par défaut
  password!: string;
}
