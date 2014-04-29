<?php

// put full path to Smarty.class.php
require('/usr/local/lib/php/Smarty/libs/Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir('../../smarty/templates');
$smarty->setCompileDir('../../smarty/templates_c');
$smarty->setCacheDir('../../smarty/cache');
$smarty->setConfigDir('../../smarty/configs');

/*$calc2014ep = array (
  array(
    'name' => 'Volebná kalkulačka EP 2014',
    'friendly_url' => 'europsky-parlament-2014',
    'selected' => true,
    'custom' => true
  ),
);*/

$inventory2014ep = array (
  array(
    'name' => 'Inventúra hlasovaní EP 2009-2014',
    'friendly_url' => 'inventura-hlasovani-europsky-parlament-2009-2014',
    'selected' => true,
    'custom' => true
  ),
);

$constit = array(
  'banska-bystrica' => 'Banskobystrický kraj',
  'bratislava' => 'Bratislavský kraj',
  'kosice' => 'Košický kraj',
  'nitra' => 'Nitriansky kraj',
  'presov' => 'Prešovský kraj',
  'trencin' => 'Trenčiansky kraj',
  'trnava' => 'Trnavský kraj',
  'zilina' => 'Žilinský kraj'
);

foreach ($constit as $ckey=>$c) {
  $constit[$ckey] = array(
    'name' => $c,
    'friendly_url' => 'volby-vuc-2013/?region='.$ckey . '&',
    'selected' => (($ckey=='bratislava') ? 'true' : 'false'),
  );
}



$sizes = array(
  array('name' => 'Najväčšia 850x600', 'width' => '850', 'height' => '600'),
  array('name' => 'Štandardná 650x550', 'width' => '650', 'height' => '550', 'selected' => true),
  array('name' => 'Mobilná 480x320', 'width' => '480', 'height' => '320'),
  array('name' => 'Mobilná na výšku 320x480', 'width' => '320', 'height' => '480'),
);

$calcs = array(

  /*'calc2014ep' => array(
    'name' => 'Volebná kalkulačka Európsky parlament 2014',
    'calc' => $calc2014ep,
  ),*/

  'inventory2014ep' => array(
    'name' => 'Inventúra hlasovaní Európsky parlament 2009-2014',
    'calc' => $inventory2014ep,
  ),

  'all' => array(
    'name' => 'Celá VolebnáKalkulačka.sk',
    'calc' => array(array('name'=>'VolebnáKalkulačka.sk','friendly_url'=>'?')),
  ),
  
  'president2014' => array(
    'name' => 'Volebná kalkulačka pre prezidentské voľby 2014',
    'calc' => array(array('name'=>'Prezidentské voľby 2014','friendly_url'=>'volba-prezidenta-2014/?')),
  ),

  'vuc2013' => array(
    'name' => 'Krajské volebné kalkulačky 2013',
    'calc' => $constit,
  ),

);

//random key
$key = randomAlphaNum(8);

$smarty->assign('calcs', $calcs);
$smarty->assign('key', $key);
$smarty->assign('sizes', $sizes);

$smarty->display('embed.tpl'); 

/**
* generates random key
*/
function randomAlphaNum($length){

    $rangeMin = pow(36, $length-1); //smallest number to give length digits in base 36
    $rangeMax = pow(36, $length)-1; //largest number to give length digits in base 36
    $base10Rand = mt_rand($rangeMin, $rangeMax); //get the random number
    $newRand = base_convert($base10Rand, 10, 36); //convert it
   
    return $newRand; //spit it out
}


/**
* creates "friendly url" version of text, translits string (gets rid of diacritics) and substitutes ' ' for '-', etc.
* @return friendly url version of text
* example:
* friendly_url('klub ČSSD')
*     returns 'klub-cssd'
*/
function friendly_url($text,$locale = 'cs_CZ.utf-8') {
    $old_locale = setlocale(LC_ALL, "0");
setlocale(LC_ALL,$locale);
$url = $text;
$url = preg_replace('~[^\\pL0-9_]+~u', '-', $url);
$url = trim($url, "-");
$url = iconv("utf-8", "us-ascii//TRANSLIT", $url);
$url = strtolower($url);
$url = preg_replace('~[^-a-z0-9_]+~', '', $url);
setlocale(LC_ALL,$old_locale);
return $url;
}

?>
