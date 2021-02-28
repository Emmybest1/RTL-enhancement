import React from 'react';
import {render, screen} from '@testing-library/react';
import Home from './home.component';

const renderHome = () => {
  render(<Home />);
  const input = screen.getByLabelText(/Search/i);
  return input;
};

describe('<Home/>', () => {
  test('should render Home Component', () => {
    renderHome();
  });


  test()
});
