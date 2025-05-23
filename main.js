const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

let win;


app.whenReady().then(() => {
    win = new BrowserWindow({
        width: 360,
        height: 480,
        resizable: false,
        webPreferences: {
            preload: path.join(__dirname, 'HappyBirthday', 'preload.js'),
            contextIsolation: true,
            nodeIntegration: false,
        },
        frame: false,
        transparent: true,  

    });
    win.loadFile('HappyBirthday/index.html');
});

ipcMain.on('close-window', (event) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  win.close();
});
ipcMain.on('minimize-window', (event) => {
    const win = BrowserWindow.fromWebContents(event.sender);
    win.minimize();
  });
  