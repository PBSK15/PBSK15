@echo off && cls

set version=1.0.0
title PBSK15 [v%version%]

set legacyHosts="false"
set restart="false"

set PBSK15_ROOT=%~dp0



:: Constants
set settingDirPrefix="settings"


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
 
 
 
 


 
 
:: Kill any processes that may interfere with the web server and the proxy (hosts file redirection).
taskkill /f /im httpd.exe
taskkill /f /im mysqld.exe
taskkill /f /im php.exe
taskkill /f /im skype.exe
taskkill /f /im vmware.exe
taskkill /f /im psiphon3.exe
taskkill /f /im psiphon.exe
taskkill /f /im psiphon-tunnel-core.exe
taskkill /f /im Flashpoint.exe
taskkill /f /im xampp-control.exe
taskkill /f /im xampp_start.exe
taskkill /f /im xampp_stop.exe


echo.
echo.
echo.
echo Overriding proxy settings...
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyOverride /f >nul 2>&1
reg delete "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyServer /f >nul 2>&1
reg add "HKCU\Software\Microsoft\Windows\CurrentVersion\Internet Settings" /v ProxyEnable /t REG_DWORD /d 0 /f > nul
echo Proxy settings overriden.
 
 
 
 
 
 
 
 
 
 
 
 
 
 

:: Local variable scope
SETLOCAL ENABLEDELAYEDEXPANSION








:: Ensure that the script is running in a PBSK15 installation directory.
pushd "%~dp0"
if !errorlevel! NEQ 0 goto throw_error
if not exist htdocs ( goto throw_error )
if not exist utilities ( goto throw_error )
goto check_hosts






:throw_error
echo Either this script is not running in a PBSK15 installation directory or something's wrong with it. A reinstallation may be necessary.
pause && exit




:check_hosts
FIND /C /I "pbskids.org" %WINDIR%\system32\drivers\etc\hosts > nul
IF %ERRORLEVEL% NEQ 1 (
	echo.
	echo.
	call FixHosts.bat
)
goto check_dependencies



:check_dependencies
echo Checking dependencies...
if not exist %WINDIR%\system32\vcruntime140.dll (
	echo Microsoft Visual C^+^+ Redistributable not found. Opening setup file for this dependency in 3 seconds...
	start /b dependencies\VC_redist.x86.exe
	goto dependency_lock
)
goto continue


:dependency_lock
set /p installed_dep=Press Enter when you've installed the dependency prompted for.
goto check_dependencies






:continue
if not exist PBSK15.lock ( call Updater.bat )
title PBSK15 [v%version%]
echo ###########################################################################
echo ########                                                           ########
echo ########                                                           ########
echo ########                                                           ########
echo ########                                                           ########
echo ########  -------------------------------------------------------  ########
echo ########             _____  ____   _____ _  ____ _____             ########
echo ########             ^|  __ \^|  _ \ / ____^| ^|/ /_ ^| ____^|           ########
echo ########             ^| ^|__) ^| ^|_) ^| (___ ^| ' / ^| ^| ^|__             ########
echo ########             ^|  ___/^|  _ ^< \___ \^|  ^<  ^| ^|___ \            ########
echo ########             ^| ^|    ^| ^|_) ^|____) ^| . \ ^| ^|___) ^|           ########
echo ########             ^|_^|    ^|____/^|_____/^|_^|\_\^|_^|____/            ########
echo ########                                                           ########
echo ########  -------------------------------------------------------  ########
echo ########                                                           ########
echo ########                                                           ########
echo ########                                                           ########
echo ########                                                           ########
echo ###########################################################################
                                    

echo.
echo.
echo.
echo Setting up local webserver...
:: We can't call it here because running httpd.exe from the command line will prevent any further commands from being executed unless the user does CTRL+C, in which the average user won't know to do that.
:: The reason we're starting httpd here instead of xampp_start is so that we can launch it with the -D flag and specify the root directory of the PBSK15 installation. It also boots up infinitely faster than XAMPP.
:: Plus, because Apache's config uses relative paths, PBSK15 can support 32-bit and 64-bit systems, and be fully portable at the same time.
:: (32-bit only has Program Files, whereas 64-bit uses Program Files (x86) for 32-bit programs).
set CPU_ARCHITECTURE=0
	if /i "!processor_architecture!"=="x86" set CPU_ARCHITECTURE=32
	if /i "!processor_architecture!"=="AMD64" set CPU_ARCHITECTURE=64
	if /i "!PROCESSOR_ARCHITEW6432!"=="AMD64" set CPU_ARCHITECTURE=64


