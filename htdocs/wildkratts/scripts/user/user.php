<?php


require __DIR__ . '/backend/wkVerification.php';


// warning: dirty xml version node removal
function XMLtoString(SimpleXMLElement $doc) : string {
    return preg_replace( "/<\?xml.+?\?>/", "", $doc->asXML());
}


function saveVista(string $vista) : void {

    // ew ewew ew ew ewew globals??!?!?!!!!?!?!??!??! oh no the world is ending!!!!!!!1 i swear this is the only time ive ever used globals in my whole life
    global $wkDbManager;
    global $wkAcc;
    global $kidsAcc;

    $wkAccVistas = simplexml_load_string($wkAcc["vistas"]);
    if (count($wkAccVistas->xpath("//vista[@name='" . $vista . "']")) > 0) {
        return;
    }

    $vistaData = $wkAccVistas->addChild("vista");
    $vistaData->addAttribute("name", $vista);

    $wkDbManager->updateAccByPBSId($kidsAcc["kid_id"], ["vistas" => XMLtoString($wkAccVistas)]);
    
}
	    


$action = $_POST['action'] ?? $_GET['action'];
$wkAcc = $wkDbManager->getAccByPBSId($kidsAcc["kid_id"]);









switch ($action) {

    case "getUserData":

        $userData = "";
        foreach($wkAcc as $key => $data) {
            if ($key == "avatar" || $key == "kid_id") continue;
            $userData .= $data;
        }

        die("<getUserDataResult success='1'>
        <avatar><![CDATA[" . $wkAcc["avatar"] . "]]></avatar>
        " . $userData . "
        </getUserDataResult>");






    case "saveGame": {

		$gameName = $_POST['game'];	
        $wkAccGames = simplexml_load_string($wkAcc["games"]);
        foreach ($wkAccGames->xpath("//game[@name='" . $gameName . "']") as $node) {
            unset($node[0]);
        }

        $gameData = $wkAccGames->addChild("game");
        $gameData->addAttribute("name", $gameName);
        $gameData->addAttribute("level", $_POST['level']);


        $wkDbManager->updateAccByPBSId($kidsAcc["kid_id"], ["games" => XMLtoString($wkAccGames)]);


        if ($_POST['level'] == '6') {
            switch ($gameName) {

                case "firefly":
                case "aardvark":
                case "crocodile":
                case "frogfish":
                case "hummingbird":
                case "spider":
                case "dolphin":
				case "snake":
                    saveVista($gameName . "_face");
                    break;

            }
        }


        break;

    }




    
    case "saveCPS": {

        $cps = $_POST['cps'];
        $wkAccCPS = simplexml_load_string($wkAcc["cps"]);
        if (count($wkAccCPS->xpath("//cp[@name='" . $cps . "']")) > 0) {
            break;
        }

        $cpsData = $wkAccCPS->addChild("cp");
        $cpsData->addAttribute("name", $cps);

        $wkDbManager->updateAccByPBSId($kidsAcc["kid_id"], ["cps" => XMLtoString($wkAccCPS)]);
        break;

    }

    
    case "saveVista":
        saveVista($_POST['vista']);
        break;
    case "saveAvatar":
        $wkDbManager->updateAccByPBSId($kidsAcc["kid_id"], ["avatar" => $_POST['avatarData']]);
        break;
    


}



?>



