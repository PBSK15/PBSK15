#include <iostream>
#include <windows.h>
#include <fstream>
#include <stdio.h>
#include <string>
using namespace std;






// We use this wrapper program because it allows it to gray out the X button on the window to
// prevent the user from closing it without typing the command "stop" first (if it's not done like this, 
// then errors will happen relating to the hosts file and the server processes will not be closed out), detect if 
// an instance of PBSK15 is already running (and notify the user promptly), and also
// allows the desktop shortcut to the PBSK15 program to have the icon.


LPCSTR mainScriptName = "PBSK15.bat";
LPCSTR updaterScriptName = "Updater.bat";
LPCSTR repairScriptName = "FixHosts.bat";

string lockFileNameSuffix = "/PBSK15.lock";
string updaterLockFileNameSuffix = "/PBSK15_updater.lock";



ifstream lockFile;
string lockFileName;
string updaterLockFileName;


string getExePath()
{
	char buffer[MAX_PATH];
	GetModuleFileNameA(NULL, buffer, MAX_PATH);
	string::size_type pos = string(buffer).find_last_of("\\/");
	
	return string(buffer).substr(0, pos);
}



void execPBSK15Process(LPCSTR processName) {
	
	STARTUPINFO si;
	PROCESS_INFORMATION pi;
	
	ZeroMemory( &si, sizeof(si) );
	si.cb = sizeof(si);
	ZeroMemory( &pi, sizeof(pi) );
	
	
	
	CreateProcess((getExePath() + "/" + processName).c_str(), NULL, NULL, NULL, FALSE, 0, NULL, NULL, &si, &pi);
	WaitForSingleObject(pi.hProcess, INFINITE);
	
}

void execSeparatePBSK15Process(LPCSTR processName) {
	ShellExecute(NULL, "open", (getExePath() + "/" + processName).c_str(), NULL, NULL, SW_SHOWNORMAL);
}



// Returns true if the initialization succeeds, returns false otherwise (such as if there's already an instance of PBSK15 running).
bool initInstance() {
	
	lockFileName = (getExePath() + lockFileNameSuffix);
	ifstream lockFile(lockFileName, ifstream::in);
	if (lockFile.good()) {
		
		int repairBoxInput = MessageBox(
			NULL,
			"An instance of PBSK15 is already running. You must\nclose that instance first before opening a new one.\n\nIf PBSK15 crashed and/or you're sure an instance isn't already running and you're receiving this error message, run \"PBSK15 \nRepair\" by clicking \"OK\".",
			"PBSK15 Already Running",
			MB_ICONWARNING | MB_OKCANCEL | MB_DEFBUTTON2
		);
		if (repairBoxInput == IDOK) {

			lockFile.close();
			execPBSK15Process(repairScriptName);
			return initInstance();

		}
		return false;
		
	}
	
	
	ofstream lock(lockFileName);
	lock.close();
	
	return true;
	
}



// Returns true if the updater opened, false if the updater didn't open (this is NOT an error handling thing; this is necessary to close out the main process as PBSK15 is updating).
bool initUpdaterInstance() {
	
	updaterLockFileName = (getExePath() + updaterLockFileNameSuffix);
	
	ifstream updaterLockIf(updaterLockFileName, ifstream::in);
	if (!updaterLockIf.good()) {
		
		ofstream updaterLock(updaterLockFileName);
		updaterLock.close();
		
		execSeparatePBSK15Process(updaterScriptName);
		return true;
		
	}
	updaterLockIf.close();
	remove(updaterLockFileName.c_str());
	
	return false;
	
}



int main() {
	

	// I originally had the PBSK15.bat-exe-converted file be the subject of the system/createProcess call
	// in order to, in the event that this wrapper program failed to properly bind the control handlers, it would boot that
	// exe since it had the icon, but screw that. Too much of a hassle to manually update that exe (convert the bat to an exe EVERY TIME)
	// I want to push an update.
	
	// We want to call the updater first since if we run the script normally, and it checks for updates in the middle of the script (and assuming you're running
	// from PBSK15.exe like most people do), it won't properly update the PBSK15.exe files (since they're currently open and cannot be modified), resulting in 
	// serious discrepancies when updating.
	
	if (!initInstance()) {
		return 0;
	}
	if (initUpdaterInstance()) {
		return 0;
	}
	
		
	HWND hwnd = GetConsoleWindow();
	HMENU hmenu = GetSystemMenu(hwnd, FALSE);
	EnableMenuItem(hmenu, SC_CLOSE, MF_GRAYED);

	execPBSK15Process(mainScriptName);
	
	lockFile.close();
	remove(lockFileName.c_str());
		
	return 0;
	
}