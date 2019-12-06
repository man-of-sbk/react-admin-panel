/**
 *
 * BasicTables
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
import makeSelectBasicTables from './selectors';
import reducer from './reducer';
import saga from './saga';

export function BasicTables() {
  useInjectReducer({ key: 'basicTables', reducer });
  useInjectSaga({ key: 'basicTables', saga });

  return (
    <div>
      <Helmet>
        <title>BasicTables</title>
        <meta name="description" content="Description of BasicTables" />
      </Helmet>
    </div>
  );
}

BasicTables.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  basicTables: makeSelectBasicTables(),
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
)(BasicTables);
