<?php
    
    header('Content-Type: application/json');
    require_once ("DBController.php");
    $db_handle = new DBController();

    $varModel = @$_POST['modelName'];
    $varMake = @$_POST['makeName'];
    $varClient = @$_POST['clientName'];
    $varLocation = @$_POST['locationName'];

    $dateFrom = @$_POST['dateFrom'];
    $dateTo = @$_POST['dateTo'];

    $a = "SELECT date_time, count(*) as c FROM ibb_cardetails_tracker WHERE ";
    $b = "SELECT date_time, count(*) as totalCount FROM ibb_cardetails_tracker WHERE ";


    if(@$_POST['dateFrom'] !=""  && @$_POST['dateTo'] != ""){
        $date = DateTime::createFromFormat('m/d/Y',$dateFrom);
        $from_date = $date->format("Y-m-d");
        $fate = DateTime::createFromFormat('m/d/Y',$dateTo);
        $to_date = $fate->format("Y-m-d");

        $a = $a."date_time BETWEEN DATE '$from_date' AND '$to_date' ";
        $b = $b."date_time BETWEEN DATE '$from_date' AND '$to_date' ";

    }
    else{
        $a = $a."DATE(date_time) >= last_day(now()) + INTERVAL 1 DAY - INTERVAL 3 MONTH ";
        $b = $b."DATE(date_time) >= last_day(now()) + INTERVAL 1 DAY - INTERVAL 3 MONTH ";
    }
    
    if(!empty($_POST['makeName'])){
        
        $a = $a."AND make = '$varMake' ";
        $b = $b."AND make = '$varMake' ";


        if(!empty($_POST['modelName'])){
            $a = $a."AND model = '$varModel' ";
            $b = $b."AND model = '$varModel' ";

        }

    }
    if(!empty($_POST['clientName'])){

        $a = $a."AND cpmodule = '$varClient' ";
        $b = $b."AND cpmodule = '$varClient' ";

    }
    if(!empty($_POST['locationName']) ){
       
        $a = $a."AND location = '$varLocation' ";
        $b = $b."AND location = '$varLocation' ";

    }

    $a = $a."GROUP BY CAST(date_time as DATE)";
    $query = $a;
    $query2 = $b;
  
    $result = $db_handle->runQuery($query);
 $result1 = $db_handle->runQuery($query2);;
 $data = array();
foreach ($result as $row) {
	$data[] = $row;
}
foreach ($result1 as $row) {
	$data[] = $row;
}

    // close connection
    // $result->close();
    // //close connection
    // $mysqli->close();
    print json_encode($data);
?>