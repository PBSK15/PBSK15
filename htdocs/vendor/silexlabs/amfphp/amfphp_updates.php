<?php
/*

Script: amfphp_updates.php
The script gives updates about amfphp and implements a tracing logic of incoming requests. The current version simply returns the latest version. 
Supports Jsonp requests.
needs update_service_consts.php where DB config constants are defined.
*/

require_once 'update_service_consts.php';
header('Content-type: application/json');

$encoded = '{"version":"' . AMFPHP_VERSION . '"}';
if(isset ($_GET['callback'])){
    echo$_GET['callback'] . '(' . $encoded . ');';
}else{
    echo $encoded;
}

/** tracing logic **/
	$dataToGetFromApache = array("GEOIP_COUNTRY_CODE", "GEOIP_COUNTRY_NAME", "GEOIP_REGION", "GEOIP_CITY", "GEOIP_DMA_CODE", "GEOIP_AREA_CODE", "HTTP_USER_AGENT", "HTTP_ACCEPT", "HTTP_ACCEPT_LANGUAGE", "HTTP_ACCEPT_ENCODING", "HTTP_ACCEPT_CHARSET", "REMOTE_ADDR");
	$sqlConnection = mysql_connect(AMFPHP_DB_HOST,AMFPHP_DB_NAME, AMFPHP_DB_PASS);
	mysql_set_charset("utf8");
	if(!$sqlConnection){
		$mess = "result=error:" . mysql_error()."- request id:$request_id";
		throw new Exception($mess);
	}
	if(!mysql_select_db(AMFPHP_DB_TABLE, $sqlConnection)){
		$mess = "result=error:" . mysql_error()."- request id:$request_id";
		throw new Exception($mess);
	}
	
	$setString = "";
	foreach($dataToGetFromApache as $infoType){
		if(isset($_SERVER[$infoType])){
			$setString = $setString . ", " . $infoType . " = '" . $_SERVER[$infoType] . "'";
		}
	}
	
	if(isset($_GET["backlink"])){
		$setString .= ", backlink = '" . mysql_real_escape_string($_GET["backlink"]) . "'";
	}

	//trim first ", "
	$setString = substr($setString, 2);	
	
	$query = "INSERT INTO amfphp_updates_log SET " . $setString;
	$ret = mysql_query($query, $sqlConnection);
    if(!$ret){
        die( "error executing query : ".$query."\nError code : ".mysql_errno($sqlConnection) . "\nError text : " . mysql_error($sqlConnection));
	}
//	print_r($query);
//	print_r($_SERVER);
?>