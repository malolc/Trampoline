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

class MyView2 extends PageViewElement {

  render() {
    return html`
      ${SharedStyles}
      <section>
        <div id="talkjs-container" style="width: 90%; margin: 30px; height: 500px"><i>Loading chat...</i></div>
        ${this.init()}
      </section>
    `;
  }

  init() {
    Talk.ready.then(function() {
      var me = new Talk.User({
        id: "123456",
        name: "Alice",
        email: "alice@example.com",
        photoUrl: "https://demo.talkjs.com/img/alice.jpg",
        welcomeMessage: "Hey there! How are you? :-)"
      });

      window.talkSession = new Talk.Session({
        appId: "tXMeVdQ7",
        me: me
      });

      var other = new Talk.User({
        id: "654321",
        name: "Sebastian",
        email: "Sebastian@example.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey, how can I help?"
      });

      var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other))
      conversation.setParticipant(me);
      conversation.setParticipant(other);

      var inbox = talkSession.createInbox({selected: conversation});
      inbox.mount(document.getElementById("talkjs-container"));
    });
  }

}

window.customElements.define('my-view2', MyView2);
