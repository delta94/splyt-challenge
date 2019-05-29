import React, { useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container, Row, Col } from 'react-bootstrap';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
import { getSplytDriversStart } from './actions';

import Map from './Map';

const key = 'Home';

const HomePage = props => {
  const { getSplytDrivers } = props;
  // @dev useInjectReducer before other react hooks function
  // @dev useInjectSaga before other react hooks function
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {
    // call action to get movies
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
      <Map />
    </Fragment>
  );
};

HomePage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = (state, props) => {
  return {
    number: 1,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSplytDrivers: () => {
      dispatch(getSplytDriversStart());
    },
  };
};

// const withConnect = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
