import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Home from './home.component';

const renderHome = () => {
  render(<Home />);
  const input = screen.getByPlaceholderText(/Search user/i);
  return input;
};

describe('<Home/>', () => {
  test('should render Home Component', () => {
    renderHome();
  });

  test('should render input content in paragraphy', () => {
    const input = renderHome();
    userEvent.type(input, 'Emma');
    expect(screen.queryByTestId(/userName/i)).toHaveTextContent('Emma');
  });
});
