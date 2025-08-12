# Tools
## 1. powertoys
### zoom
- 1 => 2 (zoom only)
- 2 => 1 (draw)
- 3 => 4
- 4 => 3 (zoom with mouse)

### keyboard manager
#### Remap A Shorcuts
example:
- ![alt text](images/2_tools/image-1.png)
- ![alt text](images/2_tools/image-4.png)

1. Alt + Enter
   - C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe - start another
   - start in: E:
3. Alt + Shift + Q
   - ALt + F4
4. Alt + Shift + E
   - C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe - start another
5. Alt + Shift + V
   - C:\Users\ariaf\AppData\Local\Programs\Microsoft VS Code\Code.exe - show windows
6. Alt + Shift + W
   - C:\Users\ariaf\Downloads\apk\win_portable\winbox64.exe - show windows
7. Alt + A (left dan right)
   - Ctrl + Win + Left
8. Alt + S (left dan right)
   - Ctrl + Win + Right
9. Alt + F
   - F11

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
