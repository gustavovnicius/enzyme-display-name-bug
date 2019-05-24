import React from 'react';
import { shallow } from 'enzyme';
import { connect } from 'react-redux';

it('renders welcome message', () => {
  const mapStateToProps = () => ({});
  const Component = () => <div />;

  Component.displayName = 'MyComponent';

  const Connected = connect(mapStateToProps)(Component);

  const Wrapper = () => (
    <div>
      <Connected />
    </div>
  );

  const wrapper = shallow(<Wrapper />);

  expect(wrapper).toMatchSnapshot();
});
