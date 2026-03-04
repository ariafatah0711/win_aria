# Memory
## RAMMap
RAM tiba-tiba 80–90% padahal aplikasi yang dibuka sedikit.

Contoh:
- Microsoft Edge ~1 GB
- Discord ~600 MB
- proses lain kecil

> Total RAM tetap hampir penuh (~14 GB dari 16 GB).

Gunakan tool **RAMMap** untuk melihat detail memory usage.
1. Download RAMMap dari [Microsoft Sysinternals](https://docs.microsoft.com/en-us/sysinternals/downloads/rammap).
2. Jalankan RAMMap sebagai administrator.
3. Di tab "Use Counts", perhatikan kategori "Active" dan "Standby".
- **Active**: Memory yang sedang digunakan oleh aplikasi.
- **Standby**: Memory yang tidak aktif tapi masih disimpan untuk kemungkinan digunakan kembali.
![1772666484973](images/13_memory/1772666484973.png)

4. Temuan di RAMMap:
- Page Table sempat ~3 GB
- Working Set besar
- Setelah dibersihkan RAM langsung turun
![1772666507379](images/13_memory/1772666507379.png)

5. gunakan fitur "Empty → Empty Working Sets", atau "Empty → Empty System Working Set" di RAMMap untuk membersihkan Standby memory.
![1772666743862](images/13_memory/1772666743862.png)

6. matikan hardware acceleration di aplikasi yang mendukung (misalnya Microsoft Edge) untuk mengurangi penggunaan RAM. atau discord juga bisa dimatikan hardware accelerationnya.
- Microsoft Edge: Settings → System → Hardware acceleration → Off
- Discord: User Settings → Advanced → Hardware Acceleration → Off

##
