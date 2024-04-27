# PBSK15
<p align="center">
  <img src="https://pbsk15.github.io/pbsk15-repo-assets/pbsk15_logo.png" alt="PBSK15 logo"/>
</p>

PBSK15 aims to be a recreation of the 2015 version of the PBS Kids site. At its core, it is a webserver designed to run on a user's computer, allowing it to truly be a near perfect recreation of the original site.

The main difference between PBSK15 and other projects such as [Flashpoint Archive](https://flashpointarchive.org), is that, because PBSK15 is its own widespanning webserver packed with additional utilities such as MySQL, you can ***create accounts.*** This is the primary perk of PBSK15; it allows you to truly relive the original experience of being on the site, both with all the original pages preserved, certain interactive games being playable (unlike other projects), and interactive account features. This allows you to truly relive the experience of, say, the Wild Kratts microsite (for context, the site allowed you to create your own avatar/profile, earn Creature Power Disks, and explore habitats with your avatar).

***THIS PROJECT IS STILL EARLY IN DEVELOPMENT, SO DON'T EXPECT A FULLY FINISHED/WORKING PRODUCT. IF YOU HAVE ANY ISSUES WITH THE PROGRAM, PLEASE OPEN AN ISSUE ON THIS GITHUB REPOSITORY.***

***This project currently only supports Windows. (It may work on Wine on Linux, but this is untested).***

## Installation
You may either download PBSK15 and have it act as a fully portable installation, or you may install it on your computer. If you would like to download PBSK15 as a portable installation, it is **HIGHLY** recommended to use Git to clone the repository to a specific directory (download and install [Git](https://git-scm.com/download/win), navigate to a particular directory via Command Prompt, and input the command `git clone https://github.com/PBSK15/PBSK15`) in order to receive updates. However, if you have half a brain and/or have no idea what Git is, then just download it normally. PBSK15's updater will take care of it for you (with a potential margin for error, so proceed with caution).

However, if you would like to install it, please navigate to the releases on the right to download the installer and install it. Do NOT download the repository normally (i.e. via browser).

## Contributing
If you would like to contribute, there is currently only one real way to do so (and that is to work on the code/website itself, as the project has just been released and things are still being sorted out.

To contribute to the website, you will need:
- Knowledge in web development (both frontend (HTML, CSS, JS) and backend (PHP and SQL))
- Familarity and knowledge about the PBS Kids website itself
- Basic knowledge of how to use a command line,
- Basic knowledge of how to use Git and GitHub (to open pull requests containing your changes (since that is the only means of contribution in this regard))
 
There are a few official tools (that are actually used in the development of this project) that you can use to help you out with the more tedious parts of the process (i.e. adding new files to the website):
- **[PBSK15TemplateBuilder](https://github.com/PBSK15/PBSK15TemplateBuilder)**: A tool that automatically builds Twig templates for any given microsite.
- **[PBSK15AssetDownloader](https://github.com/PBSK15/PBSK15AssetDownloader)**: A tool that automatically downloads assets like SWF, CSS, and JS files (to name a few) from multiple sources (i.e. Wayback Machine, r53-vip-soup, etc.) to the webserver, maintaining the original file structure.


## FAQ
<details>
<summary><b>Why is PBSK15 so big?</b></summary>
PBSK15 is big because the PBS Kids website itself is very large. We're currently working on a solution to selectively install specific sections of the PBS Kids website for PBSK15, so that if you just want the Wild Kratts microsite for instance, you don't need to download every other part of the PBS Kids website in the process.
</details>

<details>
<summary><b>Why doesn't PBSK15 have [a particular] microsite?</b></summary>
This may seem like a super-obvious question to put in FAQ, but someone's inevitably going to ask it, probably because they've never read more than a few sentences in their life. It has literally been said above that the project is <b><i>in development</i></b>, so do <b><i>NOT</i></b> expect a completely finished project. 
</details>

<details>
<summary><b>Will PBSK15 support other versions/years of the PBS Kids website?</b></summary>
As the name implies, no, it will not. If you want other versions of the PBS Kids website, then check out alternatives like <a href="https://nostalgiakidssites.com">nostalgiakidssites.com</a>. However, PBSK15 will contain old sections of the PBS Kids website, as those still existed on the official website in 2015.
</details>

<details>
<summary><b>PBSK15 isn't working! What do I do?</b></summary>
Open an issue <a href="https://github.com/PBSK15/PBSK15/issues">here</a> describing everything about the error, from the circumstances of the situtaion to any error logs.
</details>

<details>
<summary><b>Why can't I access <a href="https://pbskids.org">pbskids.org</a> after closing PBSK15?</b></summary>
Somehow, even with all the protections put in place to prevent you from closing it like you would any other program, you managed to do it in that way (i.e. clicking the X button at the top right of the window). Run PBSK15 Repair (you can type it in the Windows search bar to find it) to resolve the issue. You may need to restart your main browser afterwards.
</details>

<details>
<summary><b>Why are all the leaderboards and features involving other users/multiplayer non-functioning?</b></summary>
PBSK15 is a program serving you an <i>offline copy</i> of the 2015 PBS Kids website, meaning that you're not really connecting to any webserver hosted online, and thus you can't do anything with other users. It's *all* hosted on your computer.
</details>

<details>
<summary><b>Why do Flash games look glitchy?</b></summary>
This happens if you have an NVIDIA GPU. It's an issue with Basilisk, the browser used in PBSK15 and how it runs plugins (like Flash). We're currently working to fix this.
</details>

<details>
<summary><b>Why can't I run Skype (and other certain programs) along with PBSK15?</b></summary>
This is because Skype and every other program that PBSK15 shuts down interferes with the way PBSK15 hosts the website. In technical terms, these programs consume the 80 and 443 ports, which PBSK15 requires to operate the webserver, and for the browser to be flawlessly compatible with navigating it.
</details>

<details>
<summary><b>Is there a Discord server or other platform to communicate?</b></summary>
Not right now, no. There will likely be one soon, but as the project has just been released, there isn't currently a real community centered around this project.
</details>

## Notes
If you are planning to take this recreation of the 2015 PBS Kids website and host it yourself on your website, please do <b>NOT</b> do so, as it is <b>NOT</b> meant for public consumption. Not only will most of the website not even load (due to CORS), but there are various security vulnerabilities in the website itself. It does contain password hashing, but it has an open MySQL database, among other vulnerabilities that are not listed here.


## Current Microsite Support
* <b>Angelina Ballerina</b>: ✅
* <b>Arthur</b>: ✅
* <b>Barney</b>: ✅
* <b>Between the Lions</b>: ❌
* <b>Caillou</b>: ✅
* <b>Cat in the Hat</b>: ⌛
* <b>Chuck Vanderchuck's "Something Something" Explosion</b>: ✅
* <b>Clifford the Big Red Dog</b>: ❌
* <b>Curious George</b>: ✅
* <b>Cyberchase</b>: ✅
* <b>Daniel Tiger's Neighborhood</b>: ✅
* <b>The Democracy Project</b>: ❌
* <b>Design Squad</b>: ❌
* <b>Dinosaur Train</b>: ✅
* <b>DragonFlyTV</b>: ❌
* <b>Eekoworld</b>: ✅
* <b>The Electric Company</b>: ❌
* <b>Fetch! with Ruff Ruffman</b>: ❌
* <b>Fizzy's Lunch Lab</b>: ⌛
* <b>The Greens</b>: ❌
* <b>It's My Life</b>: ❌
* <b>Lomax: The Hound of Music</b>: ✅
* <b>Mama Mirabelle's Home Movies</b>: ❌
* <b>Martha Speaks</b>: ⌛
* <b>Maya & Miguel</b>: ❌
* <b>Mister Rogers' Neighborhood</b>: ❌
* <b>Odd Squad</b>: ✅
* <b>Oh Noah!</b>: ⌛
* <b>Peg + Cat</b>: ❌
* <b>Plum Landing</b>: ⌛
* <b>Postcards from Buster</b>: ❌
* <b>SciGirls</b>: ❌
* <b>Sesame Street</b>: ❌
* <b>Sid the Science Kid</b>: ✅
* <b>Super Why!</b>: ✅
* <b>Thomas & Friends</b>: ❌
* <b>Webonauts</b>: ✅
* <b>Wild Kratts</b>: ✅
* <b>Wilson and Ditch</b>: ❌
* <b>WordGirl</b>: ✅
* <b>WordWorld</b>: ✅
* <b>Zoom</b>: ❌
* <b>Miscellaneous</b>: ???