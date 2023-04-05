import React from 'react';
import ReactDOM from 'react-dom';

import { Color, Image, Text, Margin, Select } from '@ds.e/react';

import '@ds.e/scss/lib/Utilities.css';
import '@ds.e/scss/lib/Text.css';
import '@ds.e/scss/lib/Margin.css';
import '@ds.e/scss/lib/Select.css';
import '@ds.e/scss/lib/global.css';

const options = [
  {
    label: 'Strict Black',
    value: 'strict-black',
  },
  {
    label: 'Heavenly Green',
    value: 'heavenly-green',
  },
  {
    label: 'Sweet Pink',
    value: 'pink',
  },
];

ReactDOM.render(
  <>
    <Image
      alt="Image Test"
      width="800px"
      src="https://source.unsplash.com/random/?Cryptocurrency/"
    />
    <Margin left space="none">
      <Text size="xs">This is some text</Text>
    </Margin>
    <Select options={options} />
    <Color hexCode="#000"></Color>
  </>,
  document.querySelector('#root')
);
