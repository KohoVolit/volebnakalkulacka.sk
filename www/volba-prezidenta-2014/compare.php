<?php

//


session_start();
 

// put full path to Smarty.class.php
require('/usr/local/lib/php/Smarty/libs/Smarty.class.php');
$smarty = new Smarty();

$smarty->setTemplateDir('../../smarty/templates');
$smarty->setCompileDir('../../smarty/templates_c');
$smarty->setCacheDir('../../smarty/cache');
$smarty->setConfigDir('../../smarty/configs');

//$_SESSION['email_provided'] = false;
 
if (!isset($_SESSION['email_provided']) or (!$_SESSION['email_provided'])) {
  $calc_code = 'president2014';
  $smarty->assign('calc_code',$calc_code);
  $smarty->assign('query_string',$_SERVER['QUERY_STRING']);
  $_SESSION['email_provided'] = true;
  $smarty->display('psp2013_compare_dialog.tpl');
  

} else {



	include("texts.php");

	$details = unserialize(file_get_contents("details_ser.txt"));
//print_r($details);die();


	$parties_file = './answers.json';
	//read parties = candidates = mps
	$candidates = json_decode(file_get_contents($parties_file));

	//extract user values
	$user = get_user_values();

	//read questions
	$qfile = './questions.json';
	$questions = json_decode(file_get_contents($qfile));

	//compare up to 2
	$mps = array();
	if (isset($_SESSION['last_id'])) {
	  $candidate = get_mp($_SESSION['last_id'],$candidates);
	  if (isset($candidate->id)) {
		$candidate->match = (isset($_SESSION['last_match']) ? $_SESSION['last_match'] : '');
		$mps[] = $candidate;
	  } 
	}


	if(isset($_REQUEST['id']) and 
	  ( (!isset($_SESSION['last_id'])) or 
		( (isset($_SESSION['last_id']) and ($_REQUEST['id'] != $_SESSION['last_id']) ) ) ) ) {
	  $candidate = get_mp($_REQUEST['id'],$candidates);
	  $candidate->match = (isset($_REQUEST['match']) ? $_REQUEST['match'] : '');
	  if (isset($candidate->id)) {
		$mps[] = $candidate;
		$_SESSION['last_id'] = $_REQUEST['id'];
		$_SESSION['last_match'] = $candidate->match;
	  } 
	}
	$mps = array_reverse($mps);
	//print_r($mps);die();

	$smarty->assign('details',$details);
	$smarty->assign('text',$text);
	$smarty->assign('user',$user);
	$smarty->assign('mps',$mps);
	$smarty->assign('questions',$questions);
	$smarty->display('psp2013-compare.tpl');
}


/**
* finds mp by id
*/
function get_mp($id,$candidates) {
  $candidate = new StdClass();
  foreach ($candidates as $c) {
    if ($id == $c->id) {
      $candidate = $c;
      break;
    }
  }
  return $candidate;
}


/**
* extracts user's answers
*/
function get_user_values() {
  $user = array();
  if (count($_GET) > 0) {
    foreach ($_GET as $key => $param) {
      //votes
      if (substr($key,0,2) == 'q-') 
        {if ($param != 0)
          $user['vote'][substr($key,2)] = $param;}
      else if (substr($key,0,2) == 'c-')
        $user['weight'][substr($key,2)] = true;

    }
  } else
    return false;
  
  return $user;

}

?>
