## 使用

```
//reducers
import { combineReducers } from 'redux';
const initState = {};
const layoutReducers = (initState, action) => {
    switch(action.type) {
        case: 'LOADING': 
            return state;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    layout: layoutReducers
})

//actions

function layoutChange () {
  return {
    type    : LOCATION_CHANGE,
    payload : location
  }
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
const updateLayout = ({ dispatch }) => {
  return (changeType) => dispatch(layoutChange(changeType))
}

//middleware
function createThunkMiddleware(extraArgument) {
  return ({ dispatch, getState }) => (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState, extraArgument);
    }

    return next(action);
  };
}

const thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;



//component.js
import { connect } from 'react-redux';

const mapDispatchToProps = {
  updateLayout
}

const mapStateToProps = (state) => ({
  locales : state.locales
})

class TestComponet extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return <div>{this.props.locales}</div>
    }
}

const Test = connect(mapStateToProps, mapDispatchToProps)(TestComponet);

//store使用
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(
    rootReducer,
    initialState = {},
    compose(
      applyMiddleware([thunk]),
    )
  )

const App = () => {
    return (
        <Provider store={store}>
            <Test />
        </Provider>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))

```

## 原理

## 剖析