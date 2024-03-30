<?php
    header('Content-type: application/x-amf');
    require '../vendor/autoload.php';
    
    //$input = file_get_contents('php://input');
    
    $config = new Amfphp_Core_Config();
    $config->serviceFolders = array(dirname(__FILE__) . '/services/');
    $gateway = Amfphp_Core_HttpRequestGatewayFactory::createGateway($config);
    //$rawInputData = str_replace('echo', 'ekho', file_get_contents('php://input'));
    //$gateway = new Amfphp_Core_Gateway($_GET, $_POST, $rawInputData, 'application/x-amf', $config);
    $gateway->service();
    $gateway->output();
    
    //$deserializer = new Amfphp_Core_Amf_Deserializer();
    //$decoded = $deserializer->deserialize(array(), array(), $input);
    //file_put_contents('H:/log.txt', print_r($decoded, TRUE));
    //echo base64_decode("AAAAAAABAAsvMS9vblJlc3VsdAAEbnVsbAAAAAACAAw8PFRFU1RDT05OPj4=");
?>