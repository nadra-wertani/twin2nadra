import { Component } from '@angular/core';
import { Categorie } from '../models/categorie';

@Component({
  selector: 'app-list-categories',
  templateUrl: './list-categories.component.html',
  styleUrls: ['./list-categories.component.css']
})
export class ListCategoriesComponent {
  categories: Categorie[] = [
    { id: 1, title: "Grand électroménager", image: "assets/images/categorie_electromenager.jpg", description: "nn", available: false },
    { id: 2, title: "Petit électroménager", image: "assets/images/categorie_petit_electromenager.jpg", description: "rfh", available: true },
    { id: 3, title: "Produits informatiques", image: "assets/images/categorie_produits_informatiques.jpg", description: "eff", available: true },
    { id: 4, title: "Smart Phones", image: "assets/images/categorie_smartPhone.jpg", description: "rrr", available: true },
    { id: 5, title: "TV, images et son", image: "assets/images/categorie_tv_image_son.jpg", description: "rrr", available: true },
    { id: 6, title: "Produits voiture", image: "assets/images/produits_nettoyages.jpg", description: "rrr", available: false }
  ];

  titre: string = "";

  constructor() {}

  desc(description: string) {
    alert(description);
  }

  filteredCategories(): Categorie[] {
    return this.categories.filter(categorie => 
      this.titre === '' || categorie.title.toLowerCase().includes(this.titre.toLowerCase())
    );
  }
}
