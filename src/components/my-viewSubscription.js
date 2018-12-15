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

// These are the elements needed by this element.
import './shop-products.js';
import './shop-cart.js';

// These are the shared styles needed by this element.
import { SharedStyles } from './shared-styles.js';
import { ButtonSharedStyles } from './button-shared-styles.js';

class MyViewSubscription extends PageViewElement {
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

      <section name="toto">
        <h1>Bienvenue</h1>
        <h3>Trampoline, un tremplin pour votre carrière</h3><br>
        <form name="connection">
          <p>
            <label for="Mail">E-mail :</label><br>
            <input type="text" name="mail" id="mail" placeholder="jacob.alexandre@trampoline.com" size="30" maxlength="45" />
          </p>
          <p>
            <label for="Motdepasse">Mot de passe :</label><br>
            <input type="password" name="motdepasse" id="motdepasse" placeholder="Password" size="30" minlength="8"/>
          </p>
        </form><br><br>
        <button @click="${this.checkingConnection}">Connexion</button>
      </section>
    `;
  }

  checkingConnection() {
    console.log(this.toto);
    var mail = this.connection.mail.value;
    if (!mail.includes("@")){
      alert("Votre adresse e-mail est invalide !");
      return false;
    }
  }

}

window.customElements.define('my-viewsubscription', MyViewSubscription);
