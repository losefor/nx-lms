import { render } from '@testing-library/react';

import FormikChakraReact from './formik-chakra-react';

describe('FormikChakraReact', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormikChakraReact />);
    expect(baseElement).toBeTruthy();
  });
});
