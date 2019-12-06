/**
 *
 * Email
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
import makeSelectEmail from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Email() {
  useInjectReducer({ key: 'email', reducer });
  useInjectSaga({ key: 'email', saga });

  return (
    <div>
      <Helmet>
        <title>Email</title>
        <meta name="description" content="Description of Email" />
      </Helmet>
      email
    </div>
  );
}

Email.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  email: makeSelectEmail(),
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
)(Email);
