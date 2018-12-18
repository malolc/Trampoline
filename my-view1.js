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

class MyView1 extends PageViewElement {
  render() {
    return html`
      ${SharedStyles}
      <style>
        details {
          border: 1px solid #aaa;
          border-radius: 4px;
          width: 400px;
          padding: .5em .5em 0;
        }
      </style>

      <section>
        <h2>Offres populaires ></h2>
        <div id="GlobalHaut">
           <div id="gaucheOffresHaut">
              <details>
                <summary>Chef de projet - Trampoline</summary>
                <p>Trampoline cherche un nouveau chef de projet</p>
                <p>Chef de projet</p>
              </details>
            </div>
            <div id="gaucheOffresHaut">
              <details>
                <summary>Chef de projet - Trampoline</summary>
                <p>Trampoline cherche un nouveau chef de projet</p>
                <p>Chef de projet</p>
              </details>
           </div>
           <div></div>
           <div id="droiteOffresHaut">
           <details>
             <summary>Stagiaire - ENIB</summary>
             <p>L'ENIB cherche un nouveau stagiaire</p>
             <p>Stagiaire</p>
           </details>
           </div>
           <div id="droiteOffresHaut">
           <details>
             <summary>Chef de projet - Trampoline</summary>
             <p>Trampoline cherche un nouveau chef de projet</p>
             <p>Chef de projet</p>
           </details>
           </div>
        </div>

      </section>
      <section>
        <h2>Toutes les offres ></h2>
        <div id="GlobalBas">
           <div id="gaucheOffresBas">
           <details>
             <summary>Chef de projet - Trampoline</summary>
             <p id="gaucheOffresBas">Trampoline cherche un nouveau chef de projet</p>
             <p id="gaucheOffresBas">Chef de projet</p>
           </details>
           <details>
             <summary>Chef de projet - Trampoline</summary>
             <p id="gaucheOffresBas">Trampoline cherche un nouveau chef de projet</p>
             <p id="gaucheOffresBas">Chef de projet</p>
           </details>
           </div>
           <div id="droiteOffresBas">
           <details>
             <summary>Stagiaire - ENIB</summary>
             <p id="droiteOffresBas">L'ENIB cherche un nouveau stagiaire</p>
             <p id="droiteOffresBas">Stagiaire</p>
           </details>
           <details>
             <summary>Chef de projet - Trampoline</summary>
             <p id="droiteOffresBas">Trampoline cherche un nouveau chef de projet</p>
             <p id="droiteOffresBas">Chef de projet</p>
           </details>
           </div>
        </div>




      </section>
    `;
  }

  async getOffre() {
    var requestUrl = "../../data/Offres.json";
    var request = new XMLHttpRequest();
    request.open('GET', requestUrl);
    request.responseType = 'json';
    request.send();
    // request.onload = function() {
    //   var offres=request.response;
    //   // populateHeader(offres);
    //   console.log(offres);
    //   var offresToShow = showOffres(offres);
    //   console.log(offresToShow);
    //   return offresToShow;
    // }
    var offres;
    request.onreadystatechange = await function (evt) {
      if (request.readyState !== 4) {
        return;
      }
      console.log(request);
      console.log("request response: ",request.response);
      offres = showOffres(request.response);
      console.log("offres stateChange : ",offres);
      return offres;
    };
    //offres = await resolveAfter2Seconds(request.response);
    return new Promise(resolve => {
      setTimeout(() => {
        console.log("response : ",request.response);
        console.log("offres : ",offres);
        offres;
      }, 2000);
    });

    function showOffres(jsonObj) {
      var offres = jsonObj;

      for (var i = 0; i < offres.length; i++) {
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myList = document.createElement('ul');

        myH2.textContent = offres[i].Titre;
        myPara1.textContent = 'Description: ' + offres[i].Description;
        myPara2.textContent = 'Mots-Clés: ' + offres[i].MotsCles;

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myList);

        console.log(myArticle);

        return myArticle;
      }
    }
  }




}

window.customElements.define('my-view1', MyView1);
