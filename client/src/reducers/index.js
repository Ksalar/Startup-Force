import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './usersReducer.js';
import messageReducer from './messageReducer.js';
import scheduleReducer from './scheduleReducer.js';
import reportsReducer from './reportsReducer.js';
import newCompanyReducer from './newCompanyReducer.js';
import newEmployeeReducer from './onboardingReducer.js'
import updateProfileReducer from './updateProfileReducer.js';

export default combineReducers({
  users: users,
  routing: routerReducer,
  messages: messageReducer,
  scheduleReducer,
  reportsReducer,
  newCompanyReducer,
  newEmployeeReducer,
  updateProfileReducer
});
