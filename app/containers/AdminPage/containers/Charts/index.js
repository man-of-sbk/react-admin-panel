/**
 *
 * Charts
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
import makeSelectCharts from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Charts() {
  useInjectReducer({ key: 'charts', reducer });
  useInjectSaga({ key: 'charts', saga });

  return (
    <div>
      <Helmet>
        <title>Charts</title>
        <meta name="description" content="Description of Charts" />
      </Helmet>
      charts
    </div>
  );
}

Charts.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  charts: makeSelectCharts(),
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
)(Charts);
