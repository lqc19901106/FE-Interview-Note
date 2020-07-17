# setState之后react 内部做了什么

```js
//react/src/ReactBaseClasses.js
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  // If a component has string refs, we will assign a different object later.
  this.refs = emptyObject;
  // We initialize the default updater but the real one gets injected by the
  // renderer.
  this.updater = updater || ReactNoopUpdateQueue;
}

Component.prototype.isReactComponent = {};

Component.prototype.setState = function(partialState, callback) {
  invariant(
    typeof partialState === 'object' ||
      typeof partialState === 'function' ||
      partialState == null,
    'setState(...): takes an object of state variables to update or a ' +
      'function which returns an object of state variables.',
  );
  this.updater.enqueueSetState(this, partialState, callback, 'setState');
};

Component.prototype.forceUpdate = function(callback) {
  this.updater.enqueueForceUpdate(this, callback, 'forceUpdate');
};
```

1. setState调用时会执行 `this.updater.enqueueSetState`方法，updater来自于`ReactNoopUpdateQueue`.

```js
//react/src/ReactNoopUpdateQueue.js

const ReactNoopUpdateQueue = {
  isMounted: function(publicInstance) {
    return false;
  },
  //forceUpdate执行函数
  enqueueForceUpdate: function(publicInstance, callback, callerName) {
    warnNoop(publicInstance, 'forceUpdate');
  },


  enqueueReplaceState: function(
    publicInstance,
    completeState,
    callback,
    callerName,
  ) {
    warnNoop(publicInstance, 'replaceState');
  },

	//setState执行函数
  enqueueSetState: function(
    publicInstance,
    partialState,
    callback,
    callerName,
  ) {
    warnNoop(publicInstance, 'setState');
  },
};


const didWarnStateUpdateForUnmountedComponent = {};

function warnNoop(publicInstance, callerName) {
  {
    const constructor = publicInstance.constructor;
    
    const componentName =
      (constructor && (constructor.displayName || constructor.name)) ||
      'ReactClass';
      
    const warningKey = `${componentName}.${callerName}`;
    
    if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
      return;
    }
    console.error(
      "Can't call %s on a component that is not yet mounted. " +
        'This is a no-op, but it might indicate a bug in your application. ' +
        'Instead, assign to `this.state` directly or define a `state = {};` ' +
        'class property with the desired state in the %s component.',
      callerName,
      componentName,
    );
    didWarnStateUpdateForUnmountedComponent[warningKey] = true;
  }
}

```

2. `ReactNoopUpdateQueue` 调用`enqueueSetState`中调用`warnNoop`方法
3. `warnNoop`中首先根据参数中的获取调用该方法的对象，然后将根据componentName和调用方法的名称（`setState`）拼接成 `warningKey`，将`warningKey`缓存到`didWarnStateUpdateForUnmountedComponent`对象中
4. 