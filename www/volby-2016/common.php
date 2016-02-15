<?php
/**
* common functions
*/

// load server settings
$server_settings = json_decode(file_get_contents($relative_path . '../local_settings.json'));
// load app settings
$app_settings = json_decode(file_get_contents($relative_path . 'settings.json'));
// settings
$settings = (object) array_merge((array) $server_settings, (array) $app_settings);

error_reporting($settings->error_reporting);

//get language
$lang = lang($settings);

// include texts
$handle = fopen($relative_path . 'texts_' . $lang . '.csv', "r");
$t = csv2array($handle);

// customization
$customization = [];
if ($settings->customization) {
    if (isset($_GET['bg']))
        $customization['bg'] = htmlspecialchars(urldecode($_GET['bg']));
    if (isset($_GET['navbar']))
        $customization['navbar'] = htmlspecialchars(urldecode($_GET['navbar']));
    if (isset($_GET['css']))
        $customization['css'] = htmlspecialchars(urldecode($_GET['css']));
}


// put full path to Smarty.class.php
require($settings->smarty);
$smarty = new Smarty();
$smarty->setTemplateDir($relative_path . '../../smarty/templates/' . $settings->template);
$smarty->setCompileDir($relative_path . '../../smarty/templates_c');

$smarty->assign('lang', $lang);
$smarty->assign('text',$t);
$smarty->assign('settings',$settings);
$smarty->assign('session_id',session_id());
$smarty->assign('customization',$customization);
$smarty->assign('relative_path',$relative_path);



/**
* get language
*/
function lang($settings) {
    if (isset($_GET['lang']) and (in_array($_GET['lang'],$settings->languages))) {
        $_SESSION['lang'] = $_GET['lang'];
        return $_GET['lang'];
    }
    else {
        if (isset($_SESSION['lang']))
            return $_SESSION['lang'];
        else    //default language
            return $settings->defaults->language;
    }
}

/**
* reads csv file into associative array
* code, text => t[$code] = $text;
*/
function csv2array($handle) {
    $array = $fields = [];
    if ($handle) {
        while (($row = fgetcsv($handle, 4096)) !== false) {
            if (empty($fields)) {
                $fields = $row;
                continue;
            }
            foreach ($row as $k=>$value) {
                $array[$row[0]] = $value;
            }
        }
        if (!feof($handle)) {
            /*echo "Error: unexpected fgets() fail\n";*/
        }
    } 
    return $array;  
}

/**
* check for malicious attempts to retrieve files
* http://stackoverflow.com/questions/1587695/sanitize-get-parameters-to-avoid-xss-and-other-attacks
*/
function sanitize($input) {
    return preg_replace('/[^-a-zA-Z0-9_.]/', '', $input);;
}

/**
* extracts user's answers
*/
function get_user_values() {
  $user = array('votes'=>array(),'weight'=>array());
  if (count($_GET) > 0) {
    foreach ($_GET as $key => $param) {
      //votes;
      if (substr($key,0,1) == 'q') 
        $user['votes'][substr($key,1)] = (int) $param;
      else if (substr($key,0,1) == 'w')
        $user['weight'][substr($key,1)] = true;
    }
  } else
      return $user;
  return $user;
}
