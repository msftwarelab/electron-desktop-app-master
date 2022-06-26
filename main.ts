import {app, BrowserWindow, screen, ipcMain} from 'electron';
import * as path from 'path';


let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');
if (serve) {
  require('electron-reload')(__dirname, {});
}
ipcMain.on('print', (event, arg) => {
  console.log(arg)  // prints "ping"
  console.log('main thread got a message');
  // event.sender.send('asynchronous-reply', 'async pong')
  win.webContents.print({silent: true});
})

function createWindow() {

  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    kiosk: true
  });
  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/index.html');
  win.on('closed', () => {
    win = null;
  });

  win.on('close', (e) => {
    e.preventDefault();
    console.log('attempting to close')
  })

}


try {

  app.on('ready', createWindow);
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (win === null) {
      createWindow();
    }
  });

} catch (e) {
}
