import { render } from '@testing-library/react';

import GoogleFilled from './google-filled';

describe('GoogleFilled', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GoogleFilled />);
    expect(baseElement).toBeTruthy();
  });
});
