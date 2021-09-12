import React, { useEffect, useState } from 'react';
import './Converter.scss';
import DownloadButton from './DownloadButton';

const Converter = () => {
  //  Setup
  const [videoUrl, setVideoUrl] = useState('');
  const [canDownload, setCanDownload] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    const updatedId = videoUrl.replace('https://www.youtube.com/watch?v=', '');
    setId(updatedId);

    setCanDownload(
      videoUrl.startsWith('https://www.youtube.com/watch?v=')
      || videoUrl.startsWith('https://youtube.com/watch?v=')
      || videoUrl.startsWith('www.youtube.com/watch?v=')
      || videoUrl.startsWith('youtube.com/watch?v=')
      || videoUrl.startsWith('v='),
    );
  }, [videoUrl]);

  const renderInput = () => {
    return (
      <>
        <div className="app__navbar">
          <h1>Youtube Downloader/Convertor</h1>
        </div>
        <div className="app__linkBox">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              placeholder="Paste youtube video url here..."
            />
          </form>
        </div>
      </>
    );
  };

  return (
    <div className="app">
      {renderInput()}
      <div>
        {canDownload && (
          <div>
            <DownloadButton id={id} type="mp3" />
            <br />
            <DownloadButton id={id} type="videos" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Converter;