if !CPU_ARCHITECTURE!==32 (
  start /b utilities\XAMPP\apache32\bin\httpd.exe -D "!PBSK15_ROOT!"
)
if !CPU_ARCHITECTURE!==64 (
  start /b utilities\XAMPP\apache\bin\httpd.exe -D "!PBSK15_ROOT!"
)
if !CPU_ARCHITECTURE!==0 (
  start /b utilities\XAMPP\apache32\bin\httpd.exe -D "!PBSK15_ROOT!"
)











::call utilities\XAMPP\xampp_start.exe >nul 2>&1




:: This is to make the script wait for the server to finish booting up. If it doesn't have this check, there's a possibility that Basilisk will error out when connecting to pbskids.org before the server is up.
:: Because the coordination of loading Basilisk is inherently reliant on performance (and is thus unreliable), not including this check may cause the user to have a worse experience and/or mistakenly think the program is not working correctly.
:check_server
set output=""
FOR /F "tokens=*" %%i IN ('netstat -a -n -o') DO set output=%output%%%i



echo Creating necessary data, temporary, and logging directories...
if not exist utilities\XAMPP\apache\logs ( mkdir utilities\XAMPP\apache\logs )
if not exist utilities\XAMPP\tmp ( mkdir utilities\XAMPP\tmp )
echo.
echo.



echo Local webserver running^^!
echo.
echo.
echo.
echo Starting MySQL...
:: start /b utilities\XAMPP\mysql\bin\mysqld.exe --defaults-file=utilities\XAMPP\mysql\bin\my.ini --basedir "!PBSK15_ROOT!/utilities/XAMPP/mysql/" --datadir="!PBSK15_ROOT!/utilities/XAMPP/mysql/data/" > nul
call :start_mysql
:: --basedir "!PBSK15_ROOT!/utilities/XAMPP/mysql/" --datadir="!PBSK15_ROOT!/utilities/XAMPP/mysql/data/" --initialize-insecure=ON --standalone
echo Started MySQL^^!
echo.
echo.
echo.
echo Tunneling pbskids.org onto local webserver...


if exist tmp ( rmdir /s /q tmp )
mkdir tmp

if not exist hosts\hosts ( goto add_hosts )
if not exist hosts\default_hosts ( goto add_hosts )
  


:: For some STUPID, INCOMPREHENSIBLE, UNGODLY, UNHOLY, HELLISH reason, xcopy commands involving the hosts file don't work when you run a batch script
:: (or at least this one) in a C++ program (BUT WORK WHEN YOU RUN THE BATCH SCRIPT ITSELF??!?!?!?!!!?!?!?), so I just resorted to using the normal copy and ren commands.
if not exist %WINDIR%\system32\drivers\etc\hosts (
	:: xcopy /s /y /f /k hosts\default_hosts %WINDIR%\system32\drivers\etc\hosts* > nul
	copy hosts\default_hosts %WINDIR%\system32\drivers\etc\ > nul
	ren "%WINDIR%\system32\drivers\etc\default_hosts" "hosts" > nul
)

move /Y %WINDIR%\system32\drivers\etc\hosts tmp\hosts > nul
:: xcopy /s /y /f /k hosts\hosts %WINDIR%\system32\drivers\etc\hosts* > nul
copy hosts\hosts %WINDIR%\system32\drivers\etc\ > nul




::echo Adding certificate for custom pbskids.org site to Trusted Root Certification Authorities...
::powershell.exe -Command "Import-Certificate -FilePath '%PBSK15_ROOT%/utilities/XAMPP/apache/crt/pbskids/server.crt' -CertStoreLocation Cert:\LocalMachine\Root"




goto load_basilisk







:add_hosts
echo The "hosts" and/or "default_hosts" file is missing in the "hosts" directory of the PBSK15 installation directory. A reinstallation may be necessary. Using alternate method... (WHICH IS HIGHLY PRONE TO ERROR!)
set legacyHosts="true"
SET NEWLINE=^& echo.

