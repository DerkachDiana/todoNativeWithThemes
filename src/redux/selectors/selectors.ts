import { RootState } from '../store';
import { StateType } from '../../types/State';

export const appStateSelector = (state: RootState): StateType => state.loginReducer;
