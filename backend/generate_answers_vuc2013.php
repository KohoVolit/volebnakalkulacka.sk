<?php

//generates answers for vuc 2013

$file = file("source/vuc2013_replies.csv");

$directory = 'volby-vuc-2013/';

$path = '../www/';

$dir = $path . $directory;

$regions = array(
  'Bratislava',
  'Trnava',
  'Trenčín',
  'Nitra',
  'Žilina',
  'Banská Bystrica',
  'Košice',
  'Prešov'
);

$fcand = file('https://docs.google.com/spreadsheet/pub?key=0AjnJxiiS6aewdFFWSGFwNmkzNkE4TEY2ZjNISTZCTHc&single=true&gid=8&output=txt');

//get replies
$i = 0;
foreach ($file as $row) {
	if ($i > 0) {
	  for ($j = 1; $j <= 26; $j++) {
		$row_ar = explode("\t",$row);
		$replies[$row_ar[3]] = $row_ar;
		$is_bad[$row_ar[3]] = $row_ar[3];
	  }
	}
	$i++;
}

//print_r($replies);die();

$k = 1;
$details = array();
foreach ($regions as $region) {
  //select candidates from the region
  $cands = array();
  $noreply = array();
  $data = array();
  foreach ($fcand as $cand) {
    $cand_ar = str_getcsv($cand,"\t");
    if (trim($cand_ar[5]) == $region) {
      $c = array(
        'unique_code' => $cand_ar[0],
        'first_name' => $cand_ar[1],
        'last_name' => $cand_ar[2],
        'party' => $cand_ar[3],
        'region' => $cand_ar[5], 
        'id' => $k,
        'friendly_name' => friendly_url($cand_ar[1] . ' ' . $cand_ar[2])
      );
      $cands[$cand_ar[0]] = $c;
      $noreply[$cand_ar[0]] = $c;
      if (isset($replies[$cand_ar[0]])) {
        $item = $c;
        $item['vote'] = get_answers($replies[$cand_ar[0]]);
        $data[] = $item;
        $details[$c['friendly_name']] = get_details($replies[$cand_ar[0]],$c['friendly_name']);
        unset($noreply[$cand_ar[0]]);
        unset($is_bad[$cand_ar[0]]);
      } else {

      }
      $k++;
    }
  }
  //print_r($data);print_r($noreply);die();


	$fout = fopen ($dir . 'answers_' . friendly_url($region) . '.json', "w+");
	$json = json_encode($data);
	fwrite($fout,$json);
	fclose($fout);
	
	$fout = fopen ($dir . 'noreply_' . friendly_url($region) . '.json', "w+");
	$json = json_encode($noreply);
	fwrite($fout,$json);
	fclose($fout);
	//die();
}

$fout = fopen ($dir . 'details_ser.txt', "w+");
	$json = serialize($details);
	fwrite($fout,$json);
	fclose($fout);

print_r($data); print_r($details);
echo "nenalezené kódy:<br/>";
foreach ($is_bad as $bkey=>$bad) {
  echo $bkey . "<br/>";
}

function get_answers($c) {
  $out = array();
  for ($j = 1; $j <= 26; $j++) {
    $out[$j] = vote2vote($c[2+2*$j]);
  }
  return $out;
}

function get_details($c,$friendly_name) {
  $out = array();
  for ($j = 1; $j <= 26; $j++) {
    if (trim($c[3+2*$j]) != '') {
      $out[$j] = trim($c[3+2*$j]);
    }
  }
  return $out;
}



/*$dir = $path . 'poslanecka-snemovna-2013-iinfo/';
if(!file_exists($dir)) 
 mkdir($dir);


$fout = fopen ($dir . 'answers_osops.json', "w+");
$json = json_encode($data);
fwrite($fout,$json);
fclose($fout);*/

  //no replies
/*$fout = fopen ($dir . 'noreply_podnikatel.json', "w+");
$json = json_encode($norep);
fwrite($fout,$json);
fclose($fout);*/

  //details
/*$fout = fopen ($dir . 'details_ser.txt', "w+");
$json = serialize($details);
fwrite($fout,$json);
fclose($fout);*/




function vote2vote($str) {
  if (trim($str) == 'áno') return 1;
  if (trim($str) == 'nie') return -1;
  return 0;
}

function get_party($short_name, $parties) {
 $k=1;
 foreach ($parties as $party) {
   if ($party['party_short_name'] == $short_name) {
     return array(
       'party' => $party['party'],
       'party_short_name' => $party['party_short_name'],
       'id' => $k,
       'friendly_name' => friendly_url($party['party_short_name']),
     );
   }
   $k++;
 }
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
