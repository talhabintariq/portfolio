import React, { Component } from 'react';
import $ from 'jquery';
import {
  Container,
  Table,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';
import { FcSearch } from 'react-icons/fc';
import './MoviesSearchStyle.css';
import MovieRow from './MovieRow';

export default class MoviesSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.searchChangeHandler = this.searchChangeHandler.bind(this);
  }

  componentDidMount() {
    this.performSearch('a');
  }

  performSearch(searchTerm) {
    const urlString = `https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=${searchTerm}`;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log('Fetched data successfully');
        const { results } = searchResults;
        const movieRows = [];

        results.forEach((movie) => {
          movie.poster_src = `https://image.tmdb.org/t/p/w185${movie.poster_path}`;
          const movieRow = <MovieRow key={movie.id} movie={movie} />;
          movieRows.push(movieRow);
        });

        this.setState({ rows: movieRows });
      },
      error: () => {
        console.error('Failed to fetch data');
      },
    });
  }

  searchChangeHandler(event) {
    const boundObject = this;
    const searchTerm = event.target.value;
    boundObject.performSearch(searchTerm);
  }

  render() {
    const { rows } = this.state;
    return (
      <Container>
        <Table className="titleBar">
          <tbody>
            <tr>
              <td>
                <img alt="app icon" width="50" src="green_app_icon.svg" />
              </td>
              <td width="8" />
              <td>
                <h1>MoviesDB Search</h1>
              </td>
            </tr>
          </tbody>
        </Table>

        <InputGroup
          style={{
            paddingBottom: '15px',
          }}
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText><FcSearch /></InputGroupText>
          </InputGroupAddon>
          <Input
            onChange={this.searchChangeHandler}
            placeholder="Search"
          />
        </InputGroup>
        {rows}
      </Container>
    );
  }
}
