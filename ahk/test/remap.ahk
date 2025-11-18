#SingleInstance Force
#Requires AutoHotkey v2.0
SendMode "Input"

; =========================================================
; ALT + A / S → Pindah Virtual Desktop
; =========================================================

; Alt + A → Win + Ctrl + Left
LAlt & a:: Send("#^{Left}")
RAlt & a:: Send("#^{Left}")

; Alt + S → Win + Ctrl + Right
LAlt & s:: Send("#^{Right}")
RAlt & s:: Send("#^{Right}")

; =========================================================
; ALT + ENTER → Buka Terminal (PowerShell) di E:\
; =========================================================

Alt & Enter::
{
    run("C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe", "E:\")
}

; =========================================================
; ALT + SHIFT + Q → Alt + F4 (Tutup aplikasi)
; =========================================================

!+q:: Send("!{F4}")

; =========================================================
; ALT + CTRL + F → Buka File Explorer (Win + E)
; =========================================================

!^f:: Send("#e")

; =========================================================
; ALT + CTRL + E → Buka Microsoft Edge
; =========================================================

!^e::
{
    run("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")
}

; =========================================================
; ALT + CTRL + V → Buka VS Code
; =========================================================

!^v::
{
    run("C:\Users\ariaf\AppData\Local\Programs\Microsoft VS Code\Code.exe")
}

; =========================================================
; ALT + CTRL + W → Buka Winbox
; =========================================================

!^w::
{
    run("C:\Users\ariaf\Downloads\apk\win_portable\winbox64.exe")
}

; =========================================================
; ALT + F → Fullscreen (F11)
; =========================================================

Alt & f:: Send("{F11}")

; =========================================================
; https://github.com/Ciantic/VirtualDesktopAccessor
; =========================================================
; dll := DllCall("LoadLibrary", "Str", "VirtualDesktopAccessor.dll", "Ptr")
; MsgBox("DLL Loaded? " . (dll ? "YES" : "NO"))
