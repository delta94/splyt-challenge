import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { Container, Row, Col, Alert } from 'react-bootstrap';
import GoogleMapReact from 'google-map-react';

import {
  makeSelectSplytDrivers,
  makeSelectLoading,
  makeSelectError,
  makeSelectLocation,
} from './selectors';

import { setLocation, getSplytDriversStart } from './actions';

import styled from 'styled-components';
import SplytIcon from 'app/components/SplytIcon';
import TaxiIcon from 'app/components/TaxiIcon';

const GOOGLE_API_KEY =
  process.env.REACT_APP_GOOGLE_API_KEY || 'AIzaSyDVwABhFeesm-9hrtbrD6IqTOE1wVApeGE';

const MapWrapper = styled.div`
  height: 600px;
  width: 100%;
`;

const Map = props => {
  const { loading, error, location, drivers, getDrivers, setLocation } = props;
  const hasDrivers = drivers && drivers.length;
  const [showError, setShowError] = useState(!!error);

  useEffect(() => {
    getDrivers();
  }, [getDrivers, location.latitude, location.longitude]);

  const handleClick = props => {
    const { lat, lng } = props;

    setLocation({
      location: {
        latitude: lat,
        longitude: lng,
      },
    });
  };

  const handleDismiss = () => {
    setShowError(false);
  };

  return (
    <Container>
      {showError && (
        <Row className="pb-4">
          <Col xs={12}>
            <Alert variant="danger" onClose={handleDismiss} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              {error}
            </Alert>
          </Col>
        </Row>
      )}

      <Row className="justify-content-center">
        <Col className="text-center" xs={12}>
          <MapWrapper>
            <GoogleMapReact
              yesIWantToUseGoogleMapApiInternals
              bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
              center={{
                lat: location.latitude,
                lng: location.longitude,
              }}
              defaultZoom={14}
              onClick={handleClick}
            >
              {loading ? (
                <i
                  lat={location.latitude}
                  lng={location.longitude}
                  className="fas fa-spinner fa-pulse fa-3x"
                />
              ) : (
                <SplytIcon lat={location.latitude} lng={location.longitude} text="Split Office" />
              )}

              {hasDrivers &&
                drivers.map(driver => (
                  <TaxiIcon
                    key={driver.driver_id}
                    id={driver.driver_id}
                    lat={driver.location.latitude}
                    lng={driver.location.longitude}
                  />
                ))}
            </GoogleMapReact>
          </MapWrapper>
        </Col>
      </Row>
    </Container>
  );
};

Map.propTypes = {
  loading: PropTypes.bool,
  // error: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  location: PropTypes.shape({
    latitude: PropTypes.number,
    longitude: PropTypes.number,
  }),
  drivers: PropTypes.array,
  setLocation: PropTypes.func,
  getDrivers: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  drivers: makeSelectSplytDrivers(),
  location: makeSelectLocation(),
});

const mapDispatchToProps = dispatch => {
  return {
    getDrivers: () => {
      dispatch(getSplytDriversStart());
    },
    setLocation: ({ location }) => {
      dispatch(setLocation({ location }));
    },
  };
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(Map);
