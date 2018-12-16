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

export const ButtonSharedStyles = html`
<style>
  button {
    background: none;
    border: none;
    fill: var(--app-primary-color);
    cursor: pointer;
    text-align: center;
    color: var(--app-primary-color);
  }
  button:hover svg {
    fill: var(--app-primary-color);
  }
</style>
`;
