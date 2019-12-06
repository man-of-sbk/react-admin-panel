import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the charts state domain
 */

const selectChartsDomain = state => state.charts || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Charts
 */

const makeSelectCharts = () =>
  createSelector(
    selectChartsDomain,
    substate => substate,
  );

export default makeSelectCharts;
export { selectChartsDomain };
