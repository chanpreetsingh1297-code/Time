# Time: install as a desktop app

## Option 1: Install from the browser (no tools needed)
1. Host this folder on any HTTPS site (GitHub Pages, Netlify, Cloudflare Pages) or run `npx serve .` and open http://localhost:3000.
2. Open it in Chrome, Edge or Brave and click the install icon in the address bar (or menu > Install Time).
It opens in its own window, works offline, and keeps its data in the browser's local storage.

## Option 2: Standalone app with Electron
npm install
npm start          # run it
npm run build      # makes an AppImage and .deb on Linux, an installer on Windows, a .dmg on macOS
Build on the OS you are targeting.
