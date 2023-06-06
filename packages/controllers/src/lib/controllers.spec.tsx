import { render } from '@testing-library/react';

import Controllers from './controllers';

describe('Controllers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Controllers />);
    expect(baseElement).toBeTruthy();
  });
});
