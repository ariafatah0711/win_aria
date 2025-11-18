#SingleInstance Force
#Requires AutoHotkey v2.0

; Alt + A → Win + Ctrl + Left
LAlt & a:: Send("#^{Left}")
RAlt & a:: Send("#^{Left}")

; Alt + S → Win + Ctrl + Right
LAlt & s:: Send("#^{Right}")
RAlt & s:: Send("#^{Right}")
