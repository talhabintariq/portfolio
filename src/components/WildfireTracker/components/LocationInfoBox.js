import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import close from '@iconify/icons-mdi/close';
// import '../wildfireStyles.scss';

const LocationInfoBox = ({ info, onClose }) => {
  return (
    <div className="location-info">
      <Icon icon={close} onClick={onClose} className="close-icon" />
      <h2>Event Location Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

LocationInfoBox.defaultProps = {
  info: () => { },
  onClose: () => {},
};

LocationInfoBox.propTypes = {
  info: PropTypes.object,
  onClose: PropTypes.func,
};

export default LocationInfoBox;
