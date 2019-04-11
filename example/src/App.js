import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { calcActions } from './reducers/calc';
import { themeActions, THEMES } from './reducers/theme';


class App extends Component {
  render() {
    const { theme } = this.props;
    const Button = ({ title, onClick }) => {
      return (
        <button
          style={{
            height: 44,
            width: 120,
            backgroundColor: theme.buttonBgColor,
            marginTop: 20,
            color: theme.buttonTextColor,
          }}
          onClick={onClick}
        >
          {title}
        </button>
      );
    };
    return (
      <div className="App">
        <header
          className="App-header"
          style={{ color: theme.textColor, backgroundColor: theme.backgroundColor }}
        >
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.sum}
          </a>
          <Button
            onClick={() => {
              this.props.dispatch(calcActions.add({ addNum: 1 }));
            }}
            title={'+1'}
          />
          <div style={{ display: 'flex' }}>
            <Button
              onClick={() => {
                this.props.dispatch(themeActions.changeTheme({ theme: THEMES.light }));
              }}
              title="light theme"
            />
            <Button
              onClick={() => {
                this.props.dispatch(themeActions.changeTheme({ theme: THEMES.dark }));
              }}
              title="dark theme"
            />
          </div>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({ calc, theme }) => {
  return {
    ...calc,
    ...theme,
  };
};

export default connect(mapStateToProps)(App);
