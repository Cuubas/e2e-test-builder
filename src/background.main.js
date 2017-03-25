var messenger = require('./common/messenger');

var recordingEnabled = false,
  uiWindow,
  tab,
  api = {
    isRecordingEnabled: function (request, callback) {
      callback(recordingEnabled);
    },
    toggleRecording: function () {
      recordingEnabled = !recordingEnabled;
      chrome.browserAction.setIcon({ path: recordingEnabled ? "assets/icon-recording.png" : "assets/icon.png" });
      chrome.tabs.sendMessage(tab.id, { call: "toggleRecording", value: recordingEnabled });
    }
  };

function handleClick(info, tab) {
  if (recordingEnabled) {
    chrome.tabs.sendMessage(tab.id, { call: "getRightClickTarget" }, function (className) {
      uiWindow.messageHandler({ call: 'assert', target: className });
    });
  }
}

function openHelperWindow(_tab) {
  tab = _tab;
  if (!uiWindow || uiWindow.closed) {
    uiWindow = window.open("ui/index.html", "extension_popup", "width=500,height=500,status=no,scrollbars=yes,resizable=no");
  }
}

// Create a parent item and two children.
chrome.contextMenus.create({ "title": "Assert Element", contexts: ["all"], onclick: handleClick });

chrome.browserAction.onClicked.addListener(openHelperWindow);

// create link to api
messenger.bind(api);

// proxy all messages to the helper window as well
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (uiWindow && !request.$called) {
    return uiWindow.messageHandler(request, sender, sendResponse);
  }
});