#Requires AutoHotkey v2.0

; Load DLL
hVD := DllCall("LoadLibrary", "Str", A_ScriptDir "\VirtualDesktopAccessor.dll", "Ptr")

; Functions
GoToDesktop(n) {
    global lastDesktop, currentDesktop
    lastDesktop := currentDesktop
    DllCall("VirtualDesktopAccessor\GoToDesktopNumber", "Int", n)
    currentDesktop := n

    ; Wait for desktop transition
    Sleep(50)

    ; Try to focus window under mouse, silently fail if error
    try {
        MouseGetPos(&x, &y, &winUnderMouse)
        if (winUnderMouse && WinExist("ahk_id " winUnderMouse))
            WinActivate("ahk_id " winUnderMouse)
    } catch {
        ; Ignore errors from closed/invalid windows
    }
}

MoveWindowToDesktop(n) {
    ; Safely get active window, return silently if no window
    try {
        active := WinGetID("A")
    } catch {
        return
    }

    if (!active)
        return

    ; Try to move window, silently return on error
    result := DllCall("VirtualDesktopAccessor\MoveWindowToDesktopNumber", "Ptr", active, "Int", n, "Int")
    if (result == -1)
        return

    Sleep(100)
    ; Follow the window to the new desktop
    DllCall("VirtualDesktopAccessor\GoToDesktopNumber", "Int", n)
    global currentDesktop
    currentDesktop := n

    ; Wait a bit for desktop transition, then focus the window
    Sleep(50)
}

GetDesktopCount() {
    return DllCall("VirtualDesktopAccessor\GetDesktopCount")
}

GetCurrentDesktop() {
    return DllCall("VirtualDesktopAccessor\GetCurrentDesktopNumber")
}

CreateDesktop() {
    ; Create a new desktop and go to it
    result := DllCall("VirtualDesktopAccessor\CreateDesktop")
    if (result != -1) {
        Sleep(100)
        newCount := GetDesktopCount()
        GoToDesktop(newCount - 1)
    }
    return result
}

; Initialize tracking
currentDesktop := GetCurrentDesktop()
lastDesktop := currentDesktop

; ============================================================
; ALT + A → Previous Desktop
; ALT + S → Next Desktop
; ALT + D → Toggle (back to previous)
; ============================================================

Alt & a::
{
    ; Check if Shift is pressed - if yes, move window instead
    if GetKeyState("Shift", "P") {
        cur := GetCurrentDesktop()
        if (cur > 0)
            MoveWindowToDesktop(cur - 1)
    } else {
        cur := GetCurrentDesktop()
        GoToDesktop(max(cur - 1, 0))
    }
}

Alt & s::
{
    ; Check if Shift is pressed - if yes, move window instead
    if GetKeyState("Shift", "P") {
        cur := GetCurrentDesktop()
        maxDesk := GetDesktopCount() - 1
        if (cur < maxDesk)
            MoveWindowToDesktop(cur + 1)
    } else {
        cur := GetCurrentDesktop()
        maxDesk := GetDesktopCount() - 1
        GoToDesktop(min(cur + 1, maxDesk))
    }
}

; ALT + D → Toggle last desktop (Hyprland-style)
Alt & d::
{
    global lastDesktop, currentDesktop
    ; swap
    temp := currentDesktop
    GoToDesktop(lastDesktop)
    lastDesktop := temp
}

; ============================================================
; ALT + 1..9 → Jump to Desktop
; ALT + SHIFT + 1..9 → Move window to desktop
; ============================================================

Alt & 1::
{
    if GetKeyState("Shift", "P")
        MoveWindowToDesktop(0)
    else
        GoToDesktop(0)
}

Alt & 2::
{
    if GetKeyState("Shift", "P")
        MoveWindowToDesktop(1)
    else
        GoToDesktop(1)
}

Alt & 3::
{
    if GetKeyState("Shift", "P")
        MoveWindowToDesktop(2)
    else
        GoToDesktop(2)
}

Alt & 4::
{
    if GetKeyState("Shift", "P")
        MoveWindowToDesktop(3)
    else
        GoToDesktop(3)
}

Alt & 5::
{
    if GetKeyState("Shift", "P")
        MoveWindowToDesktop(4)
    else
        GoToDesktop(4)
}

Alt & 6::
{
    if GetKeyState("Shift", "P")
        MoveWindowToDesktop(5)
    else
        GoToDesktop(5)
}

Alt & 7::
{
    if GetKeyState("Shift", "P")
        MoveWindowToDesktop(6)
    else
        GoToDesktop(6)
}

Alt & 8::
{
    if GetKeyState("Shift", "P")
        MoveWindowToDesktop(7)
    else
        GoToDesktop(7)
}

Alt & 9::
{
    if GetKeyState("Shift", "P")
        MoveWindowToDesktop(8)
    else
        GoToDesktop(8)
}

; ============================================================
; CREATE & REMOVE DESKTOP
; ============================================================
; ALT + CTRL + ` → Create new desktop
!^`::
{
    CreateDesktop()
}

; ============================================================
; SHORCUT APPLICATION
; ============================================================
; ALT + ENTER → Terminal (PowerShell) di E:\
Alt & Enter:: Run("C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe", "E:\")

; ALT + SHIFT + Q → Alt + F4 (Tutup aplikasi)
!+q:: Send("!{F4}")

; ALT + CTRL + F → File Explorer
!^f:: Send("#e")

; ALT + CTRL + E → Microsoft Edge
!^e:: Run("C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe")

; ALT + CTRL + V → VS Code
!^v:: Run("C:\Users\ariaf\AppData\Local\Programs\Microsoft VS Code\Code.exe")

; ALT + CTRL + W → Winbox
!^w:: Run("C:\Users\ariaf\Downloads\apk\win_portable\winbox64.exe")

; ALT + F11 -> Fullscreen
Alt & f:: Send("{F11}")
