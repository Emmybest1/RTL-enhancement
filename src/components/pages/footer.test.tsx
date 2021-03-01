import React from 'react';
import {render} from '@testing-library/react';
import Footer from './footer.component';

describe('<Footer/>', () => {
  test('should render footer component', () => {
    const {container} = render(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
