import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import LoginReducer from './reducers/LoginReducer';

const rootReducer = combineReducers({
    login: LoginReducer,
});
const middleware = [thunk];


// if(__DEV__){
//     composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// }
const enhancer = compose(
    applyMiddleware(thunk)
  );
  
  const configureStore = (initialState) => {
    const store = createStore(rootReducer,initialState, enhancer);
    // const persistor = persistStore(store);
    return { store};
  };
  
  const initialState = {};
  
  const configStore = configureStore(initialState);
  

export default configStore;
