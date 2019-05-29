import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Container, Row, Col } from 'react-bootstrap';

import { GoogleMap, LoadScript } from '@react-google-maps/api';

// ('AIzaSyDVwABhFeesm-9hrtbrD6IqTOE1wVApeGE');
const GOOGLE_API_KEY =
  process.env.REACT_APP_GOOGLE_API_KEY || 'AIzaSyDVwABhFeesm-9hrtbrD6IqTOE1wVApeGE';

const Map = props => {
  console.log('MAP', props);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
            <LoadScript id="script-loader" googleMapsApiKey={GOOGLE_API_KEY}>
              <GoogleMap id="example-map">...Your map components</GoogleMap>
            </LoadScript>
          </GoogleMap>
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
