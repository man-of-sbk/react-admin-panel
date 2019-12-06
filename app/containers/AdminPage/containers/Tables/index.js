/**
 *
 * Tables
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
import makeSelectTables from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Tables() {
  useInjectReducer({ key: 'tables', reducer });
  useInjectSaga({ key: 'tables', saga });

  return (
    <div>
      <Helmet>
        <title>Tables</title>
        <meta name="description" content="Description of Tables" />
      </Helmet>
      table
    </div>
  );
}

Tables.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  tables: makeSelectTables(),
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
)(Tables);
