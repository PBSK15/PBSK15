@echo off && cls
SETLOCAL ENABLEDELAYEDEXPANSION

title PBSK15 Uninstaller

:: Force administrator privileges

:init
 setlocal DisableDelayedExpansion
 set cmdInvoke=1
 set winSysFolder=System32
 set "batchPath=%~dpnx0"
 rem this works also from cmd shell, other than %~0
 for %%k in (%0) do set batchName=%%~nk
 set "vbsGetPrivileges=%temp%\OEgetPriv_%batchName%.vbs"
 setlocal EnableDelayedExpansion




:checkPrivileges
  NET FILE 1>NUL 2>NUL
  if '%errorlevel%' == '0' ( goto gotPrivileges ) else ( goto getPrivileges )

:getPrivileges
  if '%1'=='ELEV' (echo ELEV & shift /1 & goto gotPrivileges)
  ECHO.
  ECHO **************************************
  ECHO Invoking UAC for Privilege Escalation
  ECHO **************************************

  ECHO Set UAC = CreateObject^("Shell.Application"^) > "%vbsGetPrivileges%"
  ECHO args = "ELEV " >> "%vbsGetPrivileges%"
  ECHO For Each strArg in WScript.Arguments >> "%vbsGetPrivileges%"
  ECHO args = args ^& strArg ^& " "  >> "%vbsGetPrivileges%"
  ECHO Next >> "%vbsGetPrivileges%"
  
  if '%cmdInvoke%'=='1' goto InvokeCmd 

  ECHO UAC.ShellExecute "!batchPath!", args, "", "runas", 1 >> "%vbsGetPrivileges%"
  goto ExecElevation

:InvokeCmd
  ECHO args = "/c """ + "!batchPath!" + """ " + args >> "%vbsGetPrivileges%"
  ECHO UAC.ShellExecute "%SystemRoot%\%winSysFolder%\cmd.exe", args, "", "runas", 1 >> "%vbsGetPrivileges%"

:ExecElevation
 "%SystemRoot%\%winSysFolder%\WScript.exe" "%vbsGetPrivileges%" %*
 exit /B

:gotPrivileges
 setlocal & cd /d %~dp0
 if '%1'=='ELEV' (del "%vbsGetPrivileges%" 1>nul 2>nul  &  shift /1)













 pushd "%~dp0"
 
 :initial_procedure
 taskkill /f /im PBSK15.exe
 taskkill /f /im basilisk.exe
 taskkill /f /im httpd.exe
 taskkill /f /im mysqld.exe
 
 :initial_check
 FIND /C /I "pbskids.org" %WINDIR%\system32\drivers\etc\hosts > nul
 IF %ERRORLEVEL% NEQ 1 (
	echo.
	echo.
	echo You seem to not have closed PBSK15 correctly the last time you used it. Opening PBSK15 Repair.
	timeout 2 > nul
	call FixHosts.bat
 )


:first_confirm
 echo.
 echo.
 echo Are you SURE that you want to uninstall PBSK15?
 set /p first_confirm=Choice (Y/N):
 if "!first_confirm!"=="Y" goto second_confirm
 if "!first_confirm!"=="N" exit
 echo Please enter a valid choice.
 goto first_confirm



 :second_confirm
 echo.
 echo.
 echo Are you absolutely, 100% ***SURE*** that you want to uninstall PBSK15? This means all your data (including accounts you've made) will be lost forever.
 set /p second_confirm=Choice (Yes/No):
 if "!first_confirm!"=="Yes" goto remove_apps_list
 if "!first_confirm!"=="No" exit
 echo Please enter a valid choice.
 goto second_confirm



 :remove_apps_list
 reg delete "HKLM\SOFTWARE\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\PBSK15" >nul 2>&1
 rmdir /s /q "%programdata%\Microsoft\Windows\Start Menu\Programs\PBSK15\"
 del %public%\Desktop\PBSK15.lnk



 :del_pbsk15
 echo.
 echo.
 echo Goodbye, cruel world. Deleting files...
 rmdir /s /q %programfiles(x86)%\PBSK15