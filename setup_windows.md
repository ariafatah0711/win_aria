# after install
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
- system > multitasking
  - show tabs from apps when snapping on pres alt + tab : dont show tabs

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

<!-- ## app medium
```bash
scoop bucket add extras

scoop install 
``` -->

# more
## powertoys
### zoom
- 1 => 2 (zoom only)
- 2 => 1 (draw)
- 3 => 4
- 4 => 3 (zoom with mouse)

## app tambahan
### vbox
- [virtual box](https://www.virtualbox.org/)

> jika ada error
#### 1. need Microsoft Visual C++ 2019
![alt text](images/setup_windows/image.png)

lakukan install ini [c++](https://learn.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)

setelah itu jangan lupa add env variable untuk vboxmanage cli

1. Tekan Win + S → ketik environment variables → pilih Edit the system environment variables.
2. Klik Environment Variables...
3. Di bagian System variables, pilih Path → Edit.
4. Klik New, masukkan: ```C:\Program Files\Oracle\VirtualBox```
5. Tutup PowerShell, buka lagi, lalu coba:
6. test di terminal ```vboxmanage --version```

### vagrant
```bash
scoop install vagrant
vagrant --version
```