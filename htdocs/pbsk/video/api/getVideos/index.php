<?php


$epData = json_decode(file_get_contents("https://content.services.pbskids.org/v2/kidspbsorg/programs/" . strtolower($_GET['program'])));
$finalEpList = [];


function buildVideoJson(object $video) : object {


    if ($video->video_type != $_GET['type']) {
        return new stdClass();
    }

    $imageResArr = ["kids-mezzannine-16x9", "kids-mezzannine-4x3", "ipad_kidsgo", "googlethumbnail", "littlevideothumbnail", "originalres_16x9", "covestackcard_kids", "thumbnailkidsgodefault", "originalres_4x3"];
    $videoResArr = ["ipad", "iphone"];
    $flashVideoResArr = [1200, 400, 800];

    $videoObj = (object) [];

    $videoObj->airdate = $video->air_date;
    $videoObj->guid = $video->id;
    $videoObj->title = $video->title;
    $videoObj->type = $video->video_type;
    $videoObj->series_title = $video->program->title;
    $videoObj->series_nola = $video->program->nola_root;
    $videoObj->pid = $video->id;
    $videoObj->description = $video->description;
    $videoObj->expirationdate = $video->expire_date;


    // Captions
    $videoObj->captions = new stdClass();
    $video->captions = property_exists($video, "captions") ? $video->captions : [];
    foreach ($video->captions as $caption) {
        
        $captionObj = (object) [];
        $captionObj->url = $caption->URI;
        $captionObj->language = $caption->en;
        $videoObj->captions->{strtolower(str_replace("Caption-", "", $caption->format))} = $captionObj;

    }


    // Images
    $videoObj->images = new stdClass();
    $video->images = property_exists($video, "images") ? $video->images : [];
    foreach ($imageResArr as $imageRes) {
        $imageResObj = (object) [];

        $imageResObj->width = 480;
        $imageResObj->height = 360;
        $imageResObj->url = $video->images->mezzanine;

        $videoObj->images->{$imageRes} = $imageResObj;
    }


    // Videos
    $vid = $video->mp4;
    // The current videos API serves the duration in seconds, whereas the old flash API served it in milliseconds
    $vidDur = $video->duration * 1000;

    $videoObj->videos = new stdClass();
    $video->videos = property_exists($video, "videos") ? $video->videos : [];
    foreach ($videoResArr as $videoRes) {
        $videoResObj = (object) [];

        $videoResObj->bitrate = null;
        $videoResObj->length = $vidDur;
        $videoResObj->url = $vid;
        
        $videoObj->videos->{$videoRes} = $videoResObj;
    }

    $videoObj->videos->flash = new stdClass();
    $videoObj->videos->flash->length = $vidDur;
    foreach ($flashVideoResArr as $flashVideoRes) {
        $flashVideoResObj = (object) [];

        $flashVideoResObj->bitrate = $flashVideoRes;
        $flashVideoResObj->url = $vid;

        $videoObj->videos->flash->{"mp4=" . strval($flashVideoRes) . "k"} = $flashVideoResObj;
    }


    return $videoObj;


}








$epCount = 0;
foreach ($epData->order as $epType) {

    foreach ($epData->collections->{$epType}->content as $ep) {

        if ($epCount > intval($_GET['endindex'])) {
            break 2;
        }

        $epJson = buildVideoJson($ep);
        if ($epJson != new stdClass()) {
            $finalEpList[] = buildVideoJson($ep);
            $epCount++;
        }

    }

}




$finalEpObj = (object) [];
$finalEpObj->start = 1;
$finalEpObj->end = count($finalEpList);
$finalEpObj->count = count($finalEpList);
$finalEpObj->matched = count($finalEpList);
$finalEpObj->items = $finalEpList;


$finalEpJsonStr = json_encode($finalEpObj);
die(((isset($_GET['callback']) ? ($_GET['callback'] . "(" . $finalEpJsonStr . ");") : $finalEpJsonStr)));










/**
 * Baseline for episode JSON:
 */
