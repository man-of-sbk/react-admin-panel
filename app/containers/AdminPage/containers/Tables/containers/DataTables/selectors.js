import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dataTables state domain
 */

const selectDataTablesDomain = state => state.dataTables || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DataTables
 */

const makeSelectDataTables = () =>
  createSelector(
    selectDataTablesDomain,
    substate => substate,
  );

export default makeSelectDataTables;
export { selectDataTablesDomain };
