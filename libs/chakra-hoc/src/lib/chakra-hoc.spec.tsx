import { render } from '@testing-library/react';

import ChakraHoc from './chakra-hoc';

describe('ChakraHoc', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChakraHoc />);
    expect(baseElement).toBeTruthy();
  });
});
