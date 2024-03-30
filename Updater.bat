:: no more annoying command outputs
@echo off && cls
SETLOCAL ENABLEDELAYEDEXPANSION

title PBSK15 Updater


:: The updater should function as both a standalone application and part of the main PBSK15 script.







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





:: Ensure that the updater is running in the correct directory.
pushd "%~dp0"
if !errorlevel! NEQ 0 goto error_output
if not exist utilities ( goto error_output )
goto continue

:error_output
echo Either the updater is not located in a PBSK15 installation directory, or something is wrong with your installation.
pause && exit /b

:continue
for /f "tokens=*" %%g in ('git --version') do (set git_ver=%%g)
if "!git_ver!" EQU "" (
	echo Git could not be found.
	goto gitmissing
) else (
	echo Git is installed.
	echo:
	goto nogitmissing
)

:nogitmissing
echo ************************
echo ****                ****
echo **** -------------- ****
echo **** PBSK15 Updater ****
echo **** -------------- ****
echo ****                ****
echo ************************
echo:
goto update_confirm



:gitmissing
echo.
set /p git_decision=The Git module is required to update PBSK15. Install Git? (Y/N):

if /i "!git_decision!" == "N" (
  echo Closing updater.
  exit /b
)

goto install_git


:install_git
set SYSTEM_TYPE=0
if /i "!processor_architecture!"=="x86" set SYSTEM_TYPE=32
if /i "!processor_architecture!"=="AMD64" set SYSTEM_TYPE=64
if /i "!PROCESSOR_ARCHITEW6432!"=="AMD64" set SYSTEM_TYPE=64

if !SYSTEM_TYPE!==0 (
  echo:
  echo Somehow, the PBSK15 Installer can't tell if you're on a 32-bit or 64-bit system.
  echo What kind of futuristic technology are you using?
  echo The installer will attempt to install the 32-bit version of Git.
  set SYSTEM_TYPE=32
)

if !SYSTEM_TYPE!==32 (
  echo 32-bit system detected. Installing 32-bit version of Git...
  if not exist "git_install.exe" (
    powershell -Command "Invoke-WebRequest https://github.com/git-for-windows/git/releases/download/v2.39.0.windows.1/Git-2.39.0-32-bit.exe -OutFile git_install.exe"
  )
)

if !SYSTEM_TYPE!==64 (
  echo 64-bit system detected. Installing 64-bit version of Git...
  if not exist "git_install.exe" (
    powershell -Command "Invoke-WebRequest https://github.com/git-for-windows/git/releases/download/v2.39.0.windows.1/Git-2.39.0-64-bit.exe -OutFile git_install.exe"
  )
)

call git_install.exe /SILENT /PathOption=CmdTools
del git_install.exe
echo Git has been installed.

goto update_confirm








:: Check for updates.
:update_confirm
pushd "%~dp0"
if not exist .git (
  if not exist PBSK15.git (
	echo .git folder missing. Downloading .git...
	
	if exist updater_tmp ( rmdir /s /q updater_tmp )
	mkdir updater_tmp
	cd updater_tmp
	git clone https://github.com/PBSK15/PBSK15 --bare
	ren PBSK15.git .git
	git init
	cd ..
	:: It is my belief that the move command in Windows is genuinely one of the worst things to EVER exist in command lines.
	:: move /y updater_tmp/.git .
	robocopy updater_tmp/.git ./.git /E /DCOPY:DAT /MOVE >nul
	
  ) else (
	ren PBSK15.git .git
  )
)
git pull
echo:
echo PBSK15 is updated^^!
echo.
echo.
echo.
if exist "PBSK15.lock" ( 
	del "PBSK15.lock"
	type NUL > "PBSK15_updater.lock"
	start PBSK15.exe
)
exit /b