<?php

header('Content-Type: application/json');
//database

require_once ("DBController.php");
$db_handle = new DBController();
$query = "SELECT location, count(*) as c from ibb_cardetails_tracker 
WHERE DATE(date_time) >= last_day(now()) + INTERVAL 1 DAY - INTERVAL 3 MONTH GROUP BY location ORDER BY c DESC limit 5";
$result = $db_handle->runQuery($query);

  //selects top 5 locations in the past 2 months where there have been the most price checks done 

  
    // $query = sprintf("SELECT location, count(*) as c from ibb_cardetails_tracker 
    // WHERE DATE(date_time) >= last_day(now()) + INTERVAL 1 DAY - INTERVAL 3 MONTH GROUP BY location ORDER BY c DESC limit 5" );
     


//  $result = $mysqli->query($query);
 $data = array();
foreach ($result as $row) {
	$data[] = $row;
}
// close connection
// $result->close();

//close connection
// $mysqli->close();
print json_encode($data);
?>