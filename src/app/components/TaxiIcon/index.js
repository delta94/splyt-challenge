import React from 'react';
import PropTypes from 'prop-types';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const TaxiIcon = props => {
  const { driver_id, location } = props;

  return (
    <OverlayTrigger
      key={driver_id}
      placement="right"
      overlay={
        <Popover id="splyt-icon">
          <ul className="m-0 pl-3" title={driver_id}>
            <li>
              <strong>Latitude:</strong> {location.latitude}
            </li>
            <li>
              <strong>Longtitude:</strong> {location.longitude}
            </li>
          </ul>
        </Popover>
      }
    >
      <i className="text-primary fas fa-map-marker-alt fa-3x" />
    </OverlayTrigger>
  );
};

TaxiIcon.propTypes = {
  driver_id: PropTypes.string,
  location: PropTypes.object({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
};

export default TaxiIcon;
