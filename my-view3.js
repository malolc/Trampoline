/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
import '@vaadin/vaadin-upload/vaadin-upload.js';
import { html } from '@polymer/lit-element';
import { PageViewElement } from './page-view-element.js';




// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';

class MyView3 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
<div id="Global">
    <div id="gaucheProfil">
        <div id ="gaucheProfilInfo">
          <section>

            <h2>Informations </h2>
            <form action="/action_page.php">
            Je suis :<br>
            <form>
              <input type="radio" name="type" value="Particulier" checked> Un particulier<br>
              <input type="radio" name="type" value="Entreprise"> Une entreprise<br>
            </form>
            <br>
            <form action="/action_page.php">
              Prénom :<br>
              <input type="text" name="prenom" value=""><br><br>
              Date de naissance :<br>
              <input type="date" name="datenaissance" value=""><br><br>
              Adresse email :<br>
              <input type="email" name="email" value=""><br><br>
            </form>

            <h2>Documents</h2>

             CV :<br>
             <dom-bind>
               <template is="cv">
                 <vaadin-upload id="fileEventsDemo" files="{{files}}">
                 <button slot="add-button">
                   Ajouter
                 </button>
                   <div slot="file-list">
                     <ul>
                       <template is="dom-repeat" items="{{files}}" as="file">
                         <li>
                           <strong>[[file.name]]</strong>
                           [[file.status]]
                         </li>
                       </template>
                     </ul>
                   </div>
                 </vaadin-upload>
               </template>
             </dom-bind>
            <br>
            
             Lettres de motivation :<br/>
             <dom-bind>
               <template is="ldm">
                 <vaadin-upload id="fileEventsDemo" files="{{files}}">
                 <button slot="add-button">
                   Ajouter
                 </button>
                   <div slot="file-list">
                     <ul>
                       <template is="dom-repeat" items="{{files}}" as="file">
                         <li>
                           <strong>[[file.name]]</strong>
                           [[file.status]]
                         </li>
                       </template>
                     </ul>
                   </div>
                 </vaadin-upload>
               </template>
             </dom-bind>
          </section>
        </div>

        <div id ="droiteProfilInfo">
        <br><br><br><br><br><br>
        Sexe :<br>
        <form>
        <input type="radio" name="genre" value="Homme" checked> Homme<br>
        <input type="radio" name="genre" value="Femme"> Femme<br>
        </form>
        <br>
        <form action="/action_page.php">
        NOM :<br>
        <input type="text" name="nom" value=""><br><br>
        Téléphone :<br>
        <input type="text" name="telephone" value=""><br>
        </form>
        </div>
        </div>

    <div id="droiteProfil">
      <section>
        <h2>Centres d'intérêts</h2>
        <form>
          <input type="checkbox" name="sport" value="Sport"> Sport
          <input type="checkbox" name="musique" value="Musique"> Musique
          <input type="checkbox" name="voyages" value="Voyages"> Voyages
          <input type="checkbox" name="nature" value="Nature"> Nature<br>
          <input type="checkbox" name="animaux" value="Animaux"> Animaux
          <input type="checkbox" name="techno" value="Nouvelles technologies"> Nouvelles technologies<br>
          <input type="checkbox" name="cinema" value="Cinéma"> Cinéma
          <input type="checkbox" name="mode" value="Mode"> Mode
          <input type="checkbox" name="chat" value="Les chats triso d'insta"> Les chats triso d'insta
        </form>
      </section>

      <section>
        <h2>Compétences</h2>
        <form>
          <input type="checkbox" name="developpement" value="Développement"> Développement
          <input type="checkbox" name="elec" value="Électronique"> Électronique
          <input type="checkbox" name="meca" value="Mécatronique"> Mécatronique<br>
          <input type="checkbox" name="management" value="Management"> Management
          <input type="checkbox" name="gestion" value="Gestion d'équipe"> Gestion d'équipe
          <input type="checkbox" name="lean" value="Lean"> Lean<br>
          <input type="checkbox" name="supply" value="Supply chain"> Supply chain
          <input type="checkbox" name="pilotage" value="Pilotage"> Pilotage
          <input type="checkbox" name="back" value="Back"> Back
          <input type="checkbox" name="front" value="Front"> Front<br>
          <input type="checkbox" name="ia" value="Intelligence Artificielle"> Intelligence Artificielle
        </form>
      </section>

    </div>
</div>
`;
}
}


window.customElements.define('my-view3', MyView3);
