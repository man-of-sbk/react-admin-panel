import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the tables state domain
 */

const selectTablesDomain = state => state.tables || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Tables
 */

const makeSelectTables = () =>
  createSelector(
    selectTablesDomain,
    substate => substate,
  );

export default makeSelectTables;
export { selectTablesDomain };
