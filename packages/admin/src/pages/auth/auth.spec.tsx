import { render } from '@testing-library/react';

import Auth from './login';

describe('Auth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Auth />);
    expect(baseElement).toBeTruthy();
  });
});
