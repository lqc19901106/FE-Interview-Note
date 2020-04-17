### redux的使用方式

```js
import React from 'react';
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

//中间件部分
const middleware = [thunk];
const initialState = {};

//reducer 部分
const viewReducer = (state = initialState, {type, ...payload})=>{
    switch (type){
        case "VIEW_INIT":
        	return {..state}
        case "VIEW_CHANGE":
        	return {..state}
        default:
            state;
    }
}
const reducer1= ()=>{
    switch (type){
        case "VIEW_INIT":
        	return {..state}
        case "VIEW_CHANGE":
        	return {..state}
        default:
            state;
    }
}
const rootReducer = combineReducers({
    reducer1,
    viewReducer
});

const enhancers = [];
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(rootReducer, initialState, composedEnhancers);

ReactDOM.render(
	<Provider store={store}>
    	＜App />
    <Provider>
)
```



redux-thunk的代码

```
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => next => action => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

export default thunk;

```

