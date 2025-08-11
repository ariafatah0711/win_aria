# terminal
## oh-my-posh
### setup
#### 1. install oh-my-posh
```bash
scoop install oh-my-posh
```
or with microsft store

#### 2. install font
```bash
oh-my-posh font install
# JetBrains, nerd font
# and change the font in setting to Jetbrains Nerd Font
```

#### 3. create profile
```bash
notepad $PROFILE
### notepad ###
clear
oh-my-posh init pwsh | Invoke-Expression
### ####### ###

# if error
New-Item -Path $PROFILE -Type File -Force
```

#### 4. permissions
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine
```

#### 5. custom theme
```bash
oh-my-posh init pwsh | Invoke-Expression
```

> if ur want remove ms u can add --no-logo in setting windows-powershell.exe --no-logo (tapi pas dicoba agak ngebug dulu bisa)

## setting terminal
- [setting.json](./config/terminal/setting.json)

### Profiles > Defaults
- font face: Jet brains Nerd Font
- Font size: 10
- background image path: path/to/path/gambar.png
- background image opacity: 80
- background opacity: 80

### Actions
- ctrl + shift + r => split
- ctrl d => new tab

## fastfetch
### install
```bash
scoop install fastfetch
```

### customize
#### config
- [../terminal/fastfetch/config.jsonc](../terminal/fastfetch/config.jsonc)

#### ascii
- [https://github.com/blyxyas/uwu-neofetch-art](https://github.com/blyxyas/uwu-neofetch-art)
- [https://emojicombos.com/anime](https://emojicombos.com/anime)

```bash
fastfetch --config E:/1_config/win_aria/terminal/fastfetch/config.jsonc
```

#### persistent config
```bash
fastfetch --gen-config
# The generated config file has been written in `C:/Users/ariaf/.config/fastfetch/config.jsonc`

cp E:/1_config/win_aria/terminal/fastfetch/config.jsonc C:/Users/ariaf/.config/fastfetch/config.jsonc
```