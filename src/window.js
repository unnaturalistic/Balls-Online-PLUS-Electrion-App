const path = require("path");
const { BrowserWindow } = require("electron"); // https://www.electronjs.org/docs/api/browser-window

exports.createBrowserWindow = () => {
  // https://www.electronjs.org/docs/api/browser-window#class-browserwindow
  return new BrowserWindow({
    width: 1024,
    height: 768,
    //titleBarStyle: 'hidden',
    //frame: false,
    backgroundColor: "#fff",
    webPreferences: {
      nativeWindowOpen: true,
      devTools: false, // false if you want to remove dev tools access for the user
      contextIsolation: true,
      webviewTag: true, // https://www.electronjs.org/docs/api/webview-tag,
      preload: path.join(__dirname, "../preload.js"), // required for print function
    },
  });
};
