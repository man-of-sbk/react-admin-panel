import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the forums state domain
 */

const selectForumsDomain = state => state.forums || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Forums
 */

const makeSelectForums = () =>
  createSelector(
    selectForumsDomain,
    substate => substate,
  );

export default makeSelectForums;
export { selectForumsDomain };
