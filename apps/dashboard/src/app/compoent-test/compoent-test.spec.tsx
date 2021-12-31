import { render } from '@testing-library/react';

import CompoentTest from './compoent-test';

describe('CompoentTest', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CompoentTest />);
    expect(baseElement).toBeTruthy();
  });
});
