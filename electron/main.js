const { app, BrowserWindow } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({ width: 1080, height: 760, minWidth: 380, title: 'Time', icon: path.join(__dirname, '..', 'icon-512.png'), autoHideMenuBar: true });
  win.loadFile(path.join(__dirname, '..', 'index.html'));
}
app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
