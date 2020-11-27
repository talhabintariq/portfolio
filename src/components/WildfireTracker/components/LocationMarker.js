import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import locationIcon from '@iconify/icons-mdi/fire-alert';
// import '../wildfireStyles.scss';

const LocationMarker = ({ onClick }) => {
  return (
    <div
      aria-hidden="true"
      className="location-marker"
      onClick={onClick}
    >
      <Icon icon={locationIcon} className="location-icon" />
    </div>
  );
};

LocationMarker.defaultProps = {
  onClick: () => {},
};

LocationMarker.propTypes = {
  onClick: PropTypes.func,
};

export default LocationMarker;
