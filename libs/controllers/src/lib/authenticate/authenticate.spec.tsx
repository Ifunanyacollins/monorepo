import { render } from '@testing-library/react';

import Authenticate from './authenticate';

describe('Authenticate', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Authenticate />);
    expect(baseElement).toBeTruthy();
  });
});
