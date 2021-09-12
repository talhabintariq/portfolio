import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import './DownloadButton.scss';

function DownloadButton({ id, type }) {
  const [Res, setRes] = useState({});

  useEffect(() => {
    async function fetchconvertedData() {
      const url = `https://www.yt-download.org/api/button/${type}/${id}`;

      const response = await fetch(url);
      setRes(response);
    }

    fetchconvertedData();
  }, [id, type, Res]);

  return (
    <div className="download">
      <h2>Download {type === 'mp3' ? 'mp3' : 'video'} file</h2>
      {Res.status !== 200 ? (
        <CircularProgress />
      ) : (
        <iframe
          title="download"
          src={Res.url}
          width="100%"
          height="100px"
          scrolling="no"
          loading="eager"
          referrerPolicy="origin-when-cross-origin"
          style={{ border: 'none' }}
        />
      )}
    </div>
  );
}

DownloadButton.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default DownloadButton;
