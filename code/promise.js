function S4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}
function guid() {
  return (
    S4() +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    "-" +
    S4() +
    S4() +
    S4()
  );
}

function initPromise() {}

class Promise {
  constructor(resolver) {
    this._ID = guid();
    this._result = this._state = undefined;
    this._subscribers = [];

    typeof resolver === "function" &&
      this instanceof Promise &&
      initPromise(this, resolver);
  }
  catch(onRejection) {
    return this.then(null, onRejection);
  }
  finally(callback) {
    let promise = this;
    let constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(
        (value) => constructor.resolve(callback()).then(() => value),
        (reason) =>
          constructor.resolve(callback()).then(() => {
            throw reason;
          })
      );
    }

    return promise.then(callback, callback);
  }
}
Promise.prototype.then = function (onFulfillment, onRejection) {
  const parent = this;

  const child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  const { _state } = parent;

  if (_state) {
    const callback = arguments[_state - 1];
    asap(() => invokeCallback(_state, child, callback, parent._result));
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
};
Promise.resolve = function () {
  return new Promise((reslove) => {
    reslove();
  });
};
Promise.reject = function () {};
Promise.race = function () {};
