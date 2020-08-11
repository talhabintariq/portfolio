/*  eslint-disable  */
import React, { Component } from 'react';
import Container from '@material-ui/core/Container';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavBar from './navBar/NavBar';
import Search from './search/Search';

export default class ImageSearch extends Component {
  render() {
    return (
      <div
        className="wrapper"
        style={{
          paddingLeft: '100px',
          paddingRight: '100px'
        }}
      >
        <MuiThemeProvider>
        <div>
          <NavBar />
          <Search />
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}
