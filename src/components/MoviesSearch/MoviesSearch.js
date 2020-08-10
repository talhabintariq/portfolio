import React, { Component } from 'react';
import $ from 'jquery';
import {
  Container,
  Jumbotron,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
} from 'reactstrap';
import { FcSearch } from 'react-icons/fc';
import './MoviesSearch.scss';
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
        <Jumbotron className="header">
          <div className="logo">
            <img alt="app icon" width="100" src="green_app_icon.svg" />
          </div>
          <div className="title">
            <h1>MoviesDB Search</h1>
          </div>
        </Jumbotron>
        <InputGroup
          size="lg"
          style={{
            paddingBottom: '15px',
          }}
        >
          <InputGroupAddon addonType="prepend">
            <InputGroupText><FcSearch size="1.5em" /></InputGroupText>
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
