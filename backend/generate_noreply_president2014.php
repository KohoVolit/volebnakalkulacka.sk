<?php

$fparties = file("https://docs.google.com/spreadsheet/pub?key=0Am65qMOA9x34dGVhU2RkcTdWeFdwYU90bnhHSFlabFE&output=txt");
$fanswers = file("https://docs.google.com/spreadsheet/pub?key=0Ah0TJXObccZydFRGbktnVERSMGxzOUpQOGlsZVJkaVE&output=txt");

//read answers
$i = 1;
foreach ($fanswers as $row) {
  if ($i > 1) {
    $row_ar = str_getcsv($row,"\t");
    $exists[$row_ar[2]] = true; 
  }
  $i++;
}
print_r($exists);
//read parties
$out = array();
$i = 1;
foreach ($fparties as $row) {
  if ($i > 1) {
    $row_ar = str_getcsv($row,"\t");
    if (!isset($exists[$row_ar[2]])) {
      $out[] = array(
        'first_name' => trim($row_ar[0]),
        'last_name' => trim($row_ar[1]),
        'friendly_name' => friendly_url(trim($row_ar[1]),'sk_SK.UTF-8'),
        'id' => $i-1,
      );
    }
  }
  $i++;
}

$fouts = array(
	"../www/volba-prezidenta-2014/noreply.json",
);
foreach ($fouts as $fout) {
  $f = fopen($fout, "w+");
  fwrite($f,json_encode($out));
  fclose($f);
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
