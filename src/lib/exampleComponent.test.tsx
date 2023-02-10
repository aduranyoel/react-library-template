import React from 'react';
import { render } from '@testing-library/react';
import { ExampleComponent } from './exampleComponent';

describe('ExampleComponent', () => {
  it('should render', () => {
    const { getByText } = render(<ExampleComponent/>);
    expect(getByText(/library works!/i)).toBeInTheDocument();
  });
});
