import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the maps state domain
 */

const selectMapsDomain = state => state.maps || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Maps
 */

const makeSelectMaps = () =>
  createSelector(
    selectMapsDomain,
    substate => substate,
  );

export default makeSelectMaps;
export { selectMapsDomain };
