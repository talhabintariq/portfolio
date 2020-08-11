/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
} from 'reactstrap';
import './MoviesSearch.scss';

class MovieRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.viewMovie = this.viewMovie.bind(this);
  }

  viewMovie() {
    const { movie: { id } } = this.props;
    const url = `https://www.themoviedb.org/movie/${id}`;
    window.location.href = url;
  }

  render() {
    const {
      movie: {
        id, poster_src, title, overview,
      },
    } = this.props;
    return (
      <table key={id}>
        <tbody>
          <tr>
            <td>
              <img
                style={{
                  borderRadius: '5px',
                  marginBottom: '5px',
                }}
                alt="poster"
                width="150"
                src={poster_src}
              />
            </td>
            <td
              style={{
                paddingLeft: 10,
              }}
            >
              <h3
                style={{
                  color: 'black',
                  float: 'left',
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  color: 'black',
                  float: 'left',
                  textAlign: 'left',
                }}
              >
                {overview}
              </p>
              <div
                style={{
                  width: '86px',
                }}
              >
                <Button color="primary" onClick={this.viewMovie}>View</Button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

MovieRow.propTypes = {
  movie: PropTypes.object,
};

MovieRow.defaultProps = {
  movie: {},
};

export default MovieRow;
