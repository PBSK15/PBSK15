<?php

$showsData = json_decode(file_get_contents("https://content.services.pbskids.org/v2/kidspbsorg/home/"))->collections;
$finalShowList = [];



function buildShowJson(object $program) : object {

    $showObj = (object) [];


    $showObj->website = @$program->websiteUrl;
    $showObj->shop_url = @$program->shopUrl;
    $showObj->title = @$program->title;
    $showObj->short_description = "";
    $showObj->donate_url = "";
    $showObj->age_range = @$program->ages;
    $showObj->google_analytics_id = "";
    $showObj->group = "";
    $showObj->base_url = @$program->websiteUrl;
    $showObj->parents_url = @$program->parentsUrl;
    $showObj->cove_slug = @$program->slug;
    $showObj->nola = @$program->nola_root;
    $showObj->description = "";


    // URLs
    $program->videoStores = property_exists($program, "videoStores") ? $program->videoStores : [];
    foreach ($program->videoStores as $provider) {

        $store = $provider->store;
        $url = $provider->url;

        switch($store) {
            case "amazon-video":
                $showObj->amazon_url = $url;
                break;
            default:
                $showObj->{str_replace("-", "_", $store) . "_url"} = $url;
                break;
        }

    }

    // Sponsors
    $showObj->sponsors = [];
    $program->sponsors = property_exists($program, "sponsors") ? $program->sponsors : [];
    foreach ($program->sponsors as $sponsor) {
        
        $sponsorObj = (object) [];

        $sponsorObj->mezzanine = $sponsor->image_url;
        $sponsorObj->bates_path = $sponsor->image_url;
        $sponsorObj->link = $sponsor->link_url;
        $sponsorObj->name = $sponsor->title;
        
        $showObj->sponsors[] = $sponsorObj;

    }

    return $showObj;
}


// Wow they really have shows organized into tiers
for ($i = 1; $i <= 10; $i++) {

    if (!property_exists($showsData, "kids-programs-tier-" . strval($i))) {
        break;
    }

    $programs = $showsData->{"kids-programs-tier-" . strval($i)}->content;
    foreach($programs as $program) {
        $finalShowList[] = buildShowJson($program);
    }

}



$finalShowObj = (object) [];
$finalShowObj->start = 1;
$finalShowObj->end = count($finalShowList);
$finalShowObj->count = count($finalShowList);
$finalShowObj->matched = 1;
$finalShowObj->items = $finalShowList;


$finalShowJsonStr = json_encode($finalShowObj);
die(((isset($_GET['callback']) ? ($_GET['callback'] . "(" . $finalShowJsonStr . ");") : $finalShowJsonStr)));


/**
 * Baseline for show json:
 */
/* 
    {
        "website": "http://pbskids.org/wordgirl/",
        "shop_url": "http://shop.pbskids.org/wordgirl?utm_source=PBS_kids&utm_medium=brandsite&utm_content=ShopButton&utm_campaign=wordgirl_091914",
        "title": "WordGirl",
        "short_description": "WordGirl enriches young audiences’ vocabulary, closes the gap for those who don’t grow up in language-rich environments, instills a love of language, and fosters better reading comprehension. ",
        "donate_url": "",
        "itunes_url": "https://itunes.apple.com/us/tv-season/wordgirl-vol.-3/id492235467",
        "age_range": "6-8",
        "google_analytics_id": "UA-3999648-2",
        "group": "B",
        "base_url": "http://pbskids.org/wordgirl/",
        "sponsors": [
          {
            "mezzanine": "http://pbskids.org/kidsactivity/media/uploads/sponsors/images/CEC-Logo_RGB_Shaded_centered2.png",
            "bates_path": "/bates/featuresdb/media/uploads/sponsors/images/CEC-Logo_RGB_Shaded_centered2.png",
            "link": "http://www.chuckecheese.com/",
            "name": "Chuck E. Cheese's"
          }
        ],
        "parents_url": "http://www.pbs.org/parents/wordgirl/parentsandteachers.html",
        "amazon_url": "http://www.amazon.com/gp/product/B00DWOY2C8/ref=as_li_tl?ie=UTF8&camp=1789&creative=9325&creativeASIN=B00DWOY2C8&linkCode=as2&tag=p05a2-20&linkId=F6CY2JJCIPV5I373",
        "topics_list": "Literacy and Reading",
        "cove_slug": "wordgirl",
        "google_play_url": "",
        "id": 1940,
        "nola": "WORG",
        "description": "WordGirl enriches young audiences’ vocabulary, closes the gap for those who don’t grow up in language-rich environments, instills a love of language, and fosters better reading comprehension."
      }

      */