import React from 'react';
import {render, screen} from '@testing-library/react';

import {Car} from './Car';

describe('Car', () => {
  it('renders correctly', () => {
    const props = {
      type: 'business',
      name: 'Бизнес',
      price: 300
    };
    const {container} = render(<Car {...props} />);
    expect(container.innerHTML).toMatch(props.name);
    expect(container.innerHTML).toMatch(`${props.price}`);
    expect(screen.getByAltText(props.type).src).not.toBeFalsy();
  });
});
