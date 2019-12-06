/**
 *
 * Chat
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
import makeSelectChat from './selectors';
import reducer from './reducer';
import saga from './saga';

export function Chat() {
  useInjectReducer({ key: 'chat', reducer });
  useInjectSaga({ key: 'chat', saga });

  return (
    <div>
      <Helmet>
        <title>Chat</title>
        <meta name="description" content="Description of Chat" />
      </Helmet>
      chat
    </div>
  );
}

Chat.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  chat: makeSelectChat(),
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
)(Chat);
