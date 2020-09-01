const electron = require('electron')
const app = electron.app
const Menu = electron.Menu;
const Tray = electron.Tray;
const nativeImage = electron.nativeImage
const path = require('path')
const isDev = require('electron-is-dev')
require('electron-reload')
const BrowserWindow = electron.BrowserWindow

let mainWindow
let tray;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1500,
    height: 800,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      devTools: isDev
    },
  })

  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  )

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  Menu.setApplicationMenu(null)
}

app.on('ready', () => {
  createWindow();

  let iconPath = path.join(__dirname, 'assets/icon.ico')
  console.log(iconPath)
  const img = nativeImage.createFromPath(iconPath);
  console.log(img)
  tray = new Tray(img);
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Item1', type: 'radio' },
    { label: 'Item2', type: 'radio' }
  ])
  tray.setContextMenu(contextMenu);
  tray.setTitle('BFME: Reforged')
  tray.setToolTip('BFME: Reforged')
  mainWindow.tray = tray;
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
