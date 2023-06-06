import { render } from '@testing-library/react';

import Mastech from './mastech';

describe('Mastech', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mastech />);
    expect(baseElement).toBeTruthy();
  });
});
