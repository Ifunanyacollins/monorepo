import { render } from '@testing-library/react';

import FacebookFilled from './facebook-filled';

describe('FacebookFilled', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FacebookFilled />);
    expect(baseElement).toBeTruthy();
  });
});
