
'use strict';

import React          from 'react';
import MessageMenu    from '../../../../src/app/components/header/messageMenu/MessageMenu';
import renderer       from 'react-test-renderer';

jest.mock(
  '../../../../src/app/vendors/img/26115.jpg',
  () => ''
);
jest.mock(
  '../../../../src/app/vendors/img/avatar.png',
  () => ''
);

describe('MessageMenu component', () => {
  it('renders as expected', () => {
    const component = renderer.create(
      <div>
        <MessageMenu />
      </div>
    ).toJSON();
    expect(component).toMatchSnapshot();
  });
});
