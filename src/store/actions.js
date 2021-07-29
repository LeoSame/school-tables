import { SET_COLUMN, SET_IS_LOADING, SET_RATE, SET_SCHOOLBOY } from './types';

export const saveSchoolboyAction = Schoolboy => ({
  type: SET_SCHOOLBOY,
  payload: Schoolboy,
});

export const saveColumnAction = Column => ({
  type: SET_COLUMN,
  payload: Column,
});

export const saveRateAction = Rate => ({
  type: SET_RATE,
  payload: Rate,
});

export const saveIsLoadingAction = isLoading => ({
  type: SET_IS_LOADING,
  payload: isLoading,
});
