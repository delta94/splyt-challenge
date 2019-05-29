import React from 'react';
import PropTypes from 'prop-types';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const SplytIcon = props => {
  const { lat, lng } = props;

  return (
    <OverlayTrigger
      placement="right"
      overlay={
        <Popover id="splyt-icon">
          <ul className="m-0 pl-3">
            <li>
              <strong>Latitude:</strong> {lat}
            </li>
            <li>
              <strong>Longtitude:</strong> {lng}
            </li>
          </ul>
        </Popover>
      }
    >
      <i className="text-primary fas fa-map-marker-alt fa-3x" />
    </OverlayTrigger>
  );
};

SplytIcon.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default SplytIcon;
