import React from 'react';
import {render, screen} from '@testing-library/react';
import Input from './input.component';

const renderInput = () => {
  const {rerender} = render(<Input id="2" labelText="FirstName" className="inlove" />);
  return rerender;
};

describe('<Input/>', () => {
  test('should render component with right form element', () => {
    const rerender = renderInput();
    expect(screen.getByLabelText(/firstname/i)).toHaveAttribute('type', 'text');
    
    rerender(<Input type="textarea" labelText="FirstName" className="inlove" id="2" />);
    expect(screen.getByLabelText(/firstname/i)).not.toHaveAttribute('type', 'text');
  });
});
