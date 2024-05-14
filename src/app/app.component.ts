import { Component, OnInit } from '@angular/core';
import {simpleProduct} from "./interfaces/produits";
import { create } from 'domain';
import { createProducts } from './data/produits.generator';
@Component({
  selector: 'app-root',  //selecteur obligatoire dans le fichier app.compenentHtml
  templateUrl: './app.component.html', //template a voir par le client
  styleUrls: ['./app.component.css'], //le fichier style CSS
})
export class AppComponent implements OnInit {
  produits!: simpleProduct[];

  //avant de demarrer fait ceci avec le Oninit
  ngOnInit(): void {
    this.produits = createProducts();
//le console.Log permet de visualiser les resultat dans le console
    console.log(this.produits);
  }
}
