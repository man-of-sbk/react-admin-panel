import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the basicTables state domain
 */

const selectBasicTablesDomain = state => state.basicTables || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by BasicTables
 */

const makeSelectBasicTables = () =>
  createSelector(
    selectBasicTablesDomain,
    substate => substate,
  );

export default makeSelectBasicTables;
export { selectBasicTablesDomain };
