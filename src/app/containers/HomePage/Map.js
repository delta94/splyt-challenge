import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { Container, Row, Col, Popover, OverlayTrigger, Button } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

import styled from 'styled-components';

import SplytIcon from 'app/components/SplytIcon';
import TaxiIcon from 'app/components/TaxiIcon';

// ('AIzaSyDVwABhFeesm-9hrtbrD6IqTOE1wVApeGE');
const GOOGLE_API_KEY =
  process.env.REACT_APP_GOOGLE_API_KEY || 'AIzaSyDVwABhFeesm-9hrtbrD6IqTOE1wVApeGE';

const MapWrapper = styled.div`
  height: 600px;
  width: 100%;
`;

// latitude: 51.5049375,
// longitude: -0.0964509,

const Map = props => {
  console.log('MAP', props);
  const [defaultCenter, setDefaultCenter] = useState({
    lat: 51.5049375,
    lng: -0.0964509,
  });

  const handleApiLoaded = props => {
    console.log('PROPS', props);
  };

  const handleClick = props => {
    const { lat, lng, x, y } = props;
    console.log('CLICK PROPS', props);
    setDefaultCenter({
      lat,
      lng,
    });
  };

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <MapWrapper>
            <GoogleMapReact
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
              bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
              defaultCenter={defaultCenter}
              defaultZoom={11}
              onClick={handleClick}
            >
              <SplytIcon {...defaultCenter} text="Split Office" />
            </GoogleMapReact>
          </MapWrapper>
        </Col>
      </Row>
    </Container>
  );
};

Map.propTypes = {};

const mapStateToProps = (state, props) => {
  // here we select the data we get from store
  return {
    number: 1,
  };
};

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(withConnect)(Map);