FIND /C /I "pbskids.org" %WINDIR%\system32\drivers\etc\hosts > nul
IF %ERRORLEVEL% NEQ 0 ECHO %NEWLINE%>>%WINDIR%\system32\drivers\etc\hosts
IF %ERRORLEVEL% NEQ 0 ECHO 127.0.0.1 pbskids.org>>%WINDIR%\System32\drivers\etc\hosts


echo Modified hosts file.
echo.
echo.
echo.




goto load_basilisk



:load_basilisk
echo.
echo.
echo.
echo Starting Basilisk...
start utilities\BasiliskPortable\Basilisk-Portable.exe
echo Started Basilisk.
echo.
echo.
echo #########################################################
echo # ----------------------------------------------------- #
echo #                   PBSK15 initialized^^!                 #
echo # ----------------------------------------------------- #
echo #########################################################
echo.
echo.
echo.
echo.
echo.
echo **KEEP THIS OPEN** to keep PBSK15 running.
echo.
echo.
echo.
echo.
goto pbsk15_info




:pbsk15_info
echo.
echo.
echo Type a command. List of commands:
echo "basilisk" - Reboots Basilisk. Useful if you accidentally close the browser.
echo "clear" - Clears the console.
echo "restart_server" - Restarts the *webserver*, not PBSK15, the host program.
echo "restart" - Restarts PBSK15.
echo "backup" - Backs up PBSK15 data.
echo "restore" - Restores backed up PBSK15 data.
echo "settings" - Enables you to modify PBSK15 settings. (NOT CURRENTLY SUPPORTED)
echo "stop" - Stops PBSK15.
echo.
echo "When you want PBSK15 to stop, ***USE THE COMMAND. DO NOT CLOSE THE WINDOW*** or else you won't be able to access the current site afterwards."
echo.
goto pbsk15_command



:pbsk15_command
set /p command="Command:"
if /i "!command!"=="stop" (
	goto stop_pbsk15
)
if /i "!command!"=="basilisk" (
	start utilities\BasiliskPortable\Basilisk-Portable.exe
	goto pbsk15_command
)
if /i "!command!"=="restart_server" (
  echo.
  echo.
  echo Stopping Apache...
  taskkill /F /IM httpd.exe >nul 2>&1
  echo Starting Apache...
  start /b utilities\XAMPP\apache\bin\httpd.exe -D "!PBSK15_ROOT!"
  
  :check_server_2
  netstat -a -n -o | find "httpd"
  if %errorlevel% equ 1 ( goto check_server_2 )
  
  echo Restarted Apache.
  goto pbsk15_command

)
if /i "!command!"=="restart" (
  set restart="true"
  goto stop_pbsk15
)
if /i "!command!"=="clear" (
  cls
  goto pbsk15_info
)
if /i "!command!"=="backup" (
	goto backup
)
if /i "!command!"=="restore" (
	goto restore_backup_init
)





	


echo Invalid command.
timeout 2 > nul
goto pbsk15_command







:stop_pbsk15

:: Kill processes opened by the script so we can close PBSK15.
echo Removing pbskids.org from hosts file...

if !legacyHosts!=="true" (
	Powershell.exe -executionpolicy remotesigned -File  utilities/removeHost.ps1
) else (
	move /Y tmp\hosts %WINDIR%\system32\drivers\etc\hosts > nul
)

echo.
echo.
echo Shutting down local server...
taskkill /f /im httpd.exe
taskkill /f /im mysqld.exe
taskkill /f /im php.exe
echo.
echo.
echo Closing Basilisk...
taskkill /f /im basilisk.exe
echo.
echo.
echo Cleaning temporary files...
rmdir /s /q tmp
rmdir /s /q updater_tmp
if /i "!restart!"=="true" (
  if exist "PBSK15.lock" (
	start PBSK15.exe
  ) else (
    start PBSK15.bat
  )
  timeout 1 > nul
)
exit














