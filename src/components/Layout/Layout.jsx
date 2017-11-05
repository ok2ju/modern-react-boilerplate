import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import theme from './theme.css';

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
      <div className={theme.main}>
        <header className={theme.header}>
          <h2 className={theme.logo}>App header</h2>
          <ul className={theme.nav}>
            <li className={theme.navItem}>
              <Link to="/">Home</Link>
            </li>
            <li className={theme.navItem}>
              <Link to="/todos">Todos</Link>
            </li>
            <li className={theme.navItem}>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </header>
        <section className={theme.content}>
          <h2>Hello, {this.props.name}</h2>
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Layout;
