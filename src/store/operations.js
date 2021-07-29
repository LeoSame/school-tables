import { getColumnLessons, getRate, getSchoolboy } from '../http';
import { saveColumnAction, saveIsLoadingAction, saveRateAction, saveSchoolboyAction } from './actions';

export const getTableDataOperation = () => async dispatch => {
  dispatch(saveIsLoadingAction(true));

  await getSchoolboy().then(res => {
    dispatch(saveSchoolboyAction(res.data));
  });

  await getColumnLessons().then(res => {
    dispatch(saveColumnAction(res.data));
  });

  await getRate().then(res => {
    dispatch(saveRateAction(res.data));
  });

  dispatch(saveIsLoadingAction(false));
};
