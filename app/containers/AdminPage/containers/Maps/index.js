/**
 *
 * Maps
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
import makeSelectMaps from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Maps() {
  useInjectReducer({ key: 'maps', reducer });
  useInjectSaga({ key: 'maps', saga });

  return (
    <div>
      <Helmet>
        <title>Maps</title>
        <meta name="description" content="Description of Maps" />
      </Helmet>
      map
    </div>
  );
}

Maps.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  maps: makeSelectMaps(),
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
)(Maps);
