import { Component } from '@angular/core';
import { ShortList } from '../models/short-list'; // Importation du modèle ShortList
import { CardComponentComponent } from '../card-component/card-component.component'; // Importation du composant Card

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  // Tableau des catégories à afficher
  categories = [
    { id: 1, title: 'Catégorie 1', image: '/assets/images/produits_nettoyages.jpg', available: true },
    { id: 2, title: 'Catégorie 2', image: 'assets/images/categorie_electromenager.jpg', available: false },
    { id: 3, title: 'Catégorie 3', image: 'assets/images/categorie_smartPhone.jpg', available: true }
  ];

  // Tableau shortList, initialement vide
  shortList: ShortList[] = [];

  // Méthode pour ajouter une catégorie à la shortList
  addToShortList(category: ShortList): void {
    let exist = this.shortList.some(
      c => c.idElement === category.idElement && c.idUser === category.idUser
    );

    if (exist) {
      alert('Category already a favorite');
    } else {
      category.typeElement = 'category'; // Définir le type comme 'category'
      this.shortList.push(category); // Ajouter la catégorie à la shortList
      console.log(this.shortList); // Afficher la shortList dans la console
    }
  }
  
}
