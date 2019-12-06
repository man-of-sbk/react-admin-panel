/**
 *
 * DataTables
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
import makeSelectDataTables from './selectors';
import reducer from './reducer';
import saga from './saga';

export function DataTables() {
  useInjectReducer({ key: 'dataTables', reducer });
  useInjectSaga({ key: 'dataTables', saga });

  return (
    <div>
      <Helmet>
        <title>DataTables</title>
        <meta name="description" content="Description of DataTables" />
      </Helmet>
    </div>
  );
}

DataTables.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dataTables: makeSelectDataTables(),
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
)(DataTables);
