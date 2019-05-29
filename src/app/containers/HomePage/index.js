import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { getSplytDriversStart } from './actions';

import Slider from './Slider';
import Map from './Map';

const key = 'home';

const HomePage = props => {
  const { getSplytDrivers } = props;
  // @dev useInjectReducer before other react hooks function
  // @dev useInjectSaga before other react hooks function
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    getSplytDrivers();
  }, [getSplytDrivers]);

  return (
    <Fragment>
      <Container className="text-white pt-5">
        <Row className="justify-content-center text-center">
          <Col className="pb-5" xs={12}>
            <h1>Splyt Challenge</h1>
          </Col>
        </Row>
      </Container>
      <Slider />
      <Map />
    </Fragment>
  );
};

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapDispatchToProps = dispatch => {
  return {
    getSplytDrivers: () => {
      dispatch(getSplytDriversStart());
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(HomePage);
