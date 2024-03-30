@echo off
title PBSK15 Repair


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





SETLOCAL ENABLEDELAYEDEXPANSION





echo ################################################################
echo #########                                              #########
echo #########                                              #########
echo #########       --------------------------------       #########
echo #########            PBSK15 Repair                     #########
echo #########       --------------------------------       #########
echo #########                                              #########
echo #########                                              #########
echo ################################################################



echo USE THIS ONLY WHEN YOU CLOSE THE PBSK15 CONSOLE INSTEAD OF TYPING "STOP".
timeout 3 > nul


if exist "PBSK15.lock" (
	del "PBSK15.lock"
	echo.
	echo.
	echo Deleted PBSK15.lock file.
)
	
	
	
	
	
	

FIND /C /I "pbskids.org" %WINDIR%\system32\drivers\etc\hosts > nul
IF %ERRORLEVEL% NEQ 1 goto repair_prompt
echo.
echo No need to repair hosts file. Closing.
timeout 2 > nul
exit /b



:repair_prompt
echo "pbskids.org" found in hosts file. As is, you won't be able to access the current PBS Kids site.
echo.
echo.
set /p repair=Repair hosts file^? (Y/N):
if /i "!repair!" == "Y" goto repair
if /i "!repair!" == "N" ( exit /b )
echo Invalid input.
goto repair_prompt



:repair

if not exist tmp (
	Powershell.exe -executionpolicy remotesigned -File  utilities/removeHost.ps1
) else (
	move /Y tmp\hosts %WINDIR%\system32\drivers\etc\hosts > nul
)
echo Repaired hosts file.
timeout 2 > nul
exit /b