/*
"series_title": "WordGirl",
    "series_nola": "WORG",
    "series_url": "http://pbskids.org/wordgirl/",
    "pid": "",
    "description": "Chuck adds a new condiment to his arsenal -- peanut butter! The highly sticky substance envelops its victims in a giant ball of peanut butter. Since Huggy has to roll a peanut butter-covered WordGirl around town, will she be able to stop him?\r\nVocabulary Words: Envelop, Hinder",
    "expirationdate": "2014-12-05 05:00:00"
{
    "airdate": "2014-11-07 05:00:00",
    "captions": {
      "sami": {
        "url": "http://kids.video.cdn.pbs.org/captions/wordgirl/685561cd-5cdd-4a85-b8ac-e3e632160a81/captions/137579_Encoded.sami",
        "language": "en"
      },
      "dfxp": {
        "url": "http://kids.video.cdn.pbs.org/captions/wordgirl/685561cd-5cdd-4a85-b8ac-e3e632160a81/captions/137580_Encoded.dfxp",
        "language": "en"
      },
      "srt": {
        "url": "http://kids.video.cdn.pbs.org/captions/wordgirl/685561cd-5cdd-4a85-b8ac-e3e632160a81/captions/137581_Encoded.srt",
        "language": "en"
      },
      "webvtt": {
        "url": "http://kids.video.cdn.pbs.org/captions/wordgirl/685561cd-5cdd-4a85-b8ac-e3e632160a81/captions/137582_Encoded.vtt",
        "language": "en"
      }
    },
    "guid": "685561cd-5cdd-4a85-b8ac-e3e632160a81",
    "title": "Peanut Butter Battles",
    "type": "Episode",
    "images": {
      "kids-mezzannine-16x9": {
        "width": 0,
        "height": 0,
        "url": "http://image.pbs.org/video-assets/pbs-kids/wordgirl/65429/images/Kids-Mezzannine-16x9_262.jpg"
      },
      "kids-mezzannine-4x3": {
        "width": 0,
        "height": 0,
        "url": "http://image.pbs.org/video-assets/pbs-kids/wordgirl/65429/images/Kids-Mezzannine-4x3_438.jpg"
      },
      "ipad_kidsgo": {
        "width": 80,
        "height": 45,
        "url": "http://image.pbs.org/video-assets/pbs-kids/wordgirl/65429/images/Kids-Mezzannine-16x9_262.jpg.resize.80x45.jpg"
      },
      "googlethumbnail": {
        "width": 160,
        "height": 120,
        "url": "http://image.pbs.org/video-assets/pbs-kids/wordgirl/65429/images/Kids-Mezzannine-16x9_262.jpg.resize.160x120.jpg"
      },
      "littlevideothumbnail": {
        "width": 160,
        "height": 90,
        "url": "http://image.pbs.org/video-assets/pbs-kids/wordgirl/65429/images/Kids-Mezzannine-16x9_262.jpg.resize.160x90.jpg"
      },
      "originalres_16x9": {
        "width": 512,
        "height": 288,
        "url": "http://image.pbs.org/video-assets/pbs-kids/wordgirl/65429/images/Kids-Mezzannine-16x9_262.jpg.resize.512x288.jpg"
      },
      "covestackcard_kids": {
        "width": 454,
        "height": 255,
        "url": "http://image.pbs.org/video-assets/pbs-kids/wordgirl/65429/images/Kids-Mezzannine-16x9_262.jpg.resize.454x255.jpg"
      },
      "thumbnailkidsgodefault": {
        "width": 69,
        "height": 53,
        "url": "http://image.pbs.org/video-assets/pbs-kids/wordgirl/65429/images/Kids-Mezzannine-4x3_438.jpg.resize.69x53.jpg"
      },
      "originalres_4x3": {
        "width": 480,
        "height": 360,
        "url": "http://image.pbs.org/video-assets/pbs-kids/wordgirl/65429/images/Kids-Mezzannine-4x3_438.jpg.resize.480x360.jpg"
      }
    },
    "videos": {
      "ipad": {
        "bitrate": null,
        "length": 690000,
        "url": "http://urs.pbs.org/redirect/2dd04c872cae4c46834be6164c591a1d/"
      },
      "iphone": {
        "bitrate": null,
        "length": 690000,
        "url": "http://urs.pbs.org/redirect/457cf2d273284cc29b809eece4e56b01/"
      },
      "flash": {
        "length": 690000,
        "mp4-1200k": {
          "bitrate": 1200,
          "url": "http://urs.pbs.org/redirect/c1dbbbc557aa4d43a863078f411ff807/"
        },
        "mp4-400k": {
          "bitrate": 400,
          "url": "http://urs.pbs.org/redirect/f63f0cbe7ab8458091987ede61d79e89/"
        },
        "mp4-800k": {
          "bitrate": 800,
          "url": "http://urs.pbs.org/redirect/8a9e066d687d4d4f90e4eba7b9470af6/"
        }
      }
    },
    "series_title": "WordGirl",
    "series_nola": "WORG",
    "series_url": "http://pbskids.org/wordgirl/",
    "pid": "",
    "description": "Chuck adds a new condiment to his arsenal -- peanut butter! The highly sticky substance envelops its victims in a giant ball of peanut butter. Since Huggy has to roll a peanut butter-covered WordGirl around town, will she be able to stop him?\r\nVocabulary Words: Envelop, Hinder",
    "expirationdate": "2014-12-05 05:00:00"
  }*/