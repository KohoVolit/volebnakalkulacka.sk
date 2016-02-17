<?php

session_start();

error_reporting(E_ALL);

$relative_path = "../";

include($relative_path . "cache.php");

include($relative_path . "common.php");

include('data.php');

$smarty->assign('t',$texts);
$smarty->assign('questions',$questions);

$smarty->display('research.tpl');
