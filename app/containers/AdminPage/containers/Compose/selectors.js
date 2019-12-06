import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the compose state domain
 */

const selectComposeDomain = state => state.compose || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Compose
 */

const makeSelectCompose = () =>
  createSelector(
    selectComposeDomain,
    substate => substate,
  );

export default makeSelectCompose;
export { selectComposeDomain };
