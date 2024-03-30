<?php

//https://pbskids.org/wildkratts/scripts/creaturepedia/creaturepedia.php?platform=Web&action=getCreaturesForAnimalFamily&id=3


// These dictionaries associate the legacy IDs for categories to the new IDs used by the new Creaturepedia
// The new IDs are used to identify categories in the database XMLs
$familyDict = [
    "3" => "550",
    "6" => "551",
    "7" => "552",
    "1" => "553",
    "2" => "554",
    "4" => "555",
    "5" => "556"
];
$regionDict = [
    "8" => "797",
    "3" => "801",
    "4" => "803",
    "6" => "800",
    "5" => "798",
    "2" => "796",
    "7" => "799",
    "1" => "802"
];
$habitatDict = [
    "2" => "794",
    "1" => "793",
    "3" => "795"
];



// Support for WK habitats which request legacy creature IDs
$creatureDict = [  
  "20" => "809",
  "21" => "826",
  "22" => "857",
  "23" => "862",
  "24" => "847",
  "25" => "808",
  "26" => "822",
  "27" => "846",
  "28" => "813",
  "29" => "836",
  "30" => "807",
  "32" => "820",
  "33" => "816",
  "34" => "811",
  "35" => "829",
  "36" => "841",
  "37" => "849",
  "38" => "852",
  "39" => "863",
  "40" => "818",
  "41" => "832",
  "42" => "815",
  "43" => "839",
  "44" => "830",
  "45" => "844",
  "46" => "850",
  "47" => "821",
  "48" => "860",
  "49" => "843",
  "50" => "859",
  "51" => "855",
  "53" => "838",
  "54" => "817",
  "55" => "838",
  "56" => "817",
  "58" => "804",
  "69" => "828",
  "70" => "810",
  "72" => "861",
  "73" => "827",
  "74" => "831",
  "75" => "833",
  "77" => "837",
  "80" => "858",
  "81" => "825",
  "82" => "854",
  "83" => "819",
  "84" => "806",
  "87" => "823",
  "88" => "805",
  "89" => "824",
  "90" => "834",
  "92" => "842",
  "93" => "845",
  "94" => "848",
  "95" => "851"
];



$databaseDir = __DIR__ . "/database//";
$creatureSummaryDir = $databaseDir . "/creatureSummary//";
$creatureContentDir = $databaseDir . "/creatureContent//";



function getCreaturesForCategory(array $filenames, string $category, string $categoryId): array {
    $creatures = [];

    foreach ($filenames as $filename) {

        if (!is_file($filename)) {
            continue;
        }

        $fileContents = file_get_contents($filename);
        if (!$fileContents) {
            continue;
        }

        $creatureSummaryDoc = simplexml_load_string($fileContents);
        if (!$creatureSummaryDoc) {
            continue;
        }
        
        processXmlForCategory($creatureSummaryDoc->{$category}, $creatureSummaryDoc->attributes()["id"], $categoryId, $creatures, $fileContents);
    }

    return $creatures;
}



function processXmlForCategory(mixed $element, string $creatureId, string $categoryId, array &$creatures, string $fileContents) {

    $creatureCat = array_values((array) $element);

    foreach ($creatureCat as $cat) {

        // Recursively call the function in case of multiple child nodes
        if (is_array($cat)) {
            processXmlForCategory($cat, $creatureId, $categoryId, $creatures, $fileContents);
            continue;
        }

        $catId = (string) ($cat->attributes()["id"]);
        if ($catId == $categoryId) {
            $creatures[$creatureId] = $fileContents;
        }

        

    }
}
















$action = $_GET['action'];
$creaturepediaRes = "";
$resizeImages = true;
// if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but if you're nesting then nest but 
if (str_starts_with($action, "getCreaturesFor")) {




switch($_GET['action']) {

    case "getCreaturesForAnimalFamily":
        $catName = "families";
        $catId = $familyDict[$_GET['id']];
        break;
    case "getCreaturesForRegion":
        $catName = "regions";
        $catId = $regionDict[$_GET['id']];
        break;
    case "getCreaturesForHabitat":
        $catName = "habitats";
        $catId = $habitatDict[$_GET['id']];
        break;
        
        

}
$catData = json_decode(file_get_contents("$databaseDir/$catName//$catId.json"));
$resultsData = getCreaturesForCategory(glob($creatureSummaryDir . '/*'), $catName, $catId);


$creaturepediaRes = ('<description>
<![CDATA[' . $catData->name . ']]>
</description>
<result count="' . strval(count(array_keys($resultsData))) . '">
' . implode("", array_values($resultsData)) . '
</result>');






}


else if ($action == "getCreatureById") {







$id = array_key_exists($_GET['id'], $creatureDict) ? $creatureDict[$_GET['id']] : $_GET['id'];


$creatureSummary = file_get_contents("$creatureSummaryDir//$id.xml");
$creatureContent = file_get_contents("$creatureContentDir//$id.xml");
$creaturepediaRes .= "<creature id=\"$id\">$creatureSummary$creatureContent</creature>";



$related = "";
$relatedArr = explode(",", $_GET['related']);
foreach ($relatedArr as $creatureId) {
    if (!intval($creatureId) > 0) continue;
    $related .= file_get_contents("$creatureSummaryDir//" . $creatureId . ".xml");
}
$creaturepediaRes .= "<related>$related</related>";

// don't resize the images used in the creature info because it makes it extremely low quality
$resizeImages = false;






}

else if ($action == "getRandomCreatures") {










$allCreatures = scandir($creatureSummaryDir);
$creatureAmount = intval($_GET['count']);

$creatureIDs = [];
while (count($creatureIDs) < $creatureAmount) {
    shuffle($allCreatures);
    $creatureIDs = array_slice($allCreatures, 0, $creatureAmount);
    $creatureIDs = array_unique($creatureIDs);
}


$creatures = "";
foreach($creatureIDs as $creature) {
    // .xml is in $creature since the array consists of the filenames, not the IDs
    $creatures .= file_get_contents("$creatureSummaryDir//" . $creature);
}



$creaturepediaRes = "<result count=\"" . $_GET['count'] . "\">$creatures</result>";
$resizeImages = false;











}

















die("<?xml version=\"1.0\" encoding=\"iso-8859-1\" ?>
<creaturepediaResponse action=\"" . $_GET['action'] . "\" apiRoot=\"http://www.pbskids.org\" " . 

($resizeImages ? "imageResizerPath=\"/wildkratts/scripts/creaturepedia/slir/\" imageResizerArguments=\"w{width}-h{height}\"" : "") . ">

	$creaturepediaRes


</creaturepediaResponse>");
