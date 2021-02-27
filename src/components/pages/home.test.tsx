import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from './home.component';

describe('Test for Home Page Component', () => {
  test('should render Home Component successfully', () => {
    render(<Home />);
  });
});
