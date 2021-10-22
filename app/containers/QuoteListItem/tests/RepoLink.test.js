import React from 'react';
import { render } from 'react-testing-library';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import QuoteLink from '../QuoteLink';

describe('<QuoteLink />', () => {
  it('should match the snapshot', () => {
    const renderedComponent = renderer.create(<QuoteLink />).toJSON();
    expect(renderedComponent).toMatchSnapshot();
  });

  it('should have a className attribute', () => {
    const { container } = render(<QuoteLink />);
    expect(container.firstChild.hasAttribute('class')).toBe(true);
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const { container } = render(<QuoteLink id={id} />);
    expect(container.firstChild.hasAttribute('id')).toBe(true);
    expect(container.firstChild.id).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const { container } = render(<QuoteLink attribute="test" />);
    expect(container.firstChild.hasAttribute('attribute')).toBe(false);
  });
});
