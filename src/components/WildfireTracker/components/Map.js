import React, { useState } from 'react';
import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
// import '../wildfireStyles.scss';

const NATURAL_EVENT_WILDFIRE = 8;
const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  const markers = eventData.map((ev, index) => {
    const key = index + 1;
    if (ev.categories[0].id === NATURAL_EVENT_WILDFIRE) {
      return (
        <LocationMarker
          key={key}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: ev.id, title: ev.title })}
        />
      );
    }
    return null;
  });

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && (
        <LocationInfoBox
          onClose={() => setLocationInfo(null)}
          info={locationInfo}
        />
      )}
    </div>
  );
};

Map.propTypes = {
  center: PropTypes.object,
  zoom: PropTypes.number,
  eventData: PropTypes.object,
};

Map.defaultProps = {
  center: {
    lat: 42.3265,
    lng: -122.8756,
  },
  zoom: 6,
  eventData: {},
};

export default Map;
