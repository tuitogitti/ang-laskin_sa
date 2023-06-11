/*
Calculator-komponentin luokkaosa 

Komponentin luokkaosassa on TypeScriptillä koodattu sovelluslogiikka
Luokasta välitetään dataa käyttöliittymään eli templaattiin ja toisinpäin.
Luokkaosaa kutsutaan myös varsinaiseksi komponentiksi, sillä se sisältää
kaikki komponentin osat määriteltynä dekoraattorissa.
*/

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// @Component -dekoraattorimetodin argumenttina
// olevassa oliossa määritellään komponentin osat
@Component({
  selector: 'app-calculator',
  standalone: true, // standalone-komponentti
  imports: [CommonModule, FormsModule], // komponentin riippuvuudet
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
/*
Luokassa on ominaisuuksia eli propertyjä ja
toiminnallisuuksia eli metodeja (luokan funktiota)
*/
export class CalculatorComponent implements OnInit {

  //ominaisuudet
  
  val1: number; // TS:ssä tietotyyppi merkitään kaksoispisteen perään
  val2: number; // val1 ja val2 -arvot saadaan templaatin lomakkeelta
  result: number; // result lasketaan tässä luokassa
  
    // konstruktori antaa luokasta syntyvän olion muuttujille alkuarvot
    constructor() {
      this.result = 0;
      this.val1 = 0;
      this.val2 = 0;
  
    }
    
    
  // metodit
    
    // ngOnInit() ei sisällä mitään eli ei ole käytössä
    ngOnInit(): void {
    }
    
    // Sovelluslogiikan tuottavat metodit
    public doPlus(){
  
      this.result = this.val1 + this.val2;
    }
  
    public doMinus(){
  
      this.result = this.val1 - this.val2;
    }
  
    public doMulti(){
  
      this.result = this.val1 * this.val2;
    }
  
  }
  
