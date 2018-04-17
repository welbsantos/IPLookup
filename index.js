const electron = require('electron');
const { app, BrowserWindow } = electron;
let win;


app.on('ready', () => {
    win = new BrowserWindow();
    win.loadURL(__dirname+'/index.html');
})