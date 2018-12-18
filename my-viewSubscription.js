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
import { ButtonSharedStyles } from './button-shared-styles.js';

class MyViewInscription extends PageViewElement {

  render() {
    return html`
      ${SharedStyles}
      ${ButtonSharedStyles}
      <style>
        section {
          text-align : center;
        }
        button {
          border: 2px solid var(--app-primary-color);
          border-radius: 3px;
          padding: 8px 16px;
          margin-left:350px;
        }
        button:hover {
          border-color: var(--app-primary-color);
          color: var(--app-primary-color);
        }
        h1{
          font-size: 100px;
        }
        h3{
          font-size: 30px;
        }
      </style>

      <section>
        <h1>Bienvenue</h1>
        <h3>Trampoline, un tremplin pour votre carrière</h3><br>
        <div id="inscritpion" class="tabcontent">
        <form name="inscritpion" display="${this.displayConnect}">
          <p>
            <label for="Mail">E-mail :</label><br>
            <input type="text" name="mail" id="mail" placeholder="jacob.alexandre@trampoline.com" size="30" maxlength="45"/>
          </p>
          <p>
            <label for="Motdepasse">Mot de passe :</label><br>
            <input type="password" name="motdepasse" id="motdepasse" placeholder="Password" size="30" minlength="8"/>
          </p>
        </form><br><br>
        <button @click="${this.checkingConnection}" href="/profil">S'inscrire</button>
        </div>
      </section>
    `;
  }

  static get properties() {
    return {
      displayConnect: { type: String },
      displayInscript: { type: String }
    }
  }

  openForm(evt, formName) {
    console.log(evt, formName);
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(formName).style.display = "block";
  evt.currentTarget.className += " active";
}

  checkingConnection() {
    // console.log(this.__name);
    // var mail = this.inscritpion.mail.value;
    // if (!mail.includes("@")){
    //   alert("Votre adresse e-mail est invalide !");
    //   return false;
    // }
    console.log(this.displayConnect);
    console.log(this.displayInscript);
    //location.href="/profil";
  }

}

window.customElements.define('my-viewinscription', MyViewInscription);
