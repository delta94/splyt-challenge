import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { Container, Row, Col, Card } from 'react-bootstrap';
import RCSlider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';

import { makeSelectCount } from './selectors';

import { setCount, getSplytDriversStart } from './actions';

const Handle = RCSlider.Handle;

const Slider = props => {
  const { setCount, getDrivers, count } = props;

  useEffect(() => {
    getDrivers();
  }, [count, getDrivers]);

  const handle = props => {
    const { value, dragging, index, ...restProps } = props;
    return (
      <Tooltip
        prefixCls="rc-slider-tooltip"
        overlay={value}
        visible={dragging}
        placement="top"
        key={index}
      >
        <Handle value={value} {...restProps} />
      </Tooltip>
    );
  };

  const handleChange = value => {
    setCount({ count: value });
  };

  return (
    <Container className="pb-5">
      <Row>
        <Col xs={12}>
          <Card>
            <Card.Body>
              <div className="pb-3">Available Taxi Drivers: {count}</div>

              <RCSlider
                min={1}
                max={50}
                defaultValue={count}
                handle={handle}
                onChange={handleChange}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

Slider.propTypes = {
  setCount: PropTypes.func,
  getDrivers: PropTypes.func,
  count: PropTypes.number,
};

const mapStateToProps = createStructuredSelector({
  count: makeSelectCount(),
});

const mapDispatchToProps = dispatch => {
  return {
    getDrivers: () => {
      dispatch(getSplytDriversStart());
    },
    setCount: ({ count }) => {
      dispatch(setCount({ count }));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Slider);
