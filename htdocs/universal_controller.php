<?php


// Handle redirects here instead of .htaccess due to some weird bug where using the Redirect directive
// in .htaccess causes the url parameter of theoriginal URL to be passed onto the final URL. 
// I don't feel like wasting hours trying to fix that issue and I think it's more intuitive to do it here anyways.















require 'vendor/autoload.php';

use Twig\Environment;
use Twig\Loader\FilesystemLoader;



class PageLoader {
    private $twigEnv;
    
    public function __construct($twig) {
        $this->twigEnv = $twig;
    }
    
    public function loadTwigTemplate($path) {
        die($this->twigEnv->render($path));
    }
    
    public function loadFile($url) {
        $this->includeUrl($url);
        die();
    }
    
    public function loadPHP($url) {
        $this->includeUrl($url);
        die();
    }

    private function includeUrl($url) {
        if (!file_exists($url)) {
            render404Page($url);
        }
        // assign variable $twig so that the included url (i.e. a php script) can use it
        $twig = $this->twigEnv;
        include $url;
    }
}


$loader = new PageLoader(new Environment(
								new FilesystemLoader(__DIR__)/*, 
								[
									"cache" => substr(getenv("PBSK15_ROOT"), 0, -1) . "/cache/twig",
									"auto_reload" => true
								]*/
							)
						);






$url = $_GET['url'];
// url fix methods
if ($url[0] == '/') {
    $url = substr($url, 1);
}
$rootSubdir = strtok(ltrim($url, '/'), '/');





function render404Page($urlParam) {

    // ew globals
    global $loader;

    http_response_code(404);
    if (str_starts_with($urlParam, 'curiousgeorge/')) {
        $loader->loadTwigTemplate('curiousgeorge/404.html.twig');
    }
    if (str_starts_with($urlParam, 'cyberchase/')) {
        $loader->loadTwigTemplate('cyberchase/404.html.twig');
    }
    $loader->loadFile('whoops.html');

}


function redirect($target) {
    http_response_code(301);
    header("Location: $target");
    die();
}






// for some urls it's illogical to load a twig template
$loadAsHtml = [
    'arthur/games/wheresbuster/abbrevs.html',
    'catinthehat/content.html',
    'catinthehat/games/content.html',
    'wildkratts/games/animal-match/mem.html',
    'wildkratts/games/photoshoot/shoot.html',
    'wildkratts/games/capture-the-fishmobiles/fishMobiles.html',
    'wildkratts/games/rhino-bowl/rhinoBowl.html',
    'lions/games/quietmachine.html',
    'lions/games/nightshift.html'
];

$loadDirsAsHtml = [
    'pbs-kids-headband/',
    'js/pikachu/templates/',
    'barney/',
    'wordgirl/inc/',
    'daniel/coloring/activity/',
    'dinosaurtrain/feed/',
    'wordworld/characters/',
    'cyberchase/media/',
    'cyberchase/learning-pathways/'
];

$loadDirsAsHtmlOrTwig = [
    'lunchlab/',
    'superwhy/',
    'wildkratts/'
];



foreach ($loadAsHtml as &$HtmlUrl) {
    if ($HtmlUrl != $url) continue;
    $loader->loadFile($url);
}


foreach ($loadDirsAsHtml as &$dirPrefix) {
    if (!str_starts_with($url, $dirPrefix)) continue;
    $loader->loadFile($url);
}

foreach($loadDirsAsHtmlOrTwig as &$dirPrefix) {
    if (!str_starts_with($url, $dirPrefix)) continue;
    if (!str_ends_with($url, ".html")) continue;
    if (str_ends_with($url, "index.html")) continue;
    $loader->loadFile($url);
}



















$urlPath = substr((dirname(parse_url("https://pbskids.org/".$url)['path'])), 1);
$urlPathSlash = $urlPath . "/";

if ((file_exists($urlPath . 'index.php') || file_exists($urlPathSlash . 'index.php')) && str_ends_with($url, "index.html")) {
    $loader->loadPHP(str_replace("index.html", "", $url) . "index.php");
}
if (str_ends_with($url, ".php")) {
    $loader->loadPHP($url);
}





// prevent the url parameter from being passed to the template
unset($_GET['url']);

$queryString = "?";
// pass query string parameters to the twig template
foreach($_GET as &$query) {
    $queryString .= ("$query&");
}


if (str_starts_with($url, "pbsk/video/api")) {
    $loader->loadFile(str_replace("index.html", "", $url) . "index.php" . $queryString);
}

//check if file exists
// prioritize php files over twig templates
if (file_exists($url . '.php')) {
    $loader->loadPHP($url . '.php');
}
if (file_exists($url . '.twig')) {
    $loader->loadTwigTemplate($url . '.twig');
}
render404Page($url);



?>