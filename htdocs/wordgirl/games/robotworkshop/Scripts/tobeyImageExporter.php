<?php

$width = $_POST['width'];
$height = $_POST['height'];
$pixel_data = array();

function hexToRgb($hex_color) {
    return array(
        hexdec(substr($hex_color, 0, 2)),
        hexdec(substr($hex_color, 2, 2)),
        hexdec(substr($hex_color, 4, 2)),
    );
}

$image = imagecreatetruecolor($width, $height);


for ($x = 0; $x < $height - 1; $x++) {
    
    $widthData = explode(",", $_POST["px" . strval($x)]);
    for ($y = 0; $y < $width; $y++) {
        
        $rgb_color = hexToRgb($widthData[$y]);
        $color = imagecolorallocate($image, $rgb_color[0], $rgb_color[1], $rgb_color[2]);
        imagesetpixel($image, $y, $x, $color);

    }

}


header('Content-Type: image/jpeg');
header('Content-Disposition: attachment; filename="myRobot.jpg"');

imagejpeg($image);
imagedestroy($image);
?>
