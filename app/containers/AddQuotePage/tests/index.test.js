import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';

import AddQuotePage from '../index';

describe('<AddQuotePage />', () => {
  it('should render its heading', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <AddQuotePage />
      </IntlProvider>,
    );

    expect(firstChild).toMatchSnapshot();
  });
});
