/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView3 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <div id="Global">
         <div id="gauche">
         <section>
           <h2>Informations personnelles ></h2>
           <form action="/action_page.php">

           Sexe :<br>
           <form>
             <input type="radio" name="genre" value="Homme" checked> Homme<br>
             <input type="radio" name="genre" value="Femme"> Femme<br>
             <input type="radio" name="genre" value="Malo"> Malo<br>
             <input type="radio" name="genre" value="Autre"> Autre
           </form>

           <br>
           Je suis :<br>
           <form>
             <input type="radio" name="type" value="Particulier" checked> Un particulier<br>
             <input type="radio" name="type" value="Entreprise"> Une entreprise<br>
             <input type="radio" name="type" value="Malo"> Malo<br>
           </form>

           <br>

           <form action="/action_page.php">
             Prénom :<br>
             <input type="text" name="prenom" placeholder="Alexandre" value=""><br>
             NOM :<br>
             <input type="text" name="nom" placeholder="JACOB" value=""><br>
             Date de naissance :<br>
             <input type="date" name="datenaissance" value=""><br>
             Téléphone :<br>
             <input type="text" name="telephone" value=""><br>
             Adresse email :<br>
             <input type="email" name="email" value=""><br><br>

             <input type="reset">
           </form>
         </section>
         </div>

         <div id="droite">
         <section>
           <h2>Centres d'intérêts ></h2>
           <form>
             <input type="checkbox" name="vehicle1" value="Bike"> I have a bike<br>
             <input type="checkbox" name="vehicle2" value="Car"> I have a car
           </form>
         </section>
         </div>
      </div>

      <section>
        <h2>Documents ></h2>
      </section>
    `;
  }
}


window.customElements.define('my-view3', MyView3);
