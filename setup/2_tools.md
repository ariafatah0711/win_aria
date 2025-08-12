# Tools
## 1. powertoys
### zoom
- 1 => 2 (zoom only)
- 2 => 1 (draw)
- 3 => 4
- 4 => 3 (zoom with mouse)

### keyboard manager
- [shorcut_windows_full](https://tekno.kompas.com/read/2021/07/06/20200087/daftar-tombol-shortcut-di-windows-10-lengkap)

#### Remap A Shorcuts
example:
- ![alt text](images/2_tools/image-1.png)
- ![alt text](images/2_tools/image-4.png)

- Alt + Enter => buka terminal
  - C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe - start another
  - start in: E:
- Alt + Shift + Q => menutup aplikasi
  - ALt + F4
- Alt + Ctrl + F => buka file explor
  - Win + E (open file explorer)
- Alt + Ctrl + E => buka edge
  - C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe - start another
- Alt + Ctrl + V => buka vs code
  - C:\Users\ariaf\AppData\Local\Programs\Microsoft VS Code\Code.exe - show windows
- Alt + Ctrl + W => buka winbox
  - C:\Users\ariaf\Downloads\apk\win_portable\winbox64.exe - show windows
- Alt + F => fullscreen
  - F11
- Alt + A (left dan right) => pindah desktop ke kiri
  - Ctrl + Win + Left
- Alt + S (left dan right) => pindah desktop ke kanan
  - Ctrl + Win + Right
- Alt + D => minimize semua jendela
  - Win + D (Minimize semua jendela)
- Alt + Ctrl + ` => membuat desktop virtual
  - Win + Ctrl + D (membuat desktop virtual)
- Alt + ctrl + 1 => menutup desktop virtual
  - Win + Ctrl + F4 (menutup desktop virtual yang sedang aktif)

### Always On Top
- rename shorcut: **Alt + T**
  ![alt text](images/2_tools/image-3.png)

### Workspaces
- rename shorcut: **Ctrl + Shift + Enter**

### backup
#### manual backup
- Navigate to **%LOCALAPPDATA%\Microsoft\PowerToys\**
- Copy the file settings.json to a safe location (like an external drive or cloud storage).

#### restore
- Replace the new settings.json with your backup copy in **%LOCALAPPDATA%\Microsoft\PowerToys\.**
- Restart PowerToys to load the saved settings.

#### automatic backup
- powertoys > general
- backup
  ![alt text](images/2_tools/image-5.png)

#### automatic restore
- powertoys > general
- restore (pastikan file nya sudah ada)
  ![alt text](images/2_tools/image-6.png)

## 2. visualize your keystrokes and mouse
### Keyviz
- [Keyviz](https://mularahul.github.io/keyviz/)

#### setup
```bash
scoop install keyviz
```

### NohBoard
- [NohBoard](https://github.com/ThoNohT/NohBoard)
