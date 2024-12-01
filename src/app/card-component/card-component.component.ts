import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ShortList } from '../models/short-list'; // Importation du modèle ShortList

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent {
  @Input() id!: number;
  @Input() title: string = "";
  @Input() image: string = "";
  @Input() description: string = "";
  @Input() available: boolean = false;
  @Input() btnText: string = "";
  
  @Output() shortedList = new EventEmitter<ShortList>();

  getDescription(description: string): void {
    alert(description);
  }

  // Méthode pour émettre l'événement
  addToShortList(): void {
    // Création d'un objet ShortList avec les informations nécessaires
    const category: ShortList = {
      id: this.id,
      idUser: 5, // Exemple d'ID utilisateur, vous pouvez le changer
      idElement: this.id,
      typeElement: 'category'
    };

    // Émission de l'événement vers le parent
    this.shortedList.emit(category);
  }
}
