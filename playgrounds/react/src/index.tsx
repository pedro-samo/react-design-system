import React from 'react';
import ReactDOM from 'react-dom';

import { Color, Image } from '@ds.e/react';

import '@ds.e/scss/lib/Utilities.css';

ReactDOM.render(
  <>
    <Image alt="Image Test" src="https://source.unsplash.com/random/?Cryptocurrency/" />
    <Color hexCode="#000"></Color>
  </>,
  document.querySelector('#root')
);
