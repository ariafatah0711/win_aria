# wsl
## installation
### 1. turn on windows feature
- open app : **turn windows features on off**
- enable
  - virtual machine platform (defaultnya sih udh nyala)
  - windows subsystem for linux (required)

> jika kita mengaktifkan wsl 2 dengan fitur vmp (virtual machine platoform) maka nanti vm di vritual box bisa saja jadi lambat 
- WSL2 dan VMP mengaktifkan Hyper-V sebagai hypervisor di Windows.
- Hyper-V mengambil alih akses langsung ke VT-x/AMD-V, sehingga VirtualBox tidak bisa mengakses hardware virtualisasi secara langsung dan harus berjalan di atas lapisan Hyper-V.
- Akibatnya ada overhead tambahan yang membuat performa VM di VirtualBox lebih rendah.

> jika hanya menggunakan wsl 1 kita bisa mematikan hyper v, dan vmp
- hanya saja katanya wsl 1 itu tidak menggunakan full kernel linux, dan Kompatibilitas Linux nggak 100% (Docker native nggak bisa).

### 2. install
```bash
wsl --set-default-version 2 # version 2
wsl --set-default-version 1 # v1

wsl --install

# custom path installation
wsl --install -d Ubuntu # install ubuntu
wsl --export Ubuntu D:\WSL\ubuntu.tar # Export Ubuntu ke file .tar
wsl --unregister Ubuntu # Unregister Ubuntu yang lama
wsl --import Ubuntu D:\WSL\UbuntuData D:\WSL\ubuntu.tar --version 2 # Import kembali Ubuntu ke lokasi baru
wsl -d Ubuntu
```