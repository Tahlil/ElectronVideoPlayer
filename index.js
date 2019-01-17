const electron = require('electron');
const ioHook = require('iohook');
console.log(ioHook);
const { app, BrowserWindow } = electron;

function eventHandler(event) {
  console.log(event);
}

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
  ioHook.start(true);
  ioHook.on('mouseclick', eventHandler);
  ioHook.on('keypress', eventHandler);
  ioHook.on('mousewheel', eventHandler);
  ioHook.on('mousemove', eventHandler);
  console.log('Try move your mouse or press any key');
});

app.on('before-quit', () => {
  ioHook.unload();
  ioHook.stop();
});