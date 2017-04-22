import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
import UsersReducer from './reducer_users';
import ActiveUser from './reducer_active_user';

//combine all our reducers
const rootReducer = combineReducers({
  posts: PostsReducer,
  users: UsersReducer,
  activeUser: ActiveUser,
  form: formReducer
});

export default rootReducer;
