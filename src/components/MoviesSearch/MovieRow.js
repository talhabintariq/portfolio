/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

class MovieRow extends React.Component {
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
              <img alt="poster" width="120" src={poster_src} />
            </td>
            <td>
              <h3>{title}</h3>
              <p>{overview}</p>
              <input type="button" onClick={this.viewMovie.bind(this)} value="View" />
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
