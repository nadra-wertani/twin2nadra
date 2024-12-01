import { Component } from '@angular/core';

@Component({
  selector: 'app-form-user',
  templateUrl: './form-user.component.html',
  styleUrls: ['./form-user.component.css']
})
export class FormUserComponent {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    category: 'Customer',
    password: ''
  };

  saveUser() {
    console.log('Utilisateur ajouté :', this.user);
  }
}
