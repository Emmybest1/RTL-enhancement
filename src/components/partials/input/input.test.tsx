import React from 'react';
import {render} from '@testing-library/react';
import Input from './input.component';

describe('Test for input partials Component', () => {
  test('should render succesfully with appropriate props', () => {
    render(<Input id="inputxx01" type="text" />);
  });
});
