import { combineReducers } from 'redux';
import fabricReducer from './reducers/FabricReducer';
import formReducer from './reducers/form.reducer';

// Combine all reducers
const rootReducer = combineReducers({
  fabric: fabricReducer ,
  form: formReducer
});

export default rootReducer;
