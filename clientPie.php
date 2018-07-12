<?php

header('Content-Type: application/json');
//database

require_once ("DBController.php");
$db_handle = new DBController();
$query = "SELECT cpmodule, count(*) as c from ibb_cardetails_tracker WHERE DATE(date_time)
>= last_day(now()) + INTERVAL 1 DAY - INTERVAL 3 MONTH GROUP BY cpmodule ORDER BY c DESC limit 5";
$result = $db_handle->runQuery($query);

  //selects the top 5 clients with the most price checks 
    // $query = sprintf("SELECT cpmodule, count(*) as c from ibb_cardetails_tracker WHERE DATE(date_time)
    //  >= last_day(now()) + INTERVAL 1 DAY - INTERVAL 3 MONTH GROUP BY cpmodule ORDER BY c DESC limit 5" );
     


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

