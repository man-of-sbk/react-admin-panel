/**
 *
 * Compose
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
import makeSelectCompose from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Compose() {
  useInjectReducer({ key: 'compose', reducer });
  useInjectSaga({ key: 'compose', saga });

  return (
    <div>
      <Helmet>
        <title>Compose</title>
        <meta name="description" content="Description of Compose" />
      </Helmet>
      compose
    </div>
  );
}

Compose.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  compose: makeSelectCompose(),
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
)(Compose);
