```
// react-dom/src/client/ReactDOMLegacy.js

export function render(element, container, callback) {  
  return legacyRenderSubtreeIntoContainer(
    null,
    element,
    container,
    false,
    callback,
  );
}
//render方法直接调用legacyRenderSubtreeIntoContainer

```



```
// react-dom/src/client/ReactDOMLegacy.js
function legacyRenderSubtreeIntoContainer(parentComponent, children,container, forceHydrate, callback) {

  // TODO: Without `any` type, Flow says "Property cannot be accessed on any
  // member of intersection type." Whyyyyyy.
  let root: RootType = (container._reactRootContainer: any);
  let fiberRoot;
  if (!root) {
    // Initial mount
    root = container._reactRootContainer = legacyCreateRootFromDOMContainer(
      container,
      forceHydrate,
    );
    fiberRoot = root._internalRoot;
    if (typeof callback === 'function') {
      const originalCallback = callback;
      callback = function() {
        const instance = getPublicRootInstance(fiberRoot);
        originalCallback.call(instance);
      };
    }
    // Initial mount should not be batched.
    unbatchedUpdates(() => {
      updateContainer(children, fiberRoot, parentComponent, callback);
    });
  } else {
    fiberRoot = root._internalRoot;
    if (typeof callback === 'function') {
      const originalCallback = callback;
      callback = function() {
        const instance = getPublicRootInstance(fiberRoot);
        originalCallback.call(instance);
      };
    }
    // Update
    updateContainer(children, fiberRoot, parentComponent, callback);
  }
  return getPublicRootInstance(fiberRoot);
} 
```

```

```



```
function updateContainer(
  element: ReactNodeList,
  container: OpaqueRoot,
  parentComponent: ?React$Component<any, any>,
  callback: ?Function,
): Lane {
  const current = container.current;
  const eventTime = requestEventTime();
  const suspenseConfig = requestCurrentSuspenseConfig();
  const lane = requestUpdateLane(current, suspenseConfig);
  const context = getContextForSubtree(parentComponent);

  if (container.context === null) {
​    container.context = context;
  } else {
​    container.pendingContext = context;
  }

  const update = createUpdate(eventTime, lane, suspenseConfig);
  // Caution: React DevTools currently depends on this property

  // being called "element".
  update.payload = {element};

  callback = callback === undefined ? null : callback;

  if (callback !== null) {
​    update.callback = callback;
  }

  enqueueUpdate(current, update);
  scheduleUpdateOnFiber(current, lane, eventTime);
  return lane;

}

```



```

// react-reconciler/src/ReactFiberWorkLoop.new.js

function unbatchedUpdates<A, R>(fn: (a: A) => R, a: A): R {
  const prevExecutionContext = executionContext;
  executionContext &= ~BatchedContext;
  executionContext |= LegacyUnbatchedContext;

  try {
​    return fn(a);
  } finally {
​    executionContext = prevExecutionContext;
​    if (executionContext === NoContext) {
​      // Flush the immediate callbacks that were scheduled during this batch

​      flushSyncCallbackQueue();
​    }
  }
}

```



```

// react-reconciler/src/SchedulerWithReactIntegration.new

function flushSyncCallbackQueue() {
  if (immediateQueueCallbackNode !== null) {
​    const node = immediateQueueCallbackNode;
​    immediateQueueCallbackNode = null;
​    Scheduler_cancelCallback(node);
  }
  flushSyncCallbackQueueImpl();
}

function flushSyncCallbackQueueImpl() {

  if (!isFlushingSyncQueue && syncQueue !== null) {
​    // Prevent re-entrancy.
​    isFlushingSyncQueue = true;
​    let i = 0;

​    try {
​      const isSync = true;
​      const queue = syncQueue;
​      runWithPriority(ImmediatePriority, () => {
​        for (; i < queue.length; i++) {
​          let callback = queue[i];
​          do {
​            callback = callback(isSync);
​          } while (callback !== null);
​        }
​      });

​      syncQueue = null;
​    } catch (error) {

​      // If something throws, leave the remaining callbacks on the queue.

​      if (syncQueue !== null) {
​        syncQueue = syncQueue.slice(i + 1);
​      }

​      // Resume flushing in the next tick

​      Scheduler_scheduleCallback(
​        Scheduler_ImmediatePriority,
​        flushSyncCallbackQueue,
​      );
​      throw error;
​    } finally {
​      isFlushingSyncQueue = false;
​    }
  }
}
```