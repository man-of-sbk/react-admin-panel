/**
 *
 * Calendar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import makeSelectCalendar from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Calendar() {
  useInjectReducer({ key: 'calendar', reducer });
  useInjectSaga({ key: 'calendar', saga });

  return (
    <div>
      <Helmet>
        <title>Calendar</title>
        <meta name="description" content="Description of Calendar" />
      </Helmet>
      calendar
    </div>
  );
}

Calendar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  calendar: makeSelectCalendar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(Calendar);
