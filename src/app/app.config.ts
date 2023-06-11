/*
App.config.ts on sovelluksen konfiguraatiotiedosto.
Standalone-sovelluksessa on järkevää laittaa sovelluksen konfiguraatio
tiedostoon, joka importataan main.ts:ään. Näin kaikki komponentit 
saavat konfiguraation käyttöönsä. Tässä sovelluksessa konfiguraatio 
ei tosin sisällä mitään.
*/

import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: []
};