:backup
set /p backup_folder="Please specify the ABSOLUTE path to which folder you would PBSK15 to save the backup to (leave blank for it to back up to your Documents folder):"
if /i "!backup_folder!"=="" (
  :: TODO: Dynamic document folder support from registry, it would work if it weren't for file path string weirdness in Batch. In particular, the line 3 lines down which is designed to convert the string to an actual file path, doesn't work due to a syntax error (NOT the spaces in the percent signs, nor the fact that doc_folder_reg is not wrapped in exclamation points, double quotation marks, and parentheses (respectively from the inside), as that's to prevent this shitty "language" from interpreting it). I'm just going to disregard it for now as I just want to finally publicly release PBSK15 after over 1.5 years.
  for /f "tokens=3 delims= " %%i in ('Reg Query "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders" /v "Personal" 2^>Nul') do Set "doc_folder_reg=%%i"
  :: if defined doc_folder_reg (
	:: for % % j in doc_folder_reg do set backup_folder=% % ~nxj
	:: set backup_folder=!doc_folder_reg!
  :: ) else (
	:: set backup_folder="!userprofile!"\Documents
  :: )
  set backup_folder="!userprofile!"\Documents
)
  
  
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (set mydate=%%c-%%a-%%b)
for /f "tokens=1-2 delims=/:" %%a in ('time /t') do (set mytime=%%a%%b)

if not exist %backup_folder%\PBSK15 ( mkdir %backup_folder%\PBSK15 )
utilities\7za a %backup_folder%\PBSK15\"!mydate!_!mytime!.zip" utilities\XAMPP\mysql\data  
echo.
echo.
echo.
echo.
echo.
echo Backed up PBSK15 data.
goto pbsk15_info








:restore_backup_init
set /p warning="WARNING: This WILL delete ALL of your CURRENT PBSK15 data. Would you like to continue? (Y/N):"
if /i "!warning!"=="y" ( goto restore_backup )
if /i "!warning!"=="n" ( goto pbsk15_command )
echo Invalid input.
timeout 2 > nul
goto restore_backup_init


:restore_backup
set restore_file=""
echo.
echo.
echo.
echo IMPORTANT: Include the ".zip" file extension at the end if a file extension isn't there. Otherwise, the backup process will fail.
echo NOTE: Leave it blank so that PBSK15 can just prompt you for the filename if you would like to restore it from the Documents folder (AKA left the initial prompt to back up data blank):"
set /p restore_file="Please specify the ABSOLUTE path to the BACKUP FILE:"
:: Filter input
set restore_file=%restore_file:"=%
if /i "!restore_file!"=="" (
	set /p restore_file_doc="Please type the filename of the backup:"
	set restore_file="!userprofile!"\Documents\PBSK15\!restore_file_doc!
	timeout 3 > nul
)
echo.
echo.
echo.

:: Reset ERRORLEVEL to track 7-Zip errors
call;
echo Validating backup...
utilities\7za.exe t """!restore_file!"".zip" >nul 2>nul
if %ERRORLEVEL% equ 2 (
	echo Either the backup does not exist, or the backup is corrupt. If the latter is true, I'm sorry for your loss.
	echo Current PBSK15 data has not been deleted.
	timeout 3 > nul
	echo.
	echo.
	echo.
	goto pbsk15_info
)

echo.
echo.
taskkill /f /im mysqld.exe >nul 2>nul
echo Deleting current PBSK15 data...
rmdir /s /q utilities\XAMPP\mysql\data
echo Deleted current PBSK15 data.
echo.
:: Reset ERRORLEVEL to track user actions in 7-Zip, like when a user quits the process
call;
echo Restoring specified backup...
utilities\7za.exe x """!restore_file!"".zip"
echo.
echo.
echo.
echo.
if %ERRORLEVEL% equ 255 (
	echo Backup process ended by the user. Exiting.
	timeout 3 > nul
	echo.
	echo.
	echo.
	goto pbsk15_info
)
echo Restored data^^!
echo.
echo.
echo.
call :start_mysql
goto pbsk15_info




:start_mysql
start /b utilities\XAMPP\mysql\bin\mysqld --defaults-file=utilities\XAMPP\mysql\bin\my.ini --basedir "!PBSK15_ROOT!/utilities/XAMPP/mysql/" --datadir="!PBSK15_ROOT!/utilities/XAMPP/mysql/data/" --standalone >nul 2>nul