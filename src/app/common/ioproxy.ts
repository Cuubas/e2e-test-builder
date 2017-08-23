declare var chrome;

function IoProxy() {
  this.packageName = 'com.cuubas.ioproxy';
}

function genericCallback(resolve, reject, response) {
  if (response && response.code > 0) {
    resolve(response);
  } else {
    if (response && response.stacktrace) {
      console.warn(response.message, response.stacktrace);
    }
    reject((chrome.runtime.lastError && chrome.runtime.lastError.message) || (response && response.message) || "unknown error");
  }
}

IoProxy.prototype.about = function () {
  var self = this;
  return new Promise((resolve, reject) => {
    chrome.runtime.sendNativeMessage(this.packageName,
      {
        op: "about"
      },
      genericCallback.bind(this, resolve, reject)
    );
  });
};

IoProxy.prototype.open = function (lastPath) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendNativeMessage(this.packageName,
      {
        op: "open",
        lastPath: lastPath
      },
      genericCallback.bind(this, resolve, reject)
    );
  });
};

IoProxy.prototype.read = function (path) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendNativeMessage(this.packageName,
      {
        op: "read",
        path: path
      },
      genericCallback.bind(this, resolve, reject)
    );
  });
};

IoProxy.prototype.write = function (path, data, lastPath) {
  return new Promise((resolve, reject) => {
    chrome.runtime.sendNativeMessage(this.packageName,
      {
        op: "write",
        path: path,
        data: data,
        lastPath: lastPath
      },
      genericCallback.bind(this, resolve, reject)
    );
  });
};

export default new IoProxy();