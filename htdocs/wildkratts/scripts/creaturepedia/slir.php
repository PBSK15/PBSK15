<?php


function resizeImage($sourceImagePath, $finalWidth, $finalHeight) {


    $imgData = getimagesize($sourceImagePath);
    $originalWidth = $imgData[0];
    $originalHeight = $imgData[1];
    $imageType = $imgData["mime"];


    switch ($imageType) {
        case "image/jpeg":
            $sourceImage = @imagecreatefromjpeg($sourceImagePath);
            break;
        case "image/png":
            $sourceImage = @imagecreatefrompng($sourceImagePath);
            break;
        case "image/gif":
            $sourceImage = @imagecreatefromgif($sourceImagePath);
            break;
        default:
            return;
    }


    $aspectRatio = $originalWidth / $originalHeight;
    if ($finalWidth / $finalHeight > $aspectRatio) {
        $newWidth = $finalHeight * $aspectRatio;
        $newHeight = $finalHeight;
    } else {
        $newWidth = $finalWidth;
        $newHeight = $finalWidth / $aspectRatio;
    }


    $resizedImage = imagecreatetruecolor($newWidth, $newHeight);

    // Preserve transparency
    switch ($imageType) {
        case "image/jpeg":
        case "image/gif":
            imagealphablending($resizedImage, false);
            imagesavealpha($resizedImage, true);
            break;
    }


    imagecopyresampled($resizedImage, $sourceImage, 0, 0, 0, 0, $newWidth, $newHeight, $originalWidth, $originalHeight);


    header("Content-Type: $imageType");
    switch ($imageType) {
        case "image/jpeg":
            imagejpeg($resizedImage);
            break;
        case "image/png":
            imagepng($resizedImage);
            break;
        case "image/gif":
            imagegif($resizedImage);
            break;
    }

  
    imagedestroy($sourceImage);
    imagedestroy($resizedImage);
}



$sourceImagePath = __DIR__ . "/../../../" . $_GET['url'];

$dimensions = explode("-", $_GET['dimensions']);
$finalWidth = substr($dimensions[0], 1);
$finalHeight = substr($dimensions[1], 1);

resizeImage($sourceImagePath, $finalWidth, $finalHeight);


?>
