/*
App-komponentin luokkaosa. Komponentti koostuu kolmesta osasta:
Luokkaosa, templaatti (HTML-sivupohja) ja CSS-osa.
App-komponentti on äitikomponentti jonka sisälle muut komponentit
tulevat. Sen tehtävänä on toimia "säiliönä".

Tämä on sama yksinkertainen laskin-esimerkki, kuin ang-laskin, 
mutta standalone-sovelluksena.

Standalone-sovelluksessa ei ole päämoduulia, vaan app.component eli 
pääkomponentti on sovelluksen hierarkian ylin rakenneosa. Tässä 
sovelluksessa app.component sisältää calculator-komponentin. 
*/

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';

@Component({
  selector: 'app-root', // komponentin html-tagin nimi
  standalone: true, // standalone-komponentti
  imports: [CommonModule, CalculatorComponent], // komponentin tarvitsemat riippuvuudet
  templateUrl: './app.component.html', // templaattiosa
  styleUrls: ['./app.component.css'] // tyyliosa
})
// Luokka johon sovelluslogiikkakoodi tehdään
export class AppComponent {
  title = 'Standalone Laskin';
}
