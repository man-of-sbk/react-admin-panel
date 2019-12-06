/**
 *
 * Forums
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
import makeSelectForums from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Forums() {
  useInjectReducer({ key: 'forums', reducer });
  useInjectSaga({ key: 'forums', saga });

  return (
    <div>
      <Helmet>
        <title>Forums</title>
        <meta name="description" content="Description of Forums" />
      </Helmet>
      forum
    </div>
  );
}

Forums.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  forums: makeSelectForums(),
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
)(Forums);
