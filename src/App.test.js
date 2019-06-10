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

it('render component without correct displayName', () => {
  const mapStateToProps = () => ({});
  const Component = (body) => <div>{body}</div>;
  const Body = () => <div>Hello there</div>;

  Component.displayName = 'MyComponent';
  Body.displayName = 'Body';

  const MemoBody = React.memo(Body);

  const Connected = connect(mapStateToProps)(Component);
  const ConnectedBody = connect(mapStateToProps)(MemoBody)

  const Wrapper = () => (
    <div>
      <Connected body={<ConnectedBody />} />
    </div>
  );

  const wrapper = shallow(<Wrapper />);

  expect(wrapper).toMatchSnapshot();
});
