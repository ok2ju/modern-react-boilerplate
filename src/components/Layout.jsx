import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

class Layout extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.node, // eslint-disable-line
  };

  static defaultProps = {
    name: 'world',
  };

  render() {
    return (
      <div className="main">
        <header>
          <h2>App header</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todos">Todos</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </header>
        <section>
          <h2 className="foo">Hello, {this.props.name}</h2>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Layout;
