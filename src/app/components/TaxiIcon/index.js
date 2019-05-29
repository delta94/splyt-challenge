import React from 'react';
import PropTypes from 'prop-types';
import { Popover, OverlayTrigger } from 'react-bootstrap';

const TaxiIcon = props => {
  const { id, lat, lng } = props;

  return (
    <OverlayTrigger
      key={id}
      placement="right"
      overlay={
        <Popover id="splyt-icon" title={`ID: ${id}`}>
          <ul className="m-0 pl-3">
            <li>
              <strong>Latitude:</strong> {lat}
            </li>
            <li>
              <strong>Longitude:</strong> {lng}
            </li>
          </ul>
        </Popover>
      }
    >
      <i className="text-warning fas fa-taxi fa-2x" />
    </OverlayTrigger>
  );
};

TaxiIcon.propTypes = {
  id: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default TaxiIcon;
