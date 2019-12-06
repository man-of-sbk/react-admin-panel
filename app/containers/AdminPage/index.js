/**
 *
 * AdminPage
 *
 */

import React, { memo, useState } from 'react';

import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { compose } from 'redux';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

// *** routes
import { routesGenerator } from 'utils/routesGenerator';
import { routes } from './routes';

// *** custom components
import PagesWrapper from './PagesWrapper';
import Header from './components/Header';
import Menu from './components/Menu';
import Wrapper from './Wrapper';

// *** selectors, sagas, reducers
import makeSelectAdminPage from './selectors';
import reducer from './reducer';
import saga from './saga';

export function AdminPage() {
  useInjectReducer({ key: 'adminPage', reducer });
  useInjectSaga({ key: 'adminPage', saga });

  const [menuIsHovered, setMenuIsHovered] = useState(false);
  const [closeMenu, setCloseMenu] = useState(true);

  const handleToggleCloseMenu = () => {
    setCloseMenu(!closeMenu);
  };

  const setMenuCloseState = () => {
    if (closeMenu) {
      if (menuIsHovered) return false;

      return true;
    }

    return closeMenu;
  };

  const menuCloseState = setMenuCloseState();

  return (
    <Wrapper>
      <Menu
        setMenuIsHovered={setMenuIsHovered}
        menuIsHovered={menuIsHovered}
        setCloseMenu={setCloseMenu}
        close={menuCloseState}
        activeWidth={256}
      />
      <section className="body">
        <Header
          onToggleMenu={handleToggleCloseMenu}
          menuIsClose={menuCloseState}
        />

        <PagesWrapper menuIsClose={menuCloseState}>
          {routesGenerator(routes)}
        </PagesWrapper>
      </section>
    </Wrapper>
  );
}

AdminPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  adminPage: makeSelectAdminPage(),
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
)(AdminPage);
