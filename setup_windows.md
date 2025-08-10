# after install
- login microssft akun

## driver
- [sdi-tool](https://sdi-tool.org/)

## setting
- system > display > scale
  ubah menjadi 125% atau 110%
- device > mouse > mouse pointer and touch
  - ubah warna jadi kuning
  - ubah size jadi 3
- personalization > taskbar
  - taskbar items: 
    - disable task view, widgets
    - search : ubah jadi search icon only
  - taskbar behavior
    - enable: automatic hide taskbar
    - disable: show badges, show flashing app

# app
- [hdd_sentinel](https://www.hdsentinel.com/download.php)
  pilih yang standar => ini berfungsi untuk melihat kesehatan hdd
- [cystal_disk_info](https://crystalmark.info/en/)
  CrystalDiskInfo (untuk health monitoring) => ( pilih yang shizuku / bebas )
- [crystal_disk_mark](https://crystalmark.info/en/software/crystaldiskmark/) / [link_2](https://crystalmark.info/en/download/#CrystalDiskMark)
  CrystalDiskMark (untuk speed test)
- [raidrive](https://www.raidrive.com/download)
  berfungsi untuk install menghubungkan ke nas / storage cloud
  
## app install with scoop setup
### intall scoop
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
Invoke-RestMethod -Uri https://get.scoop.sh | Invoke-Expression

scoop bucket <option>
scoop install <package>
scoop uninstall <package>
scoop info <package>

# code (scoop which crystaldiskinfo) # jika ingin lihat manifestnya
```

## app_minimal
```bash
scoop bucket add extras

scoop install git speedtest
# scoop install crystaldiskinfo # 
```

## app medium
```bash
scoop bucket add extras

scoop install 
